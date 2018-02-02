import { Component } from '@angular/core';
import { UserService } from "./services/user.service";
import { ContractService } from "./services/contract.service";
 
@Component({
selector:'app-root',
templateUrl:'./app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'app works!';
   users;
   contracts;
 
   constructor(private contractService: ContractService) {
      // this.users = userService.getUsers();
      this.contracts = contractService.getContracts(); 
   }
}