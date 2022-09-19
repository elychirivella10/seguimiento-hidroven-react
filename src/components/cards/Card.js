import React, {Fragment} from 'react'
//react-router-dom
import {Link} from 'react-router-dom'
//funciones
import {capitalizarPrimeraLetra} from 'helpers/funciones'


const CardCom  = ({contenidos, read, id}) =>{
    return (
        <Link to={`/reportes/individual/${id}`}>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        {contenidos?contenidos.map((contenido, index)=>{
                            let cabecera = contenido.cabecera.toLowerCase()
                            return(
                        <Fragment key={index}>
                            <span className={`icon is-pulled-right is-small ${read===true?"has-text-danger":""}`} >
                                <i className="fa-solid fa-circle" aria-hidden="true"></i>
                            </span>
                            <p className="is-size-7 mb-0">{capitalizarPrimeraLetra(cabecera)}</p>
                            <p> <strong>{contenido.contenido.contenido}</strong> </p>
                            <p className='is-size-7 is-inline-block date'>{contenido.fecha}</p>
                        </Fragment>
                        )}):null}
                    </div>
                </div>
            </div>
        </Link>
    )
}


export default CardCom 