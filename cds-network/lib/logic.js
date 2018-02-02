/**
 * A payment has been received
 * @param {org.biznet.cds.PaymentReceived} paymentReceived - the PaymentReceived transaction
 * @transaction
 */
function payOut(paymentReceived) {

    var contract = paymentReceived.payment.contract;
    var payment = paymentReceived.payment;
    var payOut = payment.amountPaid;

    console.log('Received at: ' + paymentReceived.timestamp);
    console.log('Contract arrivalDateTime: ' + contract.arrivalDateTime);

    // set the status of the payment
    payment.status = 'ARRIVED';

    // if the payment did not arrive on time the payout is zero
    // todo: work on logic to adjust late payments
    
    if (paymentReceived.timestamp > contract.arrivalDateTime) {
        payOut = 0;
        console.log('Late payment');
    }

    console.log('Payout: ' + payOut);
    contract.CDSBuyer.accountBalance += payOut;
    contract.BondIssuer.accountBalance -= payOut;

    console.log('CDSBuyer: ' + contract.CDSBuyer.$identifier + ' new balance: ' + contract.CDSBuyer.accountBalance);
    console.log('BondIssuer: ' + contract.BondIssuer.$identifier + ' new balance: ' + contract.BondIssuer.accountBalance);

    return getParticipantRegistry('org.biznet.cds.CDSBuyer')
        .then(function (CDSBuyerRegistry) {
            // update the CDSBuyer's balance
            return CDSBuyerRegistry.update(contract.CDSBuyer);
        })
        .then(function () {
            return getParticipantRegistry('org.biznet.cds.BondIssuer');
        })
        .then(function (BondIssuerRegistry) {
            // update the BondIssuer's balance
            return BondIssuerRegistry.update(contract.BondIssuer);
        })
        .then(function () {
            return getAssetRegistry('org.biznet.cds.Payment');
        })
        .then(function (paymentRegistry) {
            // update the state of the payment
            return paymentRegistry.update(payment);
        });
}