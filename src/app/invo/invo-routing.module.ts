import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Invoice1Component } from './invoice1/invoice1.component';

const routes: Routes = [
  {
  path:'',
  children:[
    {path:'invoice1',component:Invoice1Component}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoRoutingModule { }
