import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Payment } from './payment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PaymentService {

  private paymentUrl = 'http://localhost:3000/api/org.biznet.cds.Payment';

  constructor(
    private http: HttpClient
  ) { }

  getPayments (): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentUrl)
      .pipe(
        catchError(this.handleError('getPayment', []))
      );
  }

  /** POST: add a new payment to the server */
  addPayment (payment: Payment): Observable<Payment> {
    console.log(payment);
    return this.http.post<Payment>(this.paymentUrl, payment, httpOptions).pipe(
      // tap((hero: Payment) => this.log(`added hero w/ id=${hero.id}`)),
      // console.log("post payment service");
      catchError(this.handleError<Payment>('addPayment'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
