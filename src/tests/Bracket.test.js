import React from 'react';
import ReactDOM from 'react-dom';
import Bracket from '../components/Bracket/index';

it('renders without crashing', () => {
  const div = document.createElement('div'); /* eslint no-undef: 0 */ // -> OFF
  ReactDOM.render(<Bracket />, div);
  ReactDOM.unmountComponentAtNode(div);
});
