import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material'
import { AppComponent } from './app.component';
import { CustomErrorHandlerService } from './shared/custom-error-handler.service';
import { HttpModule } from '@angular/http';
import { TestService } from './shared/test.service';
import { TreeComponent } from './components/tree-component/tree-component.component';

import { Route, RouterModule } from '@angular/router';


let route: Route[] = [
  { path: 'tree', component: TreeComponent } 
];


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(route)
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandlerService }, TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
