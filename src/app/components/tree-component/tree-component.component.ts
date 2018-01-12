import { Component, OnInit } from '@angular/core';
import { treeView } from '../../config/mock';

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css']
})
export class TreeComponent implements OnInit {
  nodes: any;
  constructor() { }

  ngOnInit() {
    this.nodes = treeView;
  }

}
