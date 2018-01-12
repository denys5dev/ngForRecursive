import { Component, OnInit } from '@angular/core';
import { treeView } from './config/mock';
import { TestService } from './shared/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  nodes: any;
  title: string;

  constructor(private _testService: TestService) {}

  ngOnInit() {
    this.nodes = treeView;
    this.title = "Hello Angular";

    this._testService.getTestData().subscribe(res => {
      console.log(res);
    })
  }
}
