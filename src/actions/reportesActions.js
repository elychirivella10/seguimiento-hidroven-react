import {OBTENER_REPORTES_PREVIEW, RESET_REPORTES, OBTENER_REPORTE, RESET_REPORTE} from './types'
//axios
import axios from 'axios'
import {rutaAxios, tipos} from '../variablesGoblales'
import alerta from 'components/alerta/Alerta'


export const obtenerReportesPreview = (pagina, estado = null, tipo)  => async dispatch => {
    let pagina_solicitada = 1
    if (pagina !== null || pagina !== "undefined") {
        pagina_solicitada= pagina
    }

    const respuesta = await axios.get(`${rutaAxios}seguimiento/public/api/reportes/paginador/${estado===null?0:estado}/${tipos[tipo]}/${pagina_solicitada}`)    

    {dispatch ({
        type:OBTENER_REPORTES_PREVIEW, 
        payload: respuesta.data.datos
    }) 
        alerta.open({type:"warning", message:'hola'})
        return {paginas:respuesta.data.paginas, render:true}

    }
    
}



export const obtenerReportes = (tipo, fecha, estado=null, type=null) => {

    if (estado==0) {
        estado = null
    }
    return async dispatch => {
        const respuesta = await axios.get(`${rutaAxios}seguimiento/public/api/reportes/fecha/${tipos[tipo]}/${fecha.inicio}/${fecha.final}${estado!==null?`/${estado}`:""}`)  
        {dispatch ({
            type:type!==null?type:OBTENER_REPORTES_PREVIEW, 
            payload: respuesta.data
        })}
    
        if (respuesta.status === 200) {
            return true
        }else{
            alerta.open({type:"warning", message:respuesta.headers.information})
            return false
        }
    };
  };

export const obtenerProyecto = (id_proyecto)  => dispatch => {
    const respuesta =  axios.get(`${rutaAxios}Mapa_soluiones/mapa_soluciones/public/api/proyectos/proyecto/${id_proyecto}`)

    setTimeout(function(){ dispatch ({
        type:OBTENER_REPORTE, 
        payload: respuesta.data[0]
    }) },1000);

    if (respuesta.data) {
        return true
    }

}



export const resetProyecto = (body) => async dispatch => {
    dispatch ({
        type:RESET_REPORTE
    }) 

    return true
}

export const resetReportes = (body) => async dispatch => {
    dispatch ({
        type:RESET_REPORTES
    }) 

    return true
}
