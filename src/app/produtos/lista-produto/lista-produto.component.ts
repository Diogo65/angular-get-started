import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {

  constructor(private proodutoService: ProdutoService) { } //Injetar o serviço

  public produtos: Produto[];

  ngOnInit() {
    this.proodutoService.obterProdutos()
      .subscribe( //estou me inscrevendo no evento de retorno desse observable
        produtos => {
          this.produtos = produtos;
          console.log(produtos);
        },
        error => console.log(error)
      );
  }
}
