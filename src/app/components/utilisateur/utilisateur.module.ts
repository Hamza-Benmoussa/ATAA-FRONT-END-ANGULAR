import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {UtilisateurComponent} from "./utilisateur.component";
import {AddUtilisateurComponent} from "./add-utilisateur/add-utilisateur.component";
import {ListUtilisateurComponent} from "./list-utilisateur/list-utilisateur.component";
import {UpdateUtilisateurComponent} from "./update-utilisateur/update-utilisateur.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {
    path: '',
    component: UtilisateurComponent,
    children: [
      {
        path: 'add-utilisateur',
        component: AddUtilisateurComponent
      },
      {
        path: 'list-utilisateur',
        component: ListUtilisateurComponent
      },
      {
        path: 'update-utilisateur',
        component: UpdateUtilisateurComponent
      },

    ]
  }
]

@NgModule({
  declarations: [AddUtilisateurComponent, ListUtilisateurComponent,UpdateUtilisateurComponent,UtilisateurComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class UtilisateurModule { }
