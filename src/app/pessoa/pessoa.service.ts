import { Pessoa } from './../model/pessoa.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }

  cadastrar(): Observable<Pessoa> {
    return null;
  }
}
