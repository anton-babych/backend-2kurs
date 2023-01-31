import { Component } from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.initScrollTrigger();
  }

  private initScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger)
  }
}
