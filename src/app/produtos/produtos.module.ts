import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { FormularioProdutoComponent } from './formulario-produto/formulario-produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FormularioProdutoComponent,
    ListarProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProdutosModule { }
