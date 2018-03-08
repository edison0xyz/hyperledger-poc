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
    console.log('Contract arrivalDateTime: ' + contract.timestamp);

    // if the payment did not arrive on time the payout is zero
    // todo: work on logic to adjust late payments
    /*
    if (paymentReceived.timestamp > contract.arrivalDateTime) {
        payOut = 0;
        console.log('Late payment');
    }
    */

    console.log('Payout: ' + payOut);

    contract.bondIssuer.accountBalance -= payOut;
    contract.cdsBuyer.accountBalance += payOut;
  
  	// update state after external calls
  	contract.amountPaid +=payOut;
  	if (contract.principalAmount - contract.amountPaid <= 0) { 
    	contract.status = 'FULFILLED';  
    } else {
    	contract.status = 'IN_PROGRESS';
    }
    // set the status of the payment
    payment.status = 'IN_PROGRESS';


    console.log('CDSBuyer: ' + contract.cdsBuyer.$identifier + ' new balance: ' + contract.cdsBuyer.accountBalance);
    console.log('BondIssuer: ' + contract.bondIssuer.$identifier + ' new balance: ' + contract.bondIssuer.accountBalance);

    return getParticipantRegistry('org.biznet.cds.CDSBuyer')
        .then(function (CDSBuyerRegistry) {
            // update the CDSBuyer's balance
            return CDSBuyerRegistry.update(contract.cdsBuyer);
        })
        .then(function () {
            return getParticipantRegistry('org.biznet.cds.BondIssuer');
        })
        .then(function (BondIssuerRegistry) {
            // update the BondIssuer's balance
            return BondIssuerRegistry.update(contract.bondIssuer);
        })
        .then(function () {
            return getAssetRegistry('org.biznet.cds.Payment');
        })
        .then(function (paymentRegistry) {
            // update the state of the payment
            return paymentRegistry.update(payment);
        })
  		.then(function () {
            return getAssetRegistry('org.biznet.cds.Contract');
        })
        .then(function (contractRegistry) {
            // update the state of the payment
            return contractRegistry.update(contract);
        })
  		
  ;
}