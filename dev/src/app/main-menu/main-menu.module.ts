import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainMenuPageRoutingModule } from './main-menu-routing.module';

import { MainMenuPage } from './main-menu.page';

import { HeaderComponent } from '../components/header/header.component';
import { CategoryItemComponent } from '../components/category-item/category-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainMenuPageRoutingModule,
  ],
    declarations: [MainMenuPage, HeaderComponent, CategoryItemComponent]
})
export class MainMenuPageModule {}
