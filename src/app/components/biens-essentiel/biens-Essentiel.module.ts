import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuardService} from "../../service/guard/auth.guard.service";
import {BiensEssentielComponent} from "./biens-essentiel.component";
import {AddBienComponent} from "./add-bien/add-bien.component";
import {ListBienComponent} from "./list-bien/list-bien.component";
import {UpdateBienComponent} from "./update-bien/update-bien.component";


const routes: Routes = [
  {
    path: '',
    component: BiensEssentielComponent,
    children: [
      {
        path: 'add-bien',
        component: AddBienComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },
      {
        path: 'list-bien',
        component: ListBienComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },
      {
        path: 'update-bien/:id',
        component: UpdateBienComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },

    ]
  }
]

@NgModule({
  declarations: [AddBienComponent, ListBienComponent,UpdateBienComponent,BiensEssentielComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class BiensEssentielModule { }
