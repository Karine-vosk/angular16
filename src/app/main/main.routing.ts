import {Route} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MainComponent} from "./main.component";
import {SecondPageComponent} from './second-page/second-page.component';

// In payments/routes.ts:
//  export const MAIN_ROUTES: Route[] = [
// {path: '', redirectTo: 'home', pathMatch: 'full'},
// {
//   path: '', component: MainComponent, title: 'home',
//     children: [
//       {path: 'home', component: HomeComponent, pathMatch: 'full', title: 'home'},
//       {path: 'second-tab', component: SecondPageComponent, title: 'second- tab'},
//     ]
// },
// ] as Route[];

export default [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '', component: MainComponent, title: 'home',
    children: [
      {path: 'home', component: HomeComponent, pathMatch: 'full', title: 'home'},
      {path: 'second-tab', component: SecondPageComponent, title: 'second- tab'},
    ]
  },
] as Route[];
