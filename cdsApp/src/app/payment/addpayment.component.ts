import { Component, OnInit } from '@angular/core';
import { Payment } from './payment';
import { PaymentService} from './payment.service';
import { Location, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './addpayment.component.html'
})

export class AddpaymentComponent implements OnInit {

  payments: Payment[];
  messages: string;

  // TODO: Change counter to something more persistent
  private cnt = 20;

  constructor(
    private paymentService: PaymentService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPayments();
  }

  /*
  getNewPaymentid(): void {
    let i: number;
    let c: number;
    for (i = 0; i < this.payments.length; i++) {
        const c = Number(this.payments[i].contract);
        console.log(c);
        if (c > this.cnt) {
            this.cnt = c;
        }
    }
    console.log(this.cnt);
  }
  */

  clearMessage(): void {
      this.messages = '';
  }

  getPayments(): void {
    this.paymentService.getPayments()
    .subscribe(payments => this.payments = payments);
  }

  add(contractid: string, amount: string): void {
    this.clearMessage();
    // this.getNewPaymentid();
    contractid = contractid.trim();
    const amountPaid = Number(amount.trim());

    // other headers
    const $class = 'org.biznet.cds.Payment';
    const paymentId = String(this.cnt++);
    const status = 'CREATED';


    if (!contractid && !amountPaid) { return; }
    const contract = 'org.biznet.cds.Contract#' + contractid;
    this.paymentService.addPayment({ contract, amountPaid, status, $class, paymentId } as Payment)
      .subscribe(hero => {
        this.payments.push(hero);
      });
    this.messages = 'Payment added successfully';
  }


  goBack(): void {
    this.location.back();
  }

}
