import {GRAFICO_ABAJO_IZQUIERDA, RESET_GRAFICO} from 'actions/types'


//importar axios
import axios from 'axios'

//
import {rutaAxios} from 'variablesGoblales'

export const graficosActions = (tabla, estado = null) => async dispatch => {
    let respuesta = null
    if (tabla === "pozos_operativos") {
        respuesta = await axios.get(`${rutaAxios}seguimiento/public/api/dashboard/${tabla}${estado!==null?`/${estado}`:""}`)
    }else{
        respuesta = await axios.get(`${rutaAxios}seguimiento/public/api/dashboard/${tabla}/2022-01-01/2022-12-31${estado!==null?`/${estado}`:""}`)
    }
    setTimeout(function(){ dispatch ({
        type:GRAFICO_ABAJO_IZQUIERDA, 
        payload: respuesta.data
    }) },1000);
};

export const resetGrafico = (body) => async dispatch => {
        dispatch ({
            type:RESET_GRAFICO
        }) 
};