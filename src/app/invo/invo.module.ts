import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoRoutingModule } from './invo-routing.module';
import { Invoice1Component } from './invoice1/invoice1.component';


@NgModule({
  declarations: [
    Invoice1Component
  ],
  imports: [
    CommonModule,
    InvoRoutingModule
  ]
})
export class InvoModule { }
