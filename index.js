import React from 'react';
import Router from 'react-router';
import component from 'omniscient';

import App from './components/app';
import Dashboard from './components/dashboard';
import Content from './components/content';
import ContentA from './components/content-a';
import ContentB from './components/content-b';

var routes = (
  <Router.Route name='app' path='/' handler={App}>

    <Router.DefaultRoute name='dashboard' handler={Dashboard} />

    <Router.Route name='content' path='/content' handler={Content}>
      <Router.DefaultRoute name='content-a' handler={ContentA} />
      <Router.Route name='content-b' path='/content-b/:id' handler={ContentB} />
    </Router.Route>

  </Router.Route>
);

var render = (Handler, state) => {
  React.render(<Handler route_state={state}/>, document.body);
};

//component.debug();

Router.run(routes, render);
