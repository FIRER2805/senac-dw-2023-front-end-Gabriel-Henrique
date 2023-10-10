import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioProdutoComponent } from './formulario-produto/formulario-produto.component';

const routes: Routes = [
  {path: '', component: FormularioProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
