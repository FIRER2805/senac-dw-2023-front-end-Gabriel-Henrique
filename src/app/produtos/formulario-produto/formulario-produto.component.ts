import { Component, ViewChild } from '@angular/core';
import { Produto } from 'src/app/shared/model/entity/Produto';
import { NgForm } from '@angular/forms';
import { ProdutoService } from 'src/app/shared/service/produto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.component.html',
  styleUrls: ['./formulario-produto.component.scss']
})
export class FormularioProdutoComponent {
  produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService){}

  @ViewChild('ngForm')
  ngForm: NgForm;

  salvar(form: NgForm){
    if(form.invalid){
      return alert("invalido");
    }
  }

  buscar(){
    let produtos: Observable<Produto[]> = this.produtoService.listarTodos();
    console.log(produtos);
  }
}
