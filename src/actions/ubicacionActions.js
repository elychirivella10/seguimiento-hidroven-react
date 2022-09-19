import {AGREGAR_ESTADOS, RESET_ESTADOS, AGREGAR_MUNICIPIOS, RESET_MUNICIPIOS, AGREGAR_PARROQUIAS, RESET_PARROQUIAS} from '../actions/types'
import axios from 'axios'
import {rutaAxios} from '../variablesGoblales'

export const agregarEstados = (id)  => async dispatch => {
    const respuesta = await axios.get(`${rutaAxios}seguimiento/public/api/desplegables/estados${id>19?"":`/${id}`}`)
    
    {dispatch ({
        type: AGREGAR_ESTADOS, 
        payload: respuesta.data
    })}
}
export const agregarMunicipios = (id)  => async dispatch => {
    const respuesta = await axios.get(`${rutaAxios}seguimiento/public/api/desplegables/municipios/${id}`)
    
    {dispatch ({
        type: AGREGAR_MUNICIPIOS, 
        payload: respuesta.data
    })}
}
export const agregarParroquias = (id)  => async dispatch => {
    const respuesta = await axios.get(`${rutaAxios}seguimiento/public/api/desplegables/parroquias/${id}`)
    
    {dispatch ({
        type:  AGREGAR_PARROQUIAS, 
        payload: respuesta.data
    })}
}



export const resetFecha = () => {
    return {
        type: RESET_ESTADOS
    }
}