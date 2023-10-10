import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { FormularioProdutoComponent } from './formulario-produto/formulario-produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';


@NgModule({
  declarations: [
    FormularioProdutoComponent,
    ListarProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
