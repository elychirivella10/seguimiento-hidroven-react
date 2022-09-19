import React, {useState} from 'react'

//actions
import {obtenerProyectosPreview} from '../../actions/reportesActions'

//redux
import {connect} from 'react-redux'

const Busqueda = ({obtenerProyectosPreview, guardarPagina, pagina}) => {
    const [busqueda, guardarBusqueda] = useState({
        busqueda:"busqueda",
        id:""
    })
    
    const handleChange = (e) =>{
        
        let busquedaSaneada= e.target.value 
        if (busquedaSaneada[0] === "#") {
            busquedaSaneada = busquedaSaneada.split("#")
            busquedaSaneada= '%23'+busquedaSaneada[1]
            
        }
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:busquedaSaneada
        })
    }

    const handleSubmit = async(e) => {
        
        if (busqueda.id !== "") {
            const filtroProyectos = await obtenerProyectosPreview(1, busqueda, pagina.tipo)

            if (filtroProyectos[2] === true) {
                guardarPagina({
                    ...pagina,
                    ["cantidadPagina"]:filtroProyectos[0],
                    ["cantidadIncidencias"]:filtroProyectos[1], 
                    ['tipo']:pagina.tipo
                })
                
            }
        }
        
    }

    const handleBottom = async(e) => {
        e.persist()
        if (e.keyCode === 13 && busqueda.id !=="") {
            if (busqueda.id !== "") {
                const filtroProyectos = await obtenerProyectosPreview(1, busqueda)
    
                if (filtroProyectos[2] === true) {
                    guardarPagina({
                        ...pagina,
                        ["cantidadPagina"]:filtroProyectos[0],
                        ["cantidadIncidencias"]:filtroProyectos[1]
                    })
                    
                }
            }
        }
    }

    return (
        <div className="field" onKeyDown={(e) => handleBottom(e)}>
            <div className="control has-icons-left mb-3">
                <input className="input is-rounded" type="text" name = "id" onChange = {handleChange}/>
                <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                </span>
            </div>
            <button class="button is-fullwidth is-primary is-size-6" onClick = {handleSubmit} type="submit" >Consultar</button>
        </div>
    )
}

export default connect (null,{obtenerProyectosPreview})(Busqueda)