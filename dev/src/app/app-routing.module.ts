import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./main-menu/main-menu.module').then( m => m.MainMenuPageModule) 
  },
  {
    path: 'food-list',
    loadChildren: () => import('./food-list/food-list.module').then( m => m.FoodListPageModule)
  },
  {
    path: 'main-menu',
    loadChildren: () => import('./main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  },  {
    path: 'shared-module',
    loadChildren: () => import('./shared-module/shared-module.module').then( m => m.SharedModulePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
