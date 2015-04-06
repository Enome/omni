import React from 'react';
import Router from 'react-router';
import component from 'omniscient';

import state from './state';
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
      <Router.Route name='content-b' path='/content-b' handler={ContentB} />
    </Router.Route>

  </Router.Route>
);

var rerender = (state, element) => {

  var Handler;

  var listen = (H, route_state) => {

    if (H) {
      Handler = H;
    }

    state.cursor().update('active_route', () => {
      return {
        path: route_state.path,
        params: {}
      };
    });

  };

  var render = () => {
    return React.render(<Handler cursor={state.cursor()} />, element);
  };

  state.on('swap', () => render());

  return listen;

};

Router.run(routes, rerender(state, document.body));
console.log(Router);
