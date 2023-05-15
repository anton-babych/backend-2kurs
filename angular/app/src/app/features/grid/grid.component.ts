import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Helmet} from "../../core/models/helmet";
import {GridItemComponent} from "./grid-item.component";
import {FormContainerComponent} from "../form/form-container.component";
import {NgForOf, NgIf} from "@angular/common";
import {EmptyGridItemComponent} from "./empty-grid-item.component";
import {HelmetService} from "../../core/services/helmet.service";

@Component({
  selector: 'grid',
  template: `
    <div class="grid" *ngIf="data; else empty">
      <grid-item *ngFor="let item of data" [item]="item">
      </grid-item>
      <empty-grid-item></empty-grid-item>
    </div>
    <!--(click)="handleCreate()"-->
    <ng-template #empty>
      <div class="empty-container">
        <p class="empty-container__text">Тут нічого немає</p>
      </div>
    </ng-template>

  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      grid-template-rows: repeat(auto-fill, auto);
      grid-gap: 1px;

      justify-content: center;
    }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    GridItemComponent,
    FormContainerComponent,
    NgForOf,
    NgIf,
    EmptyGridItemComponent
  ],
  standalone: true
})
export class GridComponent implements OnInit {
  data: Helmet[] = [];

  constructor(private helmetService: HelmetService) {}
  ngOnInit(): void {
    this.helmetService.read<Helmet>().subscribe(x => {
      this.data = x;
    });

    this.helmetService.data.subscribe((data: Helmet[])=>{
      this.data = data;
    })
  }

}
