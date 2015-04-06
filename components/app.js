import React from 'react';
import component from 'omniscient';
import Router from 'react-router';

var mixin = {

};

var Component = component('App', (props) => {

  return (
    <div>

      <Router.Link to='dashboard'>Dashboard</Router.Link>
      <Router.Link to='content'>Content</Router.Link>

      <header style={{ height: 200, background: 'silver' }}>
        APPLICATION
      </header>

      <div className='content'>
        <Router.RouteHandler {...props} />
      </div>

    </div>
  );

});

export default Component.jsx;
