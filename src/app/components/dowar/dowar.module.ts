import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuardService} from "../../service/guard/auth.guard.service";
import {DowarComponent} from "./dowar.component";
import {AddDowarComponent} from "./add-dowar/add-dowar.component";
import {ListDowarComponent} from "./list-dowar/list-dowar.component";
import {UpdateDowarComponent} from "./update-dowar/update-dowar.component";


const routes: Routes = [
  {
    path: '',
    component: DowarComponent,
    children: [
      {
        path: 'add-dowar',
        component: AddDowarComponent,
        canActivate : [AuthGuardService],data:{role:['AdminApp']}
      },
      {
        path: 'list-dowar',
        component: ListDowarComponent,
        canActivate : [AuthGuardService],data:{role:['AdminApp','PresidantAssociation']}
      },
      {
        path: 'update-dowar/:id',
        component: UpdateDowarComponent,
        canActivate : [AuthGuardService],data:{role:['AdminApp']}
      },

    ]
  }
]

@NgModule({
    declarations: [AddDowarComponent, ListDowarComponent,UpdateDowarComponent,DowarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class DowarModule { }
