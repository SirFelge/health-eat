import { Component, OnInit } from '@angular/core';
import inventory from '../../../assets/json/inventory.json'
import { Router } from '@angular/router';

interface IValues {
  name: String,
  healthy: number,
  energy: number,
  macros: number
}

interface IInventory {
  name: String,
  iconPath: String,
  values: IValues[]
}

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  inventories: IInventory[];
  evenAmountOfCategories: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.inventories = inventory;
    this.evenAmountOfCategories = this.inventories.length % 2 == 0; //Need for styling purposes
  }

  GoToPage(category:string): void {
    var foods: IValues[] = this.GetFoodsFromCategory(category); 
    console.log(foods);
    this.router.navigate(["food-list", {values: foods}]);
  }

  GetFoodsFromCategory(selectedCategory:string): IValues[] {
    var foods : IValues[];

    this.inventories.forEach(inventory => {
      if(inventory.name == selectedCategory){
        foods = inventory.values;
      }
    });

    return foods;
  }
}
