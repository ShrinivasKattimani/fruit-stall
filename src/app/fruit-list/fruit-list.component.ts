import { Component, OnInit, EventEmitter } from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css'],
  inputs: ['fruits'],
  outputs: ['SelectFruit']
})
export class FruitListComponent implements OnInit {
  public SelectFruit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelectFruit(fruit: Fruit){
    this.SelectFruit.emit(fruit);
  }

  insertFruit(){
    console.log("about to add a new fruit");
  }
}
