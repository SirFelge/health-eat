import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainMenuPageRoutingModule } from './main-menu-routing.module';

import { MainMenuPage } from './main-menu.page';

import { SharedModulePageModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainMenuPageRoutingModule,
    SharedModulePageModule
  ],
  declarations: [
    MainMenuPage
  ]
})
export class MainMenuPageModule {}