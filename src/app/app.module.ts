import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DatePipe } from '@angular/common';


import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { ArrListComponent } from './arr-list/arr-list.component';







// new add

@NgModule({
  declarations: [
    AppComponent,
    ArrListComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,

    NgxChartsModule,
    NgxJsonViewerModule,

    ReactiveFormsModule,
    FormsModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
