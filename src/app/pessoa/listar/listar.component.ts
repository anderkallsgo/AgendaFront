import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from 'src/app/model/pessoa.model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listarPessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.getListPessoas();
  }

  getListPessoas() {
    this.pessoaService.listar().subscribe(resultado => this.listarPessoas = resultado);
  }

  deletePessoa(pessoa: Pessoa): void {
    this.listarPessoas = this.listarPessoas.filter(p => p !== pessoa);
    this.pessoaService.deletar(pessoa.id).subscribe(resultado => {
      console.log(resultado);
    });
  }

}
