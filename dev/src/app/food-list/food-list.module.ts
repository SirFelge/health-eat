import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodListPageRoutingModule } from './food-list-routing.module';

import { FoodListPage } from './food-list.page';

import { SharedModulePageModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodListPageRoutingModule,
    SharedModulePageModule
  ],
  declarations: [FoodListPage]
})
export class FoodListPageModule {}
