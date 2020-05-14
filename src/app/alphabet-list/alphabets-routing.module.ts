import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphabetsPage } from './alphabets.page';

const routes: Routes = [
  {
    path: '',
    component: AlphabetsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlphabetsPageRoutingModule {}
