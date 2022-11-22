import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    TaskComponent,
    NavbarComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
