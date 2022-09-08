import { Component, OnInit, Input } from '@angular/core';
import { IValues } from '../category-item/category-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-listing',
  templateUrl: './food-listing.component.html',
  styleUrls: ['./food-listing.component.scss'],
})
export class FoodListingComponent implements OnInit {
  @Input() foods: IValues[];
  @Input() detailPage: string;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("food-listing-data: ", this.foods); //Debug
  }

  goToPage(food:string){
    let selectedFood = this.getFoodFromFoods(food);
    this.router.navigate([this.detailPage], { state: {selectedValue: selectedFood} });
  }

  getFoodFromFoods(selectedFood:string): IValues {
    let food : IValues;

    this.foods.forEach(possibleFood => {
      if(possibleFood.name == selectedFood){
        food = possibleFood;
      }
    });

    return food;
  }
}
