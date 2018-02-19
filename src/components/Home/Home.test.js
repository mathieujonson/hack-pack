import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import store from '../../store'
import {Provider} from 'react-redux'
import {connect} from 'react-redux'

it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
          <Home store={store}/>
        </Provider>
        , div);
  ReactDOM.unmountComponentAtNode(div);
});
