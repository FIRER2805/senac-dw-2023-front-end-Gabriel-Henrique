import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinasComponent } from './vacinas.component';

const routes: Routes = [
  {path: '', component: VacinasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinasRoutingModule { }
