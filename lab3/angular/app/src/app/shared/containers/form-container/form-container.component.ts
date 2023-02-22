import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {gsap} from "gsap";
import {HelmetModel} from "../../models/helmet.model";
import {ShortItemModel} from "../../models/shortItemModel";
import {ItemService} from "../../services/item.service";
import {Types} from "../../enums/TYPES";
import {ArmorService} from "../../services/armor.service";
import {HelmetService} from "../../services/helmet.service";

@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent{
  @Input() item!: ShortItemModel;
  @Input() type!: Types;

  @ViewChild('formContainer') formContainerElement!: ElementRef;

  showForm: boolean = false;

  private isClosed: boolean = true;
  private service: ItemService;

  constructor(armorService: ArmorService, helmetService: HelmetService) {
    this.service = this.type === Types.ARMORS ? armorService : helmetService;
  }

  onFormClick() {
    console.log("form openeed")

    let nativeElement = this.formContainerElement.nativeElement;

    this.isClosed = !this.isClosed;

    this.showForm = true;
    if(!this.isClosed){
      gsap.fromTo(nativeElement, {xPercent: -100},{xPercent: 0, onComplete: ()=>{
          this.showForm = !this.isClosed;
        }
      })
    }else{
      gsap.fromTo(nativeElement, {xPercent: 0},{xPercent: 100, onComplete: ()=>{
          this.showForm = !this.isClosed;
        }
      })
    }
  }

  onFormEdited(item: ShortItemModel) {
    this.item = item;

    this.service.updateById<ShortItemModel>(item);

    this.onFormClick()
  }

  onFormCreated(item: ShortItemModel) {
    this.service.create(item)

    this.onFormClick()
  }

  onFormDeleted(item: ShortItemModel) {
    this.service.delete(item);

    this.onFormClick()
  }
}
