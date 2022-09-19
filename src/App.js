import React from 'react';
import {initAxiosInterceptors} from './helpers/auth-helper'
//css propio
import './css/index.css'
import 'scss/style.scss'
//redux
import { Provider } from 'react-redux';
import store from './store';
//Routes
import Routes from './routes/Routes'

initAxiosInterceptors()
console.error('Something bad happened.');

function App() {
  return (
    <Provider store = {store}>  
      <Routes/>
    </Provider>
  );
}

export default App;
