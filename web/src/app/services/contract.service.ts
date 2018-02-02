import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Contract } from "../models/contract";
 
@Injectable()
export class ContractService {
   constructor(private http: Http) {
   }
 
   getContracts(): Observable<Contract[]> {
      return this.http.get("http://localhost:3000/api/Contract")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}