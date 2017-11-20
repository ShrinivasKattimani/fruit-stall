import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-fruit-center',
  templateUrl: './fruit-center.component.html',
  styleUrls: ['./fruit-center.component.css'],
  providers: [FruitService]
})
export class FruitCenterComponent implements OnInit {

  fruits: Array <Fruit>;
  selectedFruit : Fruit;
  private hideForm: boolean = true;

  constructor(private _fruitService: FruitService) {
    this._fruitService.getFruits().
    subscribe(resFruitData =>this.fruits = resFruitData);
  }

  ngOnInit() {
  }

  onFruitSelection(fruit: any){
    this.selectedFruit = fruit;
  }

  addFruitOnSubmit(fruit: Fruit){
    this._fruitService.addFruit(fruit)
    .subscribe(resNewFruit => {
      this.fruits.push(resNewFruit);
      this.selectedFruit = resNewFruit;
      this.hideForm = true;
    })
  }

  onUpdatefruitEvent(fruit: any){
    this._fruitService.updateFruit(fruit)
    .subscribe(resUpdatedFruit => {
      this.selectedFruit = resUpdatedFruit;
    })
  }

  onDeleteFruitevent(fruit: any){
    this._fruitService.deleteFruit(fruit)
    .subscribe(resDeletedFruit =>{
      this.selectedFruit = null;
      for(var i=0; i<this.fruits.length; i++){
        if(this.fruits[i]._id == resDeletedFruit._id){
          this.fruits.splice(i, 1);
          break;
        }
      }
    })
  }
}
