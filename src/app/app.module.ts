import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomErrorHandlerService } from './shared/custom-error-handler.service';
import { HttpModule } from '@angular/http';
import { TestService } from './shared/test.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandlerService }, TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
