import immstruct from 'immstruct';

var state = immstruct({

  browser: {

    url: {
      name: '',
      params: {},
    },

    mouse: { 
      x: 0, 
      y: 0,
    },

    scroll: {
      y: 0,
      x: 0
    },

  },

  input: 'foo',

});

export default state;
