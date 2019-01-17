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
      endereco: new FormControl(),
      email: new FormControl()
    });
  }
  salvarForm() {
    console.log(this.cadastroForm.value);
  }
}
