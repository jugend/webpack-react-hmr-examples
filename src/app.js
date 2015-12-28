import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './greeting';

ReactDOM.render(
  <div>
    <Greeting name="John"/>
  </div>,
  document.getElementById('container')
);

