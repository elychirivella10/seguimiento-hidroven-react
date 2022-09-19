import React, {Fragment, useState} from 'react'

import {tipoReporte, estatus, alerta} from './filtro'

//redux
import {connect} from 'react-redux'

//alertas
import Alerta from 'components/alerta/Alerta'

//actions
import {ObtenerIncidencias} from 'actions/incidenciasActions'

const filtroIncial = {
    busqueda:0,
    id:0 
}

const ModalFiltro = ({ObtenerIncidencias, guardarPagina, pagina}) => {
    const [filtro, guardarFiltro] = useState({
        busqueda:0,
        id:0
    })
        
    const handleChange = (e) => {
        guardarFiltro({
            ...filtro,
            [e.target.name]:e.target.value
        })
    }


    const onSubmit = async (e) => {
        e.preventDefault()
        const filtroIncidencia = await ObtenerIncidencias(1, filtro)
        
        if (filtroIncidencia[2] === true) {
            guardarPagina({
                ...pagina,
                ["cantidadPagina"]:filtroIncidencia[0],
                ["cantidadIncidencias"]:filtroIncidencia[1]
            })
            guardarFiltro({
                ...filtroIncial
            })
        }
    }


    let filters = ""
    switch (filtro.busqueda) {
        case "4":
            filters = estatus
            break;
        case "5":
            filters = alerta
            break;
        case "6":
            filters = tipoReporte
            break;

        default:
            break;
    }
    
    return(
        <Fragment>
            <div className="field">                   
                <p className="control">
                    <div class="select">
                        <select name = "busqueda" onChange = {handleChange}>
                            <option value = {0}>---Seleccione un filtro---</option>
                            <option value = {4}>Estatus</option>
                            <option value = {5}>Alerta</option>
                            <option value = {6}>Tipo de reporte</option> 
                        </select>
                    </div>
                </p>
            </div>
            {filtro.busqueda != 0 ?<div className="field">                   
                <p className="control">
                    <div class="select">
                        <select name = "id" onChange = {handleChange}>
                            <option value = {0}>---Seleccione una opcion---</option>
                            {filters !== ""?
                                filters.map(filter =>(
                                <option value = {filter.id}>{filter.nombre}</option>
                                ))
                            :null}
                        </select>
                    </div>
                </p>
            </div>:null}
            <button class="button is-fullwidth is-primary is-size-6 mb-3" onClick = {onSubmit}>Consultar</button>       
        </Fragment>
    )
}

export default connect(null, {ObtenerIncidencias})(ModalFiltro)