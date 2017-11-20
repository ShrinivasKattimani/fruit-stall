import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css'],
  inputs: ['fruit'],
  outputs: ['updateFruitEvent', 'deleteFruitevent']
})
export class FruitDetailComponent implements OnInit {
  @Input() fruit: any;
  private updateFruitEvent = new EventEmitter();
  private deleteFruitevent = new EventEmitter();
  private updateMode = false;
  constructor() {}

  ngOnInit() {
  }

  updateFruit(){
    this.updateFruitEvent.emit(this.fruit);
    this.updateMode = !this.updateMode;
  }

  deleteFruit(){
    this.deleteFruitevent.emit(this.fruit);
  }
}
