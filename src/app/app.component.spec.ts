import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomErrorHandlerService } from './shared/custom-error-handler.service';
import { HttpModule } from '@angular/http';
import { TestService } from './shared/test.service';


describe('AppComponenet', () => {
  let component: ComponentFixture<AppComponent>;
  let element: DebugElement;
  let html: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        HttpModule
      ],
      providers:[TestService]
    });
    component = TestBed.createComponent(AppComponent);
  })

  it('it should have a title', () => {
    let title = "Hello Angular";

    component.detectChanges();
    element = component.debugElement.query(By.css('h1'));
    html = element.nativeElement;

    expect(html.innerText).toBe(title);
  })

})