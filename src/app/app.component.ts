import { Component, OnInit } from '@angular/core';
import { treeView } from './config/mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  nodes: any;

  constructor() {}

  ngOnInit() {
    this.nodes = treeView;
    console.log(this.nodes);
  }
}
