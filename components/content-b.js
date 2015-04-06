import React from 'react';
import component from 'omniscient';

var Component = component('ContentB', (props) => {

  return (
    <div>
      <p>This is the content for page B</p>
      {props.input}
    </div>
  );

}).jsx;

export default Component;
