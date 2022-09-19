import React , {Fragment, useState, useEffect} from 'react'
//redux
import {connect} from 'react-redux'
import {obtenerReportes, resetReportes} from 'actions/reportesActions'
//funciones
import {PromArray} from 'helpers/compFunciones'
//graficos
import GeoChart from 'components/graficos/geochart'


const Afectaciones = ({reportes, modal2, guardarModal2, mapa}) =>{
    const [stateAfectaciones, guardarStateAfectaciones] = useState({
        equipos:0,
        afectaciones:0,
        horasSinServicio:0
    })
    const data =[
        {
            name: "Afectaciones",
            data: [60.0000, 29, 33, 36, 32, 32, 33, 33, 33, 33, 33, 44], 
          },
        {
            name: "Horas sin servicio",
            data: [28, 39, 43, 16, 22, 52, 73, 83, 13, 33, 33, 44],
          },
          
    ]

    const xAxis = [28, 39, 43, 16, 22, 52, 73, 83, 13, 33, 33, 44]
    useEffect(() => {
        guardarStateAfectaciones({
            equipos:PromArray(reportes, "equipos_danados", "sum"),
            afectaciones:PromArray(reportes, "cantidad", "sum"),
            horasSinServicio:PromArray(reportes, "horas_sin_servicio", "prm"),
        })
    }, [reportes])
    
    
    return(
        <Fragment>
            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Afectaciones
                            <span className="icon mr-2 icon-dash blue">
                                <i className="fa-solid fa-arrow-up-from-water-pump" aria-hidden="true"></i>
                            </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateAfectaciones.afectaciones}</p>
                    <p className='is-size-7 has-text-grey-light'>Cantidad</p>
                </div>
            </div>

            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Equipos dañados
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>

                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateAfectaciones.equipos}</p>
                    <p className='is-size-7 has-text-grey-light'>Cantidad</p>
                </div>
            </div>
            <div className="column is-12">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Horas sin servicio
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>

                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateAfectaciones.horasSinServicio}</p>
                    <p className='is-size-7 has-text-grey-light'>Promedio</p>
                </div>
            </div>
            {/*<div className="column is-12">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Horas sin servicio
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>

                   <XY
                        showX={true}
                        legend={true}
                        height={300}
                        showY={true}
                        markersSize={4}
                        stroke={3.5}
                        data={data}
                        color={['#03c9d7', '#fb9678']}
                        xAxis={xAxis}
                    />
                    <p className='is-size-7 has-text-grey-light'>Promedio</p>
                </div>
            </div>*/}

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

export default connect (mapStateToProps, {obtenerReportes, resetReportes}) (Afectaciones)