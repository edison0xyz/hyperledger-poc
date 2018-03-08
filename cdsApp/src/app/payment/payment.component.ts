import { Component, OnInit } from '@angular/core';
import { Payment, PaymentReceived } from './payment';
import { PaymentService} from './payment.service';
import { Location, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payments: Payment[];
  private cnt = 1;
  private markedCnt = 1;

  constructor(
    private paymentService: PaymentService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPayments();
  }

  getPayments(): void {
    this.paymentService.getPayments()
    .subscribe(payments => this.payments = payments);
  }

  delete(payment: Payment): void {
    this.payments = this.payments.filter(h => h !== payment);
    this.paymentService.deletePayment(payment).subscribe();
  }

  markReceived(received: Payment): void {


    // Prepare headers
    const $class = 'org.biznet.cds.PaymentReceived';
    const payment = 'org.biznet.cds.Payment#' + received.paymentId;
    // const transactionId = String(this.markedCnt++);
    // const timestamp = '';

    if (!payment) { return; }
    // const contract = 'org.biznet.cds.Contract#' + contractid;
    this.paymentService.markReceived({ payment, $class } as PaymentReceived)
      .subscribe();
  }


  goBack(): void {
    this.location.back();
  }

}
