import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import * as reduxLoop from 'redux-loop';
import rootReducer from './reducers';

//md5
import md5 from 'md5'

const middleware = [thunk];

const storageState = localStorage.getItem(md5('TokenIncidencia')) ? {auth:{auth:[true]},usuario:{usuarios:JSON.parse(localStorage.getItem('infoUser'))} } : {
  auth:"",
  usuario:"",
  loader:"",
  renderHeader:"",
  graficosReducer:"",
  firebaseDatos:"", 
  proyecto:"",
  mapa:""
};

const enhancer = compose(
  applyMiddleware(...middleware),
  reduxLoop.install(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, storageState, enhancer );

export default store;