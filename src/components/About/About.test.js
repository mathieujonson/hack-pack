import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import store from '../../store'
import {Provider} from 'react-redux'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Provider store={store}>
        <About store={store} />
      </Provider>
      , div);
  ReactDOM.unmountComponentAtNode(div);
});
