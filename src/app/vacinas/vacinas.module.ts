import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinasComponent } from './vacinas.component';


@NgModule({
  declarations: [
    VacinasComponent
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule
  ]
})
export class VacinasModule { }
