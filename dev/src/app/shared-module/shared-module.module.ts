import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModulePageRoutingModule } from './shared-module-routing.module';

import { SharedModulePage } from './shared-module.page';

import { HeaderComponent } from '../components/header/header.component';
import { CategoryItemComponent } from '../components/category-item/category-item.component';
import { NavButtonComponent } from '../components/nav-button/nav-button.component';
import { FoodListingComponent } from '../components/food-listing/food-listing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModulePageRoutingModule
  ],
  declarations: [
    SharedModulePage,
    HeaderComponent,
    CategoryItemComponent,
    NavButtonComponent,
    FoodListingComponent
  ],
  exports: [
    HeaderComponent,
    CategoryItemComponent,
    NavButtonComponent,
    FoodListingComponent
  ]
})

export class SharedModulePageModule {}