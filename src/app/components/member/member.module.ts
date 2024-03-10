import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuardService} from "../../service/guard/auth.guard.service";
import {MemberComponent} from "./member.component";
import {AddMemberComponent} from "./add-member/add-member.component";
import {ListMemberComponent} from "./list-member/list-member.component";
import {UpdateMemberComponent} from "./update-member/update-member.component";


const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
    children: [
      {
        path: 'add-member',
        component: AddMemberComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },
      {
        path: 'list-member',
        component: ListMemberComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },
      {
        path: 'update-member/:id',
        component: UpdateMemberComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },

    ]
  }
]

@NgModule({
  declarations: [AddMemberComponent, ListMemberComponent,UpdateMemberComponent,MemberComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class MemberModule { }
