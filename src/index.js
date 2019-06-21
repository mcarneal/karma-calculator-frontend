import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { ActionCableProvider } from 'react-actioncable-provider'
import 'semantic-ui/dist/semantic.min.css';


ReactDOM.render(
  <ActionCableProvider url='ws://karmacalculatorapi.herokuapp.com/api/v1/cable'>
  <Provider store={store}>
    <BrowserRouter>
    <App store={store} />
    </BrowserRouter>
  </Provider>
</ActionCableProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
