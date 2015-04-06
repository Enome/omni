import React from 'react';
import component from 'omniscient';

var Component = component('ContentA', (props) => {

  return (
    <div>
      <p>This is the content for page A</p>
      {props.input}
    </div>
  );

}).jsx;

export default Component;
