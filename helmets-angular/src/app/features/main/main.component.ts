import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {gsap} from "gsap";
import {GridComponent} from "../grid/grid.component";
import {ContactComponent} from "../../shared/contact.component";

@Component({
  selector: 'main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    GridComponent,
    ContactComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    this.playStartAnimation();

    this.initMainScrollTrigger();
    this.initCatalogScrollTrigger();
  }

  private initCatalogScrollTrigger() {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-catalog',
        start: 'top 50%',
        end:'bottom 50%',
        //markers: true,
        scrub: 2,
      }
    })
      .to(".section-catalog", { transform: 'skew(0turn, 5deg)'}, 0)
  }

  private initMainScrollTrigger() {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section-title",
        pin: true,
        scrub: 2,
        end: "2000px 0%",
        //markers: true
      }
    })
      .to("#image-1", {
        bottom: "100%",
        translateY: "-100%",
        ease: "SlowMo.ease.config( 0.7 0.7, 0.7 0.7, false)",
        duration: 1
      }, 0)
      .to("#image-2", {
        bottom: "100%",
        translateY: "-100%",
        ease: "SlowMo.ease.config( 0.7 0.7, 0.7 0.7, false)",
        duration: .6
      }, 0.33)
      .to("#image-3", {
        bottom: "100%",
        translateY: "-100%",
        ease: "SlowMo.ease.config( 0.7 0.7, 0.7 0.7, false)",
        duration: .8
      }, 0.51)
      .to("#image-4", {
        bottom: "100%",
        translateY: "-100%",
        ease: "SlowMo.ease.config( 0.7 0.7, 0.7 0.7, false)",
        duration: .7
      }, 0.69)
      .to("#image-5", {
        bottom: "100%",
        translateY: "-100%",
        ease: "SlowMo.ease.config( 0.7 0.7, 0.7 0.7, false)",
        duration: .55
      }, 0.81)
  }

  private playStartAnimation() {
    gsap.timeline()
      .from('.title>span', {y:"101%", duration: 0.5, delay: 0.3})
      .to('.title', {transform: 'translateY(0%)', duration: .65, ease: "Expo.easeInOut", delay: .3}, .8)
      .from('.small-title>span', {y: "100%", duration: 0.5, ease: "Expo.easeInOut", stagger: 0.1}, '-=.4')
      .from('.main-grid__image', {x: "101%", duration: 0.5, ease: "Expo.easeInOut", delay: 0.1})
  }
}
