import { Component, OnInit } from '@angular/core';
import inventory from 'src/assets/json/inventory.json'

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
  inventory: IInventory[];
  evenAmountOfCategories: boolean;

  constructor() { }

  ngOnInit() {
    this.inventory = inventory;
    this.evenAmountOfCategories = this.inventory.length % 2 == 0;
    console.log(this.inventory);
  }
}
