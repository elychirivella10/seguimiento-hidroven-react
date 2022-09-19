import {OBTENER_OBRAS_SECTORES_MAPA} from './types'

import axios from 'axios'

import {rutaAxios} from '../variablesGoblales'



export const mapaObtener = (body)  => async dispatch => {
    const respuesta = await axios.get(`${rutaAxios}Mapa_soluiones/mapa_soluciones/public/api/informacion/mapa/impacto`)

    setTimeout(function(){ dispatch ({
        type:OBTENER_OBRAS_SECTORES_MAPA, 
        payload: respuesta.data
    }) },1000);

    
}

