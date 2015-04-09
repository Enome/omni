import React from 'react';
import component from 'omniscient';
import Router from 'react-router';
import { fromJS } from 'immutable';

var mixin = {

  navigate: (cursor) => (event) => {

    cursor
      .cursor('active_route')
      .update(() => fromJS({
        name: 'content-b',
        params: { id: '321' },
        query: {}
      }));

  },

};

var Component = component('Content', mixin, function ({cursor}) {

  return (
    <div>
      <Router.Link to='content-a'>Content A</Router.Link>
      <Router.Link to='content-b' params={{ id: 1234 }}>Content B</Router.Link>

      <div onClick={this.navigate(cursor)}>Manual Content B</div>

      <h2>Content {cursor.get('active_route').path}</h2>

      <Router.RouteHandler input={cursor.get('input')} />
    </div>
  );

}).jsx;

export default Component;
