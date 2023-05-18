import {ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild} from '@angular/core';

import {FormContainerComponent} from "../form/form-container.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {Helmet} from "../../core/models/helmet";

@Component({
  selector: 'grid-item',
  template: `
    <div class="grid-item" #itemHTML
         (mouseenter)="onMouseEnter()"
         (mousemove)="onMouseMove($event)"
         (mouseleave)="onMouseLeave()"
         (click)="onGridClick()">
      <div class="grid-item__image-container">
        <img [src]="item.image_url" alt="" class="grid-item__image">
      </div>
      <div class="grid-item__text-container">
        <p class="grid-item__name">{{item.name}}</p>
        <p class="grid-item__price">{{item.price}} грн</p>
      </div>

      <form-container *ngIf="formIsVisible$ | async"
                      [item]="item"
                      (isDone)="onFormIsDone()">
      </form-container>
    </div>
  `,
  styles: [`
    .grid {
      &-item {
        width: 100%;
        aspect-ratio: .75;
        border: 1px solid #3f3f3f;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        overflow: hidden;
        position: relative;

        &:hover::before {
          opacity: 1;
        }

        &::before {
          content: "";
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
          position: absolute;
          z-index: 2;
          background: radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%);
          border-radius: inherit;
          opacity: 0;
          transition: opacity 500ms;
        }

        &__image-container {
          width: 100%;
          height: 60%;

          position: relative;
          display: inline-block;
        }

        &__image {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 80%;
        }

        &__text-container {
          height: auto;

          display: flex;
          flex-direction: column;
          justify-content: center;
          place-items: center;
        }

        &__name {
          font-weight: 500;
          margin-bottom: 5px;
          font-size: 16px;
        }

        &__price {
          font-weight: 100;
          font-size: 12px;
        }

        &__buttons {
          position: absolute;
          top: 0;
          right: 0;

          display: flex;
          flex-direction: row-reverse;
          width: 100%;
          height: 100px;

          &__button {
            z-index: 10;
            cursor: pointer;
            width: 20px;
            height: 20px;
          }

          &__open {
            background-color: #a1a1a1;
            background-image: url("https://www.awwwards.com/assets/redesign/images/sprite-icons.svg#link");
          }

          &__edit {
            background-color: #d24040;
          }

          &__delete {
            background-color: #ffa216;
          }
        }
      }
    }
  `],
  standalone: true,
  imports: [
    FormContainerComponent,
    NgIf,
    AsyncPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridItemComponent {
  @Input() item!: Helmet;
  @ViewChild('itemHTML') itemElement!: ElementRef;

  buttonsVisible: boolean = false;
  formIsVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


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

  onGridClick() {
    this.formIsVisible$.next(true);
  }

  onFormIsDone(){
    this.formIsVisible$.next(false);
  }
}
