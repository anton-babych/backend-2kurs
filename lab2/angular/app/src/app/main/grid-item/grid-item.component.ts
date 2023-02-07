import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

import {BaseItemModel} from "../../shared/models/baseItem.model";
import {ShortItemModel} from "../../shared/models/shortItemModel";
import {gsap} from "gsap";
import {ItemService} from "../../shared/services/item.service";
import {HelmetService} from "../../helmets/services/helmet.service";
import {ArmorService} from "../../armors/services/armor.service";
import {HelmetModel} from "../../helmets/models/helmet.model";
import {ArmorModel} from "../../armors/models/armor.model";

@Component({
  selector: 'grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent {
  @Input() item!: ShortItemModel;
  @ViewChild('itemHTML') itemElement!: ElementRef;

  buttonsVisible: boolean = false;
  formOpened: boolean = false;

  constructor(private helmetService: HelmetService, private armorService: ArmorService) {
  }

  onMouseMove(mouseEvent: MouseEvent) {
    const rect = this.itemElement.nativeElement.getBoundingClientRect(),
      x = mouseEvent.clientX - rect.left,
      y = mouseEvent.clientY - rect.top;

    this.itemElement.nativeElement.style.setProperty("--mouse-x", `${x}px`);
    this.itemElement.nativeElement.style.setProperty("--mouse-y", `${y}px`);
  }

  onClick() {

  }

  onMouseEnter() {
    this.buttonsVisible = true;
  }

  onMouseLeave() {
    this.buttonsVisible = false
  }

  onFormOpen(){
    this.formOpened = true
  }

  onFormClose() {
    let nativeElement = this.itemElement.nativeElement;
    let elements = nativeElement.getElementsByClassName("form-container");

    gsap.to(elements, {xPercent: 100, onComplete: ()=>{
        this.formOpened = false;
      }
    })
  }
  onFormFilled(item: HelmetModel) {
    this.item = item;

    //ДОДЕЛАТЬ
    this.helmetService.updateById<HelmetModel>(item)
      .subscribe(x => console.log("updated"));

    this.onFormClose()
  }
}
