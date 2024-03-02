import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherIconModule } from '../../../core/feather-icon/feather-icon.module';

import { NgbAccordionModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { GeneralComponent } from './general.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: '',
        redirectTo: 'blank-page',
        pathMatch: 'full'
      },

      {
        path: 'faq',
        component: FaqComponent
      },

      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'timeline',
        component: TimelineComponent
      }
    ]
  }
]

@NgModule({
  declarations: [GeneralComponent, FaqComponent, ProfileComponent, TimelineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeatherIconModule,
    NgbAccordionModule,
    NgbDropdownModule,
    NgbTooltipModule
  ]
})
export class GeneralModule { }
