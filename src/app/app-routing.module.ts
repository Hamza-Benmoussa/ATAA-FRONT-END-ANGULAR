import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import {AddUtilisateurComponent} from "./components/utilisateur/add-utilisateur/add-utilisateur.component";


const routes: Routes = [
  { path:'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'charts-graphs',
        loadChildren: () => import('./views/pages/charts-graphs/charts-graphs.module').then(m => m.ChartsGraphsModule)
      },
      {
        path: 'utilisateur',
        loadChildren: () => import('./components/utilisateur/utilisateur.module').then(m => m.UtilisateurModule)
      },
      {
        path: 'vil-dow',
        loadChildren: () => import('./components/vil-dow/vil-dow.module').then(m => m.VilDowModule)
      },
      {
        path: 'ville',
        loadChildren: () => import('./components/ville/ville.module').then(m => m.VilleModule)
      },
      {
        path: 'member',
        loadChildren: () => import('./components/member/member.module').then(m => m.MemberModule)
      },
      {
        path: 'biens-essentiel',
        loadChildren: () => import('./components/biens-essentiel/biens-Essentiel.module').then(m => m.BiensEssentielModule)
      },
      {
        path: 'kafila',
        loadChildren: () => import('./components/kafila/kafila.module').then(m => m.KafilaModule)
      },
      {
        path: 'association',
        loadChildren: () => import('./components/association/association.module').then(m => m.AssociationModule)
      },
      {
        path: 'dowar',
        loadChildren: () => import('./components/dowar/dowar.module').then(m => m.DowarModule)
      },
      {
        path: 'general',
        loadChildren: () => import('./views/pages/general/general.module').then(m => m.GeneralModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
