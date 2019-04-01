import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastrarComponent,
    ListarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PessoaModule { }
