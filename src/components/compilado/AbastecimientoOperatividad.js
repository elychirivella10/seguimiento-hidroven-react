import React , {Fragment, useState, useEffect} from 'react'
//redux
import {connect} from 'react-redux'
import {obtenerReportes, resetReportes} from 'actions/reportesActions'
//funciones
import {PromArray} from 'helpers/compFunciones'
//graficos
import GeoChart from 'components/graficos/geochart'

const AbastecimientoOperatiidad = ({reportes, modal2, guardarModal2, mapa}) =>{
    const [stateAB, guardarStateAB] = useState({
        abastecimiento:0,
        operatividad:0
    })
    useEffect(() => {
        guardarStateAB({
            abastecimiento:PromArray(reportes, "porcentaje_abastecimiento", "prm"),
            operatividad:PromArray(reportes, "porcentaje_operatividad", "prm"),
        })
    }, [reportes])
    

    return(
        <Fragment>
            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Abastecimiento
                            <span className="icon mr-2 icon-dash blue">
                                <i className="fa-solid fa-arrow-up-from-water-pump" aria-hidden="true"></i>
                            </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateAB.abastecimiento}%</p>
                    <p className='is-size-7 has-text-grey-light'>Porcentaje</p>
                </div>
            </div>

            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Operatividad
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>

                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateAB.operatividad}%</p>
                    <p className='is-size-7 has-text-grey-light'>Porcentaje</p>
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

const mapStateToProps = state => ({

})

export default connect (mapStateToProps, {obtenerReportes, resetReportes}) (AbastecimientoOperatiidad)