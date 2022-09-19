import {AGREGAR_USUARIO, ELIMINAR_INFO_USUARIO} from '../actions/types'

//importar store general
import store from '../store'

//importar axios
import axios from 'axios'

//
import {rutaAxios} from '../variablesGoblales'

//md5
import md5 from 'md5'

export const agregarUsuario = (body) => async dispatch => {

        const respuesta = await axios.post(`${rutaAxios}user/public/api/user/info`,{nick:body})
        if(respuesta.data !== null){

            store.subscribe( () => {
                localStorage.setItem('infoUser', JSON.stringify(respuesta.data))
            });

            setTimeout(function(){ dispatch ({
                type:AGREGAR_USUARIO, 
                payload: respuesta.data
            }) },1000);
            return true
        }
        return false
} 

export const desInfoUser = () => {
    localStorage.removeItem('infoUser');
    return {
        type:ELIMINAR_INFO_USUARIO
    }
}