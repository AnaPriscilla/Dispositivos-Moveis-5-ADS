import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { MasterPage } from './master.page';

const routes: Routes = [
  /*{
    path: '',
    component: MasterPage
  },*/
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    //path: 'list',
    path: '',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterPageRoutingModule {}
