import {AppComponent} from './app/app.component';
import {bootstrapApplication} from '@angular/platform-browser';
import {enableProdMode, importProvidersFrom} from '@angular/core';
import {RouterModule, provideRouter} from '@angular/router';
import {routes} from './app/app.routing.module';

const environment = {
  production: false
};

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
