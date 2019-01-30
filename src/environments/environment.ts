const urlApiAgendaHeroku = 'https://api-agenda-omega.herokuapp.com';

export const environment = {
  production: false,
  pessoa: {
    save: urlApiAgendaHeroku + '/pessoa/save',
    list: urlApiAgendaHeroku + '/pessoa/list',
    delete: urlApiAgendaHeroku + '/pessoa/delete'
  }
};

