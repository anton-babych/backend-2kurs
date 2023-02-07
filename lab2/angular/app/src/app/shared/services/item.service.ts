import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BaseItemModel} from "../models/baseItem.model";
import {catchError, delay, map, Observable, of, retryWhen, take, tap, throwError} from "rxjs";
import {ShortItemModel} from "../models/shortItemModel";
import {HelmetModel} from "../../helmets/models/helmet.model";

@Injectable({
  providedIn: 'root'
})
export abstract class ItemService {
  public abstract dataPath: string;
  protected data: ShortItemModel[] = [];
  protected constructor(private http: HttpClient) {
  }

  read<Type extends ShortItemModel>() : Observable<Type[]>{
    if(this.data.length){
      return of(this.data as Type[]);
    }

    return this.http.get<Type[]>(`http://localhost:8080/api/${this.dataPath}`).pipe(
      tap((payload) => {
        this.data = payload;
      }),
      catchError(this.handleError)
    );
  }

  updateById<Type extends ShortItemModel>(item: ShortItemModel){
    console.log(item)

    const headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify(item);

    return this.http.put<Type>(`http://localhost:8080/api/${this.dataPath}`, body, {headers: headers})
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
