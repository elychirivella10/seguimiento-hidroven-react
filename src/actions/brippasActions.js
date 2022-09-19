import {OBTENER_BRIPPAS, RESET_BRIPPAS} from './types'
//axios
import axios from 'axios'
import {rutaAxios} from '../variablesGoblales'
import alerta from 'components/alerta/Alerta'

export const obtenerBrippas = (estado=null)  => async dispatch => {

    const respuesta = await axios.get(`${rutaAxios}seguimiento/public/api/desplegables/brippas${estado?`/${estado}`:""}`)  
    {dispatch ({
        type:OBTENER_BRIPPAS, 
        payload: respuesta.data
    })}

    if (respuesta.data) {
        return true
    }
    
}

export const resetBrippas = (body) => async dispatch => {
    dispatch ({
        type:RESET_BRIPPAS
    }) 

    return true
}

