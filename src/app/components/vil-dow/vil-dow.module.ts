import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuardService} from "../../service/guard/auth.guard.service";
import {VilDowComponent} from "./vil-dow.component";
import {ListVDComponent} from "./list-vd/list-vd.component";
import {ListDvComponent} from "./list-dv/list-dv.component";


const routes: Routes = [
  {
    path: '',
    component: VilDowComponent,
    children: [
      {
        path: 'list-vd',
        component: ListVDComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },
      {
        path: 'list-dv',
        component: ListDvComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },

    ]
  }
]

@NgModule({
  declarations: [ListDvComponent, ListVDComponent,VilDowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class VilDowModule { }
