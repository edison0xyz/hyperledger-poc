import { Component, OnInit } from '@angular/core';
import { Contract } from './contract';
import { ContractService} from './contract.service';
import { Location } from '@angular/common';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contracts: Contract[];

  constructor(
    private contractService: ContractService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getContracts();
  }

  getContracts(): void {
    this.contractService.getContracts()
    .subscribe(contracts => this.contracts = contracts);
  }

  goBack(): void {
    this.location.back();
  }
}
