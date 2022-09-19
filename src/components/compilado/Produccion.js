import React , {Fragment, useState, useEffect} from 'react'
//redux
import {connect} from 'react-redux'
import {obtenerReportes, resetReportes} from 'actions/reportesActions'
//funciones
import {PromArray, mayorAndMenor} from 'helpers/compFunciones'
//graficos
import GeoChart from 'components/graficos/geochart'

const Produccion = ({reportes, modal2, guardarModal2, mapa}) =>{
    const [stateProduccion, guardarStateProduccion] = useState({
        produccion:0,
        promedio:0,
        alto:0,
        bajo:0
    })
    useEffect(() => {
        guardarStateProduccion({
            produccion:PromArray(reportes, "metros_cubicos", "sum"),
            promedio:Math.round(PromArray(reportes, "metros_cubicos", "prm")),
            alto:mayorAndMenor(reportes, "metros_cubicos", "alto"),
            bajo:mayorAndMenor(reportes, "metros_cubicos", "bajo"),
        })
    }, [reportes])
    
    return(
        <Fragment>
            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Produccion
                            <span className="icon mr-2 icon-dash blue">
                                <i className="fa-solid fa-arrow-up-from-water-pump" aria-hidden="true"></i>
                            </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateProduccion.produccion}</p>
                    <p className='is-size-7 has-text-grey-light'>m3</p>
                </div>
            </div>

            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Promedio
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>

                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateProduccion.promedio}</p>
                    <p className='is-size-7 has-text-grey-light'>promedio</p>
                </div>
            </div>

            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Produccion mas alta
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateProduccion.alto}</p>
                    <p className='is-size-7 has-text-grey-light'>m3</p>
                </div>
            </div>

            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Produccion mas baja
                        <span className="icon mr-2 icon-dash blue">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateProduccion.bajo}</p>
                    <p className='is-size-7 has-text-grey-light'>m3</p>
                </div>
            </div>

            {
                modal2?
                    <div className="modal is-active is-justify-content-start">
                        <div className="modal-background"></div>
                        <div className="modal-content">
                            <GeoChart
                                datos ={mapa}
                            />
                        </div>
                        <button className="modal-close is-large has-text-orange has-background-grey" aria-label="close" onClick={()=>(
                            guardarModal2(false)
                        )}></button>
                    </div>
                :null
            }
        </Fragment>
    )
}

export default connect (null,{obtenerReportes, resetReportes}) (Produccion)