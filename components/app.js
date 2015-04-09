import R from 'ramda';
import React from 'react';
import component from 'omniscient';
import Router from 'react-router';
import { fromJS } from 'immutable';
import state from '../state';

var mixin = {

  /* HELPERS */

  getActiveRoute (route_state) {
    var name = R.last(route_state.routes).name;
    var params = route_state.params;
    var query = route_state.query;
    return fromJS({ name, params, query });
  },

  setActiveRouteState (route_state) {
    state
      .cursor('active_route')
      .update(() => this.getActiveRoute(route_state));
  },

  /* CONTEXT */

  contextTypes: {
    router: React.PropTypes.func
  },

  /* LIFECYCLE EVENTS */

  componentDidMount () {
    state.on('swap', (new_struct, old_struct) => {
      var { name, params } = new_struct.toJS().active_route;
      this.context.router.transitionTo(name, params);
    });  
  },

  componentWillMount () {
    this.setActiveRouteState(this.props.route_state);
  },

  componentWillReceiveProps (props) {
    this.setActiveRouteState(props.route_state);
  },

};

var render = (props) => {

  return (

    <div>
      <Router.Link to='dashboard'>Dashboard</Router.Link>
      <Router.Link to='content'>Content</Router.Link>

      <header style={{ height: 200, background: 'silver' }}>
        APPLICATION
      </header>

      <div className='content'>
        <Router.RouteHandler cursor={state.cursor()} />
      </div>

      <pre>
        {JSON.stringify(state.current.toJS(), null, 2)}
      </pre>
    </div>

  );

};

export default component('App', mixin, render).jsx;
