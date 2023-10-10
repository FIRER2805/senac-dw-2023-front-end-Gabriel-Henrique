import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/entity/Produto';
import { ProdutoSeletor } from '../model/seletor/ProdutoSeletor';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly URL = "localhost:8080/api/produtos";

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.URL);
  }

  listarComSeletor(seletor: ProdutoSeletor): Observable<Produto[]>{
    return this.httpClient.post<Produto[]>(`${this.URL}/filtro`, seletor);
  }

  salvar(produto: Produto): Observable<Produto>{
    return this.httpClient.post<Produto>(this.URL, produto);
  }

  atualizar(produto: Produto): Observable<Produto>{
    return this.httpClient.put<Produto>(this.URL, produto);
  }
}
