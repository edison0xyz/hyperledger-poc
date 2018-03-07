import { Component, OnInit } from '@angular/core';

import { SellerService } from './seller.service';
import { Seller } from './seller';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  sellers: Seller[];
  constructor(
    private sellerService: SellerService
  ) { }

  ngOnInit() {
    this.getSellers();
  }

  getSellers(): void {
    this.sellerService.getSellers()
    .subscribe(sellers => this.sellers = sellers);
  }

}
