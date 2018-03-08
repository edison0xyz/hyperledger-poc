import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { HomeComponent } from './home/home.component';
import { ContractComponent } from './contract/contract.component';
import { PaymentComponent } from './payment/payment.component';
import { AddpaymentComponent } from './payment/addpayment.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'listings', component: ListingsComponent },
  {path: 'contracts', component: ContractComponent },
  {path: 'payments', component: PaymentComponent },
  {path: 'addpayment', component: AddpaymentComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
