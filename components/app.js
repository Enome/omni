import R from 'ramda';
import React from 'react';
import component from 'omniscient';
import Router from 'react-router';
import { fromJS, is } from 'immutable';
import state from '../state';

var mixin = {

  /* HELPERS */

  // Routes

  getActiveRoute (route_state) {
    var name = R.last(route_state.routes).name;
    var params = route_state.params;
    return fromJS({ name, params });
  },

  setActiveRouteState (route_state) {
    state
      .cursor(['browser', 'url'])
      .update(() => this.getActiveRoute(route_state));
  },


  // Mouse

  getMouseCords (event) {
    return { x: event.pageX, y: event.pageY };
  },

  setMouseState (event) {
    
    state
      .cursor(['browser', 'mouse'])
      .update(() => this.getMouseCords(event));

  },

  
  // Scroll

  getScrollCords (event) {
    return fromJS({ x: window.pageXOffset, y: window.pageYOffset });
  },

  setScrollState (event) {
    
    state
      .cursor(['browser', 'scroll'])
      .update(() => this.getScrollCords(event));

  },

  /* CONTEXT */

  contextTypes: {
    router: React.PropTypes.func
  },

  /* LIFECYCLE EVENTS */

  componentDidMount () {

    var browser_url_path = ['browser', 'url'];
    var browser_scroll_path = ['browser', 'scroll'];

    // MOUSE
    document.addEventListener('mousemove', this.setMouseState);

    // SCROLL
    window.addEventListener('scroll', this.setScrollState);

    // RERENDER
    state.on('swap', (next_struct, current_struct) => {

      if (!is(next_struct.getIn(browser_url_path), current_struct.getIn(browser_url_path))) {
        var { name, params } = next_struct.getIn(browser_url_path).toJS();
        this.context.router.transitionTo(name, params);
      }

      if (!is(next_struct.getIn(browser_scroll_path), current_struct.getIn(browser_scroll_path))) {
        var { x, y } = next_struct.getIn(browser_scroll_path).toJS();
        window.scrollTo(x, y);
      }

      this.forceUpdate();

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
