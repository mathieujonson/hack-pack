import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import store from '../../store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

test.skip('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
        , div);
  ReactDOM.unmountComponentAtNode(div);
});
