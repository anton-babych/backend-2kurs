import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'layout-header',
  template: `
    <div class="header header-container fixed blurred">
      <div class="header-content">
        <div class="flex-gap">
          <a href="#" class="header-link">бронежилети</a>
          <a href="#" class="header-link">шоломи</a>
        </div>

        <div class="flex-gap flex-gap-sm">
          <a href="#" class="header-logo">українська</a>
          <a href="#" class="header-logo">броня</a>
        </div>

        <div class="flex-gap">
          <a href="#" class="armor header-link">про нас</a>
          <a href="#" class="armor header-link">контакти</a>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .header{
      &-container{
        width: 100%;
        height: fit-content;
        top: 0;
        left: 0;
        background-color: transparent;
      }
      &-content{
        padding: 15px 15px;

        display: flex;
        justify-content: space-around;
      }

      &-link{

      }

      &-logo{
        font-family: 'Misto', sans-serif;
        font-size: 20px;
      }
    }

    .flex-gap{
      display: flex;
      gap: clamp(0px, 2vw, 15px);
      place-items: center;
      flex-direction: row;

      &-sm{
        gap: 10px;
      }
    }

    @media (max-width: 900px) {
      .flex-gap{
        flex-direction: column;
        justify-content: space-between;
      }
    }

    .blurred{
      backdrop-filter: blur(16px);
    }

    .fixed{
      position: fixed;
    }

  `],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
