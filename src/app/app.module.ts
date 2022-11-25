import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { ViewAllToDoComponent } from './view-all-to-do/view-all-to-do.component';
import { RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[

  {
    path:"viewall",
    Component:ViewAllToDoComponent
  },
  {
    path:"add",
    Component:AddToDoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddToDoComponent,
    ViewAllToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
