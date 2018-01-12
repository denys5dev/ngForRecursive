import { Component, OnInit } from '@angular/core';

import { TestService } from './shared/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string;

  constructor(private _testService: TestService, private _router: Router) {}

  ngOnInit() {
    this.title = "Angular 5 Helper";

    this._testService.getTestData().subscribe(res => {
      console.log(res);
    })
  }
  goHome() {
    this._router.navigate(['/']);
  }
  showTree() {
    this._router.navigate(['/tree']);
  }
}
