import {OBTENER_POZOS, RESET_POZOS} from './types'
//axios
import axios from 'axios'
import {rutaAxios} from '../variablesGoblales'
import alerta from 'components/alerta/Alerta'

export const obtenerPozos = (estado=null)  => async dispatch => {

    const respuesta = await axios.get(`${rutaAxios}seguimiento/public/api/desplegables/pozos${estado?`/${estado}`:""}`)  
    console.log(respuesta)
    {dispatch ({
        type:OBTENER_POZOS, 
        payload: respuesta.data
    })}

    if (respuesta.data) {
        return true
    }
    
}

export const resetPozos = (body) => async dispatch => {
    dispatch ({
        type:RESET_POZOS
    }) 

    return true
}

