import React from 'react';
import component from 'omniscient';
import Router from 'react-router';

var Component = component('Content', ({cursor}) => {

  return (
    <div>

      <Router.Link to='content-a'>Content A</Router.Link>
      <Router.Link to='content-b'>Content B</Router.Link>

      <h2>Content {cursor.get('active_route').path}</h2>

      <Router.RouteHandler input={cursor.get('input')} />

    </div>
  );

}).jsx;

export default Component;
