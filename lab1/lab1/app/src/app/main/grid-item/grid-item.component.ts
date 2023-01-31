import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

import {BaseItemModel} from "../../shared/models/baseItem.model";
import {ShortBaseItemModel} from "../../shared/models/shortBaseItem.model";

@Component({
  selector: 'grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @Input() model!: ShortBaseItemModel;
  @ViewChild('item') item!: ElementRef;

  ngOnInit(): void {
  }

  onMouseMove(mouseEvent: MouseEvent) {
    const rect = this.item.nativeElement.getBoundingClientRect(),
      x = mouseEvent.clientX - rect.left,
      y = mouseEvent.clientY - rect.top;

    this.item.nativeElement.style.setProperty("--mouse-x", `${x}px`);
    this.item.nativeElement.style.setProperty("--mouse-y", `${y}px`);
  }

  onClick() {

  }
}
