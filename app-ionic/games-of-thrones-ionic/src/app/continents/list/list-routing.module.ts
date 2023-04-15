import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { ListResolver } from './list.resolver';

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
