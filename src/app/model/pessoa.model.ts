import { Endereco } from './endereco.model';

export class Pessoa {
  id: number;
  nome: string;
  cpf: string;
  rg: string;
  telefone: string;
  celular: string;
  endereco: Endereco;
  email: string;
}
