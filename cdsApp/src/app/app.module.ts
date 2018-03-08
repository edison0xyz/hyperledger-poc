import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CdsbuyerComponent } from './cdsbuyer/cdsbuyer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListingsComponent } from './listings/listings.component';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { IssuerComponent } from './issuer/issuer.component';
import { ContractComponent } from './contract/contract.component';
import { PaymentComponent } from './payment/payment.component';
import { AddpaymentComponent } from './payment/addpayment.component';

import { CdsbuyerService} from './cdsbuyer/cdsbuyer.service';
import { SellerService} from './seller/seller.service';
import { IssuerService} from './issuer/issuer.service';
import { ContractService} from './contract/contract.service';
import { PaymentService} from './payment/payment.service';

@NgModule({
  declarations: [
    AppComponent,
    CdsbuyerComponent,
    ListingsComponent,
    HomeComponent,
    SellerComponent,
    IssuerComponent,
    ContractComponent,
    PaymentComponent,
    AddpaymentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CdsbuyerService,
    SellerService,
    IssuerService,
    ContractService,
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
