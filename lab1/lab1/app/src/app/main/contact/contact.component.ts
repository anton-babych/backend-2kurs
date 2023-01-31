import { Component, OnInit } from '@angular/core';

import {gsap} from "gsap";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  textHeight: number = 18.4;
  email: string = "contact@ukrarmor.ua";

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
