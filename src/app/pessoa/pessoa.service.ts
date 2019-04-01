import { Pessoa } from './../model/pessoa.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }

  cadastrar(pessoa: Pessoa): Observable<Pessoa> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<Pessoa>(environment.pessoa.save, pessoa, httpOptions);
  }

  listar(): Observable<Pessoa[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.get<Pessoa[]>(environment.pessoa.list, httpOptions);
  }

  deletar(id: number): Observable<any> {
    const url = environment.pessoa.delete + '/' + id;
    return this.httpClient.delete<any>(url);
  }
}
