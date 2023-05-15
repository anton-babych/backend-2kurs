import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {gsap} from "gsap";

@Component({
  selector: 'contact-email',
  template: `
    <div class="contact">
      <div class="contact__reveal-parent">
        <div class="contact__reveal-parent__text-container">
          <span class="contact__small-text level-1">Зв'яжіться з нами!</span>
          <span class="contact__small-text level-2">Натисніть для копіювання</span>
          <span class="contact__small-text level-3">Скопійовано!</span>
        </div>
      </div>

      <div class="contact__email-section" (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()" (click)="onClick()">
        <p class="contact__email-section__text">{{email}}</p>
      </div>
    </div>
  `,
  styles: [`
    .contact{
      flex-direction: column;
      width: 100%;
      height: 100vh;

      display: flex;
      justify-content: space-evenly;
      place-items: center;

      &__reveal-parent{
        height: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        & span{
          display: block;
        }
      }

      &__small-text{
        text-align: center;
      }

      &__email-section{
        background-color: #212121;
        border: 3px dashed #3f3f3f;
        width: 40vw;
        aspect-ratio: 3;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        place-items: center;

        cursor: pointer;

        &__text{
          font-size: 3vw;
          transition: transform 200ms ease-out;
        }

        &:hover{
          .contact__email-section__text{
            transform: scale(.95);
          }
        }
        &:active{
          .contact__email-section__text{
            transform: scale(1.05);
          }
        }
      }
    }
  `],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  @Input() textHeight: number = 18.4;
  @Input() email: string = "contact@ukrarmor.ua";

  constructor() {

  }

  ngOnInit(): void {
  }

  onMouseEnter() {
    gsap.to(".contact__reveal-parent__text-container", {translateY: -this.textHeight, duration: .4})
  }

  onMouseLeave() {
    gsap.to(".contact__reveal-parent__text-container", {translateY: 0, duration: .4})
  }

  onClick() {
    gsap.to(".contact__reveal-parent__text-container", {translateY: 2*-this.textHeight, duration: .4})

    navigator.clipboard.writeText(this.email);
  }
}
