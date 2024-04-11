import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuardService} from "../../service/guard/auth.guard.service";
import {TimelineComponent} from "./timeline.component";


const routes: Routes = [
  {
    path: '',
    component: TimelineComponent,
    children: [
      {
        path: 'timeline',
        component: TimelineComponent,
      },

    ]
  }
]

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class TimelineModule { }
