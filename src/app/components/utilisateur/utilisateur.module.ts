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
import {AuthGuardService} from "../../service/guard/auth.guard.service";


const routes: Routes = [
  {
    path: '',
    component: UtilisateurComponent,
    children: [
      {
        path: 'add-utilisateur',
        component: AddUtilisateurComponent,
        canActivate : [AuthGuardService],data:{role:['AdminApp']}
      },
      {
        path: 'list-utilisateur',
        component: ListUtilisateurComponent,
        canActivate : [AuthGuardService],data:{role:['AdminApp']}
      },
      {
        path: 'update-utilisateur/:id',
        component: UpdateUtilisateurComponent,
        canActivate : [AuthGuardService],data:{role:['AdminApp']}
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
