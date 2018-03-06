import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CdsbuyerComponent } from './cdsbuyer/cdsbuyer.component';
import { CdsbuyerService} from './cdsbuyer/cdsbuyer.service';
import { AppRoutingModule } from './/app-routing.module';
import { ListingsComponent } from './listings/listings.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CdsbuyerComponent,
    ListingsComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CdsbuyerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
