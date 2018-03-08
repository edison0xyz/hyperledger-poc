import { Component, OnInit } from '@angular/core';
import { Payment } from './payment';
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


  goBack(): void {
    this.location.back();
  }

}
