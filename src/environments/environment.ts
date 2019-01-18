const urlApiAgendaHeroku = 'https://api-agenda-omega.herokuapp.com';

export const environment = {
  production: false,
  pessoa: {
    save: urlApiAgendaHeroku + '/pessoa/save',
    delete: urlApiAgendaHeroku + '/pessoa/delete'
  }
};

