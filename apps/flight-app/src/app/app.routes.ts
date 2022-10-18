import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PassengerMf } from '../mf-types';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mf-passenger',
    loadChildren: () => loadRemoteModule<PassengerMf>({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './module'
    })
      .then(esm => esm.PassengerModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
