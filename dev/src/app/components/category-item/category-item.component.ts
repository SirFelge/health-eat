import { Component, OnInit } from '@angular/core';
import inventory from 'src/assets/json/inventory.json'
import { Router } from '@angular/router';

interface IValues {
  name: String,
  healthy: number,
  energy: number,
  macros: number
}

interface IInventory {
  category: String,
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
    this.evenAmountOfCategories = this.inventories.length % 2 == 0;
  }

  GoToPage(category:string): void {
    var foods: IValues[] = this.GetFoodsFromCategory(category); 
    this.router.navigate(["food-list"]);
  }

  GetFoodsFromCategory(selectedCategory:string): IValues[] {
    this.inventories.forEach(inventory => {
      if(inventory.category == selectedCategory){
         return inventory.values;
      } 
    });
    
    return null;
  }
}
