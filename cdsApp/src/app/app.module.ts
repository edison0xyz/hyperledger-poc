import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CdsbuyerComponent } from './cdsbuyer/cdsbuyer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListingsComponent } from './listings/listings.component';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';

import { CdsbuyerService} from './cdsbuyer/cdsbuyer.service';
import { SellerService} from './seller/seller.service';

@NgModule({
  declarations: [
    AppComponent,
    CdsbuyerComponent,
    ListingsComponent,
    HomeComponent,
    SellerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CdsbuyerService,
    SellerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
