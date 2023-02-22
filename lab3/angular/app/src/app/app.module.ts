import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { GridItemComponent } from './shared/components/grid-item/grid-item.component';
import { ContactComponent } from './main/contact/contact.component';
import {HttpClientModule} from "@angular/common/http";
import {FormComponent} from "./shared/components/form/form.component";
import { FormContainerComponent } from './shared/containers/form-container/form-container.component';
import { GridComponent } from './shared/containers/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    GridItemComponent,
    ContactComponent,
    FormContainerComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
