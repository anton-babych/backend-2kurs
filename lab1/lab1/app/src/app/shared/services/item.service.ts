import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BaseItemModel} from "../models/baseItem.model";
import {catchError, delay, map, Observable, of, retryWhen, take, tap, throwError} from "rxjs";
import {ShortBaseItemModel} from "../models/shortBaseItem.model";

@Injectable({
  providedIn: 'root'
})
export abstract class ItemService {

  public abstract dataPath: string;

  protected data: ShortBaseItemModel[] = [];

  protected constructor(private http: HttpClient) {
  }

  read<Type extends ShortBaseItemModel>() : Observable<Type[]>{
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


  private handleError(err: HttpErrorResponse){
    if(err.error instanceof ErrorEvent){
      console.log('client', err.message);
    } else {
      console.log('server', err.status);
    }

    return throwError(() => new Error(err.message));
  }
}
