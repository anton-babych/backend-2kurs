import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormContainerComponent} from "../form/form-container.component";
import {Helmet} from "../../core/models/helmet";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'empty-grid-item',
  standalone: true,
  imports: [FormContainerComponent, CommonModule],
  template: `
    <div class="grid__empty" (click)="onGridClick()">
      <ng-template *ngIf="formIsVisible$ | async">
        <form-container [item]="emptyItem"
                        (isDone)="onFormIsDone()">
        </form-container>
      </ng-template>
      <div class="grid__empty__icon"></div>
    </div>
  `,
  styles: [`
    .grid__empty {
      width: 100%;
      aspect-ratio: .75;
      cursor: pointer;
      position: relative;
      display: flex;
      place-items: center;
      justify-content: center;
      border: 1px dashed white;
      overflow: hidden;

      &:hover {
        border: 1px solid white;

        .grid__empty__icon {
          transform: rotateZ(360deg)
        }
      }

      &__icon {
        width: 4em;
        aspect-ratio: 1;
        background-image: url("/assets/icons/addIcon.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transition: all 1s;
      }
    }
  `]
})
export class EmptyGridItemComponent implements OnInit {
  formIsVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly emptyItem: Helmet = {description: "", image_url: "", name: "", price: 0};


  constructor() { }

  ngOnInit(): void {
  }

  onGridClick() {
    this.formIsVisible$.next(true);
  }

  onFormIsDone() {
    this.formIsVisible$.next(false);
  }
}
