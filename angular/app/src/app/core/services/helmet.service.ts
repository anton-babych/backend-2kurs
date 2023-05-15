import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, of, tap, throwError} from "rxjs";
import {Helmet} from "../models/helmet";

@Injectable({
  providedIn: 'root'
})
export abstract class HelmetService {
  public abstract dataPath: string;
  protected testData: Helmet[] = [];

  data: BehaviorSubject<Helmet[]> = new BehaviorSubject<Helmet[]>(this.testData);

  protected constructor(private http: HttpClient) {}

  read<Type extends Helmet>() : Observable<Type[]>{
    if(this.data.value.length){
      return of(this.data.value as Type[]);
    }

    return this.http.get<Type[]>(`http://localhost:8080/api/${this.dataPath}`).pipe(
      tap((payload) => {
        this.data.next(payload);
      }),
      catchError(this.handleError)
    );
  }

  updateById<Type extends Helmet>(item: Helmet){
    this.data.next(
      this.data.value.map((a: Helmet) =>
        a.id === item.id ? item : a
      )
    );

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify(item);

    this.http.put<Type>(`http://localhost:8080/api/${this.dataPath}`, body, {headers: headers})
      .pipe(catchError(this.handleError))
  }

  create<Type extends Helmet>(item: Helmet){
    let dat = this.data.value;
    dat.push(item);
    this.data.next(dat)

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify(item);

    this.http.post<Type>(`http://localhost:8080/api/${this.dataPath}`, body, {headers: headers})
      .pipe(catchError(this.handleError))
  }

  delete<Type extends Helmet>(item: Helmet){
    this.data.next(this.data.value.filter(x => x.id !== item.id))

    this.http.delete<Type>(`http://localhost:8080/api/${this.dataPath}/${item.id}`)
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
