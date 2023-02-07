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
  //helmets: HelmetModel[] = []

  // override data: HelmetModel[] = [
  //   {name: "armor 2", price: 2005, imagePath: "https://ukrainianarmor.com/wp-content/uploads/2022/04/img_8931.png"},
  //   {name: "armor 3", price: 215, imagePath: "https://ukrainianarmor.com/wp-content/uploads/2022/04/img_1317_lab-1024x1024-1.png"},
  //   {name: "armor 4", price: 15, imagePath: "https://ukrainianarmor.com/wp-content/uploads/2022/07/2-2-1024x1024-1.png"},
  // ]
  dataPath: string = "helmets";

}
