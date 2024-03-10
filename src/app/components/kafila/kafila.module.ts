import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuardService} from "../../service/guard/auth.guard.service";
import {KafilaComponent} from "./kafila.component";
import {AddKafilaComponent} from "./add-kafila/add-kafila.component";
import {ListKafilaComponent} from "./list-kafila/list-kafila.component";
import {UpdateKafilaComponent} from "./update-kafila/update-kafila.component";


const routes: Routes = [
  {
    path: '',
    component: KafilaComponent,
    children: [
      {
        path: 'add-kafila',
        component: AddKafilaComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },
      {
        path: 'list-kafila',
        component: ListKafilaComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },
      {
        path: 'update-kafila/:id',
        component: UpdateKafilaComponent,
        canActivate : [AuthGuardService],data:{role:['PresidantAssociation']}
      },

    ]
  }
]

@NgModule({
  declarations: [AddKafilaComponent, ListKafilaComponent,UpdateKafilaComponent,KafilaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class KafilaModule { }
