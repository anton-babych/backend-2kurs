import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {gsap} from "gsap";
import {Helmet} from "../../core/models/helmet";
import {HelmetService} from "../../core/services/helmet.service";
import {FormComponent} from "./form.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'form-container',
  template: `
    <div class="form-container">
      <div class="form-container__content" #formContainer>
        <item-form [item]="item"
                   (itemEdited)="onFormEdited($event)"
                   (itemCreated)="onFormCreated($event)"
                   (itemDeleted)="onFormDeleted($event)"
                   (formClosed)="onFormClosed()"
        >
        </item-form>
      </div>
    </div>
  `,
  styles: [`
    .form-container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 20;

      &__button-wrapper {
        position: relative;
        display: block;
        z-index: 100;
        cursor: pointer;
      }

      &__button {
        position: absolute;
        right: 0;
        top: 0;
        width: 10%;
        aspect-ratio: 1;

        background-image: url("/assets/icons/editIcon.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        transition: all 1s;

        &:hover {
          transform: rotateY(359deg);
        }
      }
    }

    @keyframes fromLeft {
      0% {
        left: -100%;
      }
    }

  `],
  standalone: true,
  imports: [
    FormComponent,
    NgIf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormContainerComponent implements AfterViewInit{
  @Input() item!: Helmet;
  @Output() isDone = new EventEmitter();

  @ViewChild('formContainer') formContainerElement!: ElementRef;

  private isClosed: boolean = true;

  constructor(private helmetService: HelmetService) {}

  ngAfterViewInit(){
    this.animate()
  }

  animate() {
    let nativeElement = this.formContainerElement.nativeElement;

    this.isClosed = !this.isClosed;

    if(!this.isClosed){
      gsap.fromTo(nativeElement, {xPercent: -100},{xPercent: 0})
    }else{
      gsap.fromTo(nativeElement, {xPercent: 0},{xPercent: 100, onComplete: ()=>{
          this.isDone.emit()
        }
      })
    }
  }

  onFormEdited(item: Helmet) {
    this.item = item;

    this.helmetService.updateById<Helmet>(item);

    this.animate()
  }

  onFormCreated(item: Helmet) {
    this.helmetService.create(item)

    this.animate()
  }

  onFormDeleted(item: Helmet) {
    this.helmetService.delete(item);

    this.animate()
  }

  onFormClosed() {
    this.animate();
  }
}
