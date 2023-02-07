import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HelmetsComponent } from './helmets/helmets.component';
import { ArmorsComponent } from './armors/armors.component';
import { GridItemComponent } from './main/grid-item/grid-item.component';
import { ContactComponent } from './main/contact/contact.component';
import {HttpClientModule} from "@angular/common/http";
import {FormComponent} from "./shared/components/form/form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HelmetsComponent,
    ArmorsComponent,
    GridItemComponent,
    ContactComponent,
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
