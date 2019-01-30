import { CadastrarComponent } from './../cadastrar/cadastrar.component';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor( private pessoaService: PessoaService) { }

  ngOnInit() {
  }

  getListPessoas() {
    this.pessoaService.listar().subscribe();

  }

}
