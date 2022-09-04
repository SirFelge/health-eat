import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModulePageRoutingModule } from './shared-module-routing.module';

import { SharedModulePage } from './shared-module.page';

import { HeaderComponent } from '../components/header/header.component';
import { CategoryItemComponent } from '../components/category-item/category-item.component';
import { NavButtonComponent } from '../components/nav-button/nav-button.component';

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
    NavButtonComponent
  ],
  exports: [
    HeaderComponent,
    CategoryItemComponent,
    NavButtonComponent
  ]
})

export class SharedModulePageModule {}