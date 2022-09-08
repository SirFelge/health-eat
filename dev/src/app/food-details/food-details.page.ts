import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IValues } from '../components/category-item/category-item.component';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.page.html',
  styleUrls: ['./food-details.page.scss'],
})
export class FoodDetailsPage implements OnInit {
  selectedFood: IValues;
  healthy: string;
  energy: string;
  macros: string;

  constructor(private router: Router) {
    this.selectedFood = this.router.getCurrentNavigation().extras.state.selectedValue;
    this.healthy = this.selectedFood.healthy.toString() + "%";
    this.energy = this.selectedFood.energy.toString() + "%";
    this.macros = this.selectedFood.macros.toString() + "%";
    
    console.log(this.selectedFood);
  }

  ngOnInit() {}
}
