import { combineReducers } from 'redux';
import auth from '../reducers/authReducer'
import usuario from '../reducers/usuarioReducer'
import loader from '../reducers/loaderReducer'
import login from '../reducers/loginReducer'
import graficos from '../reducers/graficosReducer'
import firebase from '../reducers/firebaseReducer'
import reportes from './reportesReducer'
import proyecto from '../reducers/proyectoReducer'
import mapa from '../reducers/mapaReducer'
import pozos from './pozosReducer'
import fecha from './fechaReducer'
import brippas from './brippasReducer'
import ubicacion from './ubicacionReducer';

export default combineReducers({
   auth:auth,
   usuario:usuario,
   loader:loader,
   renderHeader:login,
   graficosReducer:graficos,
   firebaseDatos:firebase,
   reportesReducer:reportes, 
   proyecto:proyecto,
   mapa:mapa,
   pozos:pozos,
   fecha:fecha,
   brippas:brippas,
   ubicacion:ubicacion
});