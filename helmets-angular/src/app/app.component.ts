import {ChangeDetectionStrategy, Component} from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {MainComponent} from "./features/main/main.component";
import {HeaderComponent} from "./core/layout/header.component";
import {FooterComponent} from "./core/layout/footer.component";

@Component({
  selector: 'app-root',
  template: `
    <layout-header></layout-header>
    <main-page></main-page>
    <layout-footer></layout-footer>
  `,
  standalone: true,
  imports: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor() {
    this.initScrollTrigger();
  }

  private initScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger)
  }
}
