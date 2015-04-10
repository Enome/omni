import React from 'react';
import component from 'omniscient';

var Component = component('ContentB', ({cursor}) => {

  var onChange = (e) => {
    cursor.cursor('input').update((val) => e.target.value);
  };

  var input = cursor.get('input');

  return (
    <div>
      <p>This is the content for page B</p>
      {input}
      <input value={input} onChange={onChange} />
    </div>
  );

}).jsx;

export default Component;
