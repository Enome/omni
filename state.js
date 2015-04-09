import immstruct from 'immstruct';

var state = immstruct({

  active_route: {
    name: '',
    params: {},
    query: {},
  },

  input: 'foo',

});

export default state;
