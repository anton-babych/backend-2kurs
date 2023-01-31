import { Injectable } from '@angular/core';
import {HelmetModel} from "../models/helmet.model";
import {ItemService} from "../../shared/services/item.service";
import {HttpClient} from "@angular/common/http";
import {BaseItemModel} from "../../shared/models/baseItem.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HelmetService extends ItemService{
  helmets: HelmetModel[] = []
  dataPath: string = "helmets";

}
