import { Component, OnInit } from '@angular/core';
import { IssuerService } from './issuer.service';
import { Issuer } from './issuer';

@Component({
  selector: 'app-issuer',
  templateUrl: './issuer.component.html',
  styleUrls: ['./issuer.component.css']
})
export class IssuerComponent implements OnInit {

  issuers: Issuer[];
  constructor(
    private issuerService: IssuerService) { }

  ngOnInit() {
    this.getIssuers();
  }

  getIssuers(): void {
    this.issuerService.getIssuers()
    .subscribe(issuers => this.issuers = issuers);
  }

}
