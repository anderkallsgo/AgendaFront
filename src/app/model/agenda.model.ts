import { Profissional } from './profissional.model';
import { Pessoa } from './pessoa.model';

export class Agenda {
  id: number;
  data: Date;
  dataCadastro: Date;
  paciente: Pessoa;
  psicologo: Profissional;
}
