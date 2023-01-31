import { Injectable } from '@angular/core';
import {ArmorModel} from "../models/armor.model";
import {HttpClient} from "@angular/common/http";
import {ItemService} from "../../shared/services/item.service";

@Injectable({
  providedIn: 'root'
})
export class ArmorService extends ItemService{
  armors: ArmorModel[] = []
  dataPath: string = "armors";
}
