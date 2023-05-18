import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, of, tap, throwError} from "rxjs";
import {Helmet} from "../models/helmet";

@Injectable({
  providedIn: 'root'
})
export class HelmetService {
  private readonly path: string = 'helmets';
  data$: BehaviorSubject<Helmet[]> = new BehaviorSubject<Helmet[]>([]);

  protected constructor(private http: HttpClient) {}

  read() : Observable<Helmet[]>{
    if(this.data$.value.length){
      return of(this.data$.value as Helmet[]);
    }

    return this.http.get<Helmet[]>(`http://localhost:8080/api/${this.path}`).pipe(
      tap((payload) => {
        this.data$.next(payload);
      }),
      catchError(this.handleError)
    );
  }

  updateById(item: Helmet){
    this.data$.next(
      this.data$.value.map((a: Helmet) =>
        a.id === item.id ? item : a
      )
    );

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify(item);

    this.http.put<Helmet>(`http://localhost:8080/api/${this.path}/${item.id}`, body, {headers: headers})
      .pipe(catchError(this.handleError))
  }

  create(item: Helmet){
    let dat = this.data$.value;
    dat.push(item);
    this.data$.next(dat)

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify(item);

    this.http.post<Helmet>(`http://localhost:8080/api/${this.path}`, body, {headers: headers})
      .pipe(catchError(this.handleError))
  }

  delete(item: Helmet){
    this.data$.next(this.data$.value.filter(x => x.id !== item.id))

    this.http.delete<Helmet>(`http://localhost:8080/api/${this.path}/${item.id}`)
      .pipe(catchError(this.handleError))
  }

  private handleError(err: HttpErrorResponse){
    if(err.error instanceof ErrorEvent){
      console.log('client', err.message);
    } else {
      console.log('server', err.status);
    }

    return throwError(() => new Error(err.message));
  }
}
