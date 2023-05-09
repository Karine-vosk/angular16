import {AppComponent} from './app/app.component';
import {bootstrapApplication, provideClientHydration} from '@angular/platform-browser';
import {enableProdMode, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding, withDebugTracing, withRouterConfig} from '@angular/router';
import {routes} from './app/app.routing.module';
import {HttpClientModule} from '@angular/common/http';

const environment = {
  production: false
};

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding(),
     //withDebugTracing(),
    // withRouterConfig({onSameUrlNavigation: 'reload'})
    ),
    importProvidersFrom(HttpClientModule),
    //provideZoneChangeDetection({eventCoalescing: true}),
    //provideClientHydration()
  ]
})
  .catch(err => console.error(err));
