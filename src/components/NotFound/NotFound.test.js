import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFound';
import store from '../../store'
import {Provider} from 'react-redux'

it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
          <NotFound />
        </Provider>
        , div);
  ReactDOM.unmountComponentAtNode(div);
});
