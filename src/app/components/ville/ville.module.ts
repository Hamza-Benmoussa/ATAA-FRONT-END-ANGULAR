import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AddVilleComponent} from "./add-ville/add-ville.component";
import {ListVilleComponent} from "./list-ville/list-ville.component";
import {UpdateVilleComponent} from "./update-ville/update-ville.component";
import {VilleComponent} from "./ville.component";
import {AuthGuardService} from "../../service/guard/auth.guard.service";


const routes: Routes = [
  {
    path: '',
    component: VilleComponent,
    children: [
      {
        path: 'add-ville',
        component: AddVilleComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },
      {
        path: 'list-ville',
        component: ListVilleComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },
      {
        path: 'update-ville/:id',
        component: UpdateVilleComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },

    ]
  }
]

@NgModule({
  declarations: [AddVilleComponent, ListVilleComponent,UpdateVilleComponent,VilleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class VilleModule { }
