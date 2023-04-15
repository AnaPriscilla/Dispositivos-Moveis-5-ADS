import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListResolver } from './list-resolver';

import { ListPage } from './list.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage,
    resolve:{
      data: ListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
