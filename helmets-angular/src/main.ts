import {enableProdMode, importProvidersFrom} from '@angular/core';

import { environment } from './environments/environment';
import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {HttpClientModule} from "@angular/common/http";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule, BrowserModule)]
})
  .catch(err => console.error(err));
