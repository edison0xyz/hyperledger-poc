import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CdsbuyerComponent } from './cdsbuyer/cdsbuyer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListingsComponent } from './listings/listings.component';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { IssuerComponent } from './issuer/issuer.component';

import { CdsbuyerService} from './cdsbuyer/cdsbuyer.service';
import { SellerService} from './seller/seller.service';
import { IssuerService} from './issuer/issuer.service';

@NgModule({
  declarations: [
    AppComponent,
    CdsbuyerComponent,
    ListingsComponent,
    HomeComponent,
    SellerComponent,
    IssuerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CdsbuyerService,
    SellerService,
    IssuerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
