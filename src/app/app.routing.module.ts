import {Route} from '@angular/router';

export const routes: Route[] = [
  //both are lazy loading examples
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  //child routes
  // {
  //   path: 'home',
  //   loadChildren: () => import('./main/home.routing').then(mod => mod.MAIN_ROUTES)
  // },
  //or
  {
    path: 'main',
    loadChildren: () => import('./main/main.routing')
  },
  //compenents
  //we can use both of them
  {
    path: 'todo/:id', loadComponent: () => import('./todo/todo.component'),
    title: 'todo',
    resolve: {resolveFoo: () => 'My resolved data'}
  },
  //or
  {
    path: 'home',
    loadComponent: () => import('./main/home/home.component').then(mod => mod.HomeComponent),
    title: 'home'
  },
  {
    path: 'signal',
    loadComponent: () => import('./signal/signal.component'),
    title: 'signal'
  },
  {
    path: 'mistakes',
    loadComponent: () => import('./ng-mistakes/ng-mistakes.component'),
    title: 'mistakes'
  },


];


