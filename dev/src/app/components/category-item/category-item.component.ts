import { Component, OnInit } from '@angular/core';
import inventory from '../../../assets/json/inventory.json'
import { Router } from '@angular/router';

export interface IValues {
  name: string,
  iconPath: string,
  healthy: number,
  energy: number,
  macros: number
}

interface IInventory {
  name: string,
  iconPath: string,
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
    let foods: IValues[] = this.GetFoodsFromCategory(category);
    this.router.navigate(["food-list"], { state: {categoryName: category,values: foods} });
    console.log("category-data: ", foods); //Debug
  }

  GetFoodsFromCategory(selectedCategory:string): IValues[] {
    let foods : IValues[];

    this.inventories.forEach(inventory => {
      if(inventory.name == selectedCategory){
        foods = inventory.values;
      }
    });

    return foods;
  }
}
