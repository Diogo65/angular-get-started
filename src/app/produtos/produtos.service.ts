import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { Observable } from 'rxjs';


@Injectable() //O Angular passa a entender que ele é um serviço, ou uma classe que pode ser injetada em algum lugar
export class ProdutoService {

constructor(private http: HttpClient){

}
    //endereço do EndPoint
    protected UrlServiceV1: string = "http://localhost:3000/";

    //Observable ele é um CallBack, Ele diz o que espera receber e fica esperando =
    obterProdutos() : Observable<Produto[]> {
        return this.http
        .get<Produto[]>(this.UrlServiceV1 + "produtos"); //Retorna um Observable de Produto
    }
}