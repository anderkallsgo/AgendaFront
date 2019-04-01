import { AppComponent } from './app.component';
import { CadastrarComponent } from './pessoa/cadastrar/cadastrar.component';
import { ListarComponent } from './pessoa/listar/listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', redirectTo: 'cadastrarPessoa', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: 'listarPessoa', component: ListarComponent },
  {path: 'cadastrarPessoa', component: CadastrarComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
