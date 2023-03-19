import {Component, ElementRef, Input, ViewChild} from '@angular/core';

import {ShortItemModel} from "../../models/shortItemModel";
import {Types} from "../../enums/TYPES";

@Component({
  selector: 'grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent {
  @Input() type!: Types;
  @Input() item!: ShortItemModel;
  @ViewChild('itemHTML') itemElement!: ElementRef;

  buttonsVisible: boolean = false;


  onMouseMove(mouseEvent: MouseEvent) {
    const rect = this.itemElement.nativeElement.getBoundingClientRect(),
      x = mouseEvent.clientX - rect.left,
      y = mouseEvent.clientY - rect.top;

    this.itemElement.nativeElement.style.setProperty("--mouse-x", `${x}px`);
    this.itemElement.nativeElement.style.setProperty("--mouse-y", `${y}px`);
  }

  onMouseEnter() {
    this.buttonsVisible = true;
  }

  onMouseLeave() {
    this.buttonsVisible = false
  }
}
