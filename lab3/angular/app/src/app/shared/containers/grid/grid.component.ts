import {Component, Input, OnInit} from '@angular/core';
import {ArmorModel} from "../../models/armor.model";
import {ArmorService} from "../../services/armor.service";
import {HelmetModel} from "../../models/helmet.model";
import {ItemService} from "../../services/item.service";
import {HelmetService} from "../../services/helmet.service";
import {ShortItemModel} from "../../models/shortItemModel";
import {Types} from "../../enums/TYPES";

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() type!: Types;

  data: ShortItemModel[] = [];
  service!: ItemService;
  emptyItem: ShortItemModel = {name: '', price: 0, imagePath: ''};

  constructor(private armorService: ArmorService, private helmetService: HelmetService) {}
  ngOnInit(): void {
    this.service = this.type === Types.ARMORS ? this.armorService : this.helmetService;

    this.service.read<ShortItemModel>().subscribe(x => {
      console.log(this.type, x)
      this.data = x;
    });

    this.service.data.subscribe((data: ShortItemModel[])=>{
      this.data = data;
    })
  }

}
