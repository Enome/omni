import React from 'react';
import component from 'omniscient';
import Router from 'react-router';
import { fromJS } from 'immutable';

var mixin = {
  navigate: (cursor, name, params) => (event) => {
    cursor
      .cursor(['browser', 'url'])
      .update(() => fromJS({ name, params }));
  },

  scroll: (cursor, x, y) => (event) => {

    cursor
      .cursor(['browser', 'scroll'])
      .update(() => fromJS({ x, y }));

  },
};

var Component = component('Content', mixin, function ({cursor}) {

  return (
    <div>
      <Router.Link to='content-a'>Content A</Router.Link>
      <Router.Link to='content-b' params={{ id: 1234 }}>Content B</Router.Link>

      <div onClick={this.navigate(cursor, 'content-a', {})}>
        Navigate to <strong>Content A</strong> by updating state.
      </div>

      <div onClick={this.navigate(cursor, 'content-b', { id: '321' })}>
        Navigate to <strong>Content B</strong> by updating state.
      </div>

      <h2>Content</h2>

      <Router.RouteHandler cursor={cursor} />

      <button onClick={this.scroll(cursor, 0, 0)}>Scroll Up</button>

    </div>
  );

}).jsx;

export default Component;
