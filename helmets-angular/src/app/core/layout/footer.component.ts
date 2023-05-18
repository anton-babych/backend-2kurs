import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'layout-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <p class="footer__text">made by Anton Babych (Mit-21)</p>
    </footer>
  `,
  styles: [`
    .footer{
      width: 100%;
      height: 7rem;
      background-color: #2f2f2f;

      display: flex;
      justify-content: center;
      place-items: center;

      &__text{
        font-size: .6vw;
      }
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
