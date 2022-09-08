import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IValues } from '../components/category-item/category-item.component';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.page.html',
  styleUrls: ['./food-list.page.scss'],
})

export class FoodListPage implements OnInit {
  foods: IValues[];
  category: string;

  constructor(private router: Router) {
    this.category = this.router.getCurrentNavigation().extras.state.categoryName; 
    this.foods = this.router.getCurrentNavigation().extras.state.values;
    console.log("food-list-data: ", this.foods);
  }

  ngOnInit() {}
}