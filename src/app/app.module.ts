import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { ViewAllToDoComponent } from './view-all-to-do/view-all-to-do.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
const myRoute:Routes=[

  {
    path:"viewall",
   component:ViewAllToDoComponent
  },
  {
    path:"add",
   component:AddToDoComponent
  },
  {
    path:"nav",
    component:NavbarComponent
  
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AddToDoComponent,
    ViewAllToDoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
