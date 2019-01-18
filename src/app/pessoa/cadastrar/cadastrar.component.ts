import { Endereco } from './../../model/endereco.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(),
      cpf: new FormControl(),
      rg: new FormControl(),
      telefone: new FormControl(),
      celular: new FormControl(),
      email: new FormControl(),
      endereco: new FormGroup({
        logradouro: new FormControl(),
        numero: new FormControl(),
        bairro: new FormControl(),
        complemento: new FormControl(),
        cep: new FormControl(),
        cidade: new FormControl(),
        estado: new FormControl()
      })
    });
  }
  salvarForm() {
    console.log(this.cadastroForm.value);
  }
}
