import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModulePage } from './shared-module.page';

const routes: Routes = [
  {
    path: '',
    component: SharedModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedModulePageRoutingModule {}
