export class Payment {
    $class: string;
    paymentId: string;
    status: string;
    amountPaid: number;
    contract: string;
}

export class PaymentReceived {
    $class: string;
    payment: string;
    transactionId: string;
    timestamp: string;
}
