import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuardService} from "../../service/guard/auth.guard.service";
import {AssociationComponent} from "./association.component";
import {AddAssociationComponent} from "./add-association/add-association.component";
import {ListAssociationComponent} from "./list-association/list-association.component";
import {UpdateAssociationComponent} from "./update-association/update-association.component";


const routes: Routes = [
  {
    path: '',
    component: AssociationComponent,
    children: [
      {
        path: 'add-association',
        component: AddAssociationComponent,
        canActivate : [AuthGuardService],data:{role:['AdminApp']}
      },
      {
        path: 'list-association',
        component: ListAssociationComponent,
        canActivate : [AuthGuardService],data:{role:['AdminApp']}
      },
      {
        path: 'update-association/:id',
        component: UpdateAssociationComponent,
        canActivate : [AuthGuardService],data:{role:['AdminApp']}
      },

    ]
  }
]

@NgModule({
  declarations: [AddAssociationComponent, ListAssociationComponent,UpdateAssociationComponent,AddAssociationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AssociationModule { }
