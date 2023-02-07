import { Injectable } from '@angular/core';
import {ArmorModel} from "../models/armor.model";
import {HttpClient} from "@angular/common/http";
import {ItemService} from "../../shared/services/item.service";

@Injectable({
  providedIn: 'root'
})
export class ArmorService extends ItemService{
  //armors: ArmorModel[] = []
  // override data: ArmorModel[] = [
  //   {name: "armor 1", price: 200, imagePath: "https://ukrainianarmor.com/wp-content/uploads/2022/08/img_9185_edit-1024x1024-1-1.png"},
  //   {name: "armor 2", price: 2005, imagePath: "https://ukrainianarmor.com/wp-content/uploads/2022/04/img_8931.png"},
  //   {name: "armor 3", price: 215, imagePath: "https://ukrainianarmor.com/wp-content/uploads/2022/04/img_1317_lab-1024x1024-1.png"},
  //   {name: "armor 4", price: 15, imagePath: "https://ukrainianarmor.com/wp-content/uploads/2022/07/2-2-1024x1024-1.png"},
  //   {name: "armor 5", price: 15, imagePath: "https://ukrainianarmor.com/wp-content/uploads/2022/06/uarm_2020_new7165.png"}
  // ]
  dataPath: string = "armors";
}
