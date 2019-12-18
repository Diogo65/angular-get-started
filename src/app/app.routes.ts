import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';


//Esse arquivo de configuração deve ser configurado na Module (app.module)
export const rootRouterConfig: Routes = [
    //path de redirecionamento, pra quando nada for chamado
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    //path diz qual vai ser o nome que ele vai ter na URL 
    //component diz qual componente irá chamar quando chamar essa URL  
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produtos' , component: ListaProdutoComponent},
    { path: 'produto-detalhe/:id' , component: ListaProdutoComponent}

];