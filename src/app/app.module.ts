import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptorService} from "./service/interceptor/auth.interceptor.service";
import { ListKafilaComponent } from './components/kafila/list-kafila/list-kafila.component';
import { ListDowarComponent } from './components/dowar/list-dowar/list-dowar.component';
import { AddAssociationComponent } from './components/association/add-association/add-association.component';
import { AssociationComponent } from './components/association/association.component';
import { UpdateAssociationComponent } from './components/association/update-association/update-association.component';
import { ListAssociationComponent } from './components/association/list-association/list-association.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ListKafilaComponent,
    ListDowarComponent,
    AddAssociationComponent,
    AssociationComponent,
    UpdateAssociationComponent,
    ListAssociationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi : true,
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
