import { Component, OnInit } from '@angular/core';

import { Cdsbuyer } from './cdsbuyer';
import { CdsbuyerService} from './cdsbuyer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cdsbuyer',
  templateUrl: './cdsbuyer.component.html',
  styleUrls: ['./cdsbuyer.component.css']
})
export class CdsbuyerComponent implements OnInit {

  cdsbuyers: Cdsbuyer[];
  constructor(
    private cdsbuyerService: CdsbuyerService,
    private location: Location) { }

  ngOnInit() {
    this.getBuyers();
  }

  getBuyers(): void {
    this.cdsbuyerService.getBuyers()
    .subscribe(cdsbuyers => this.cdsbuyers = cdsbuyers);
  }
  goBack(): void {
    this.location.back();
  }

}
