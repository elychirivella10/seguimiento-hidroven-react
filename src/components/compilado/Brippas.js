import React , {Fragment, useState, useEffect} from 'react'
//funciones
import {PromArray} from 'helpers/compFunciones'
import {filterValues} from 'helpers/filterFunciones'
//redux
import {connect} from 'react-redux'
//graficos
import GeoChart from 'components/graficos/geochart'

const Brippas = ({reportes, brippas, modal2, guardarModal2, mapa}) =>{
    const [stateBrippas, guardarStateBrippas] = useState({
        total:0,
        integrantes:0,
        dotadas:0,
        formadas:0,
        avLevantadasAP:0,
        avCorregidasAP:0,
        avLevantadasAS:0,
        avCorregidasAS:0,
        lps:0,
    })

    useEffect(() => {
        let dotadas = filterValues(brippas, "dotacion", 1)
        let formadas = filterValues(brippas, "formacion", 1)
        console.log(PromArray(brippas, "cantidad_integrantes", "sum"))
        guardarStateBrippas({
           ...stateBrippas,
           total:brippas.length,
           integrantes:PromArray(brippas, "cantidad_integrantes", "sum"),
           dotadas:dotadas.length,
           formadas:formadas.length,
           avLevantadasAP:PromArray(reportes, "averias_levantadas_ap", "sum"),
           avCorregidasAP:PromArray(reportes, "averias_corregidas_ap", "sum"),
           avLevantadasAS:PromArray(reportes, "averias_levantadas_as", "sum"),
           avCorregidasAS:PromArray(reportes, "averias_corregidas_as", "sum"),
           lps:PromArray(reportes, "lps_recuperados", "sum"),
        })
    }, [reportes, brippas])
    

    return(
        <Fragment>
            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Total
                            <span className="icon mr-2 icon-dash blue">
                                <i className="fa-solid fa-arrow-up-from-water-pump" aria-hidden="true"></i>
                            </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateBrippas.total}</p>
                    <p className='is-size-7 has-text-grey-light'>Cantidad</p>
                </div>
            </div>

            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Integrantes
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>

                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateBrippas.integrantes}</p>
                    <p className='is-size-7 has-text-grey-light'>Cantidad</p>
                </div>
            </div>

            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Dotadas
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateBrippas.dotadas}</p>
                    <p className='is-size-7 has-text-grey-light'>Cantidad</p>
                </div>
            </div>

            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Formadas
                        <span className="icon mr-2 icon-dash blue">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateBrippas.formadas}</p>
                    <p className='is-size-7 has-text-grey-light'>Cantidad</p>
                </div>
            </div>
            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>AV levantadas AP
                        <span className="icon mr-2 icon-dash blue">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateBrippas.avLevantadasAP}</p>
                    <p className='is-size-7 has-text-grey-light'>Cantidad</p>
                </div>
            </div>
            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>AV corregidas AP
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateBrippas.avCorregidasAP}</p>
                    <p className='is-size-7 has-text-grey-light'>Cantidad</p>
                </div>
            </div>
            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>AV levantadas AS
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateBrippas.avLevantadasAS}</p>
                    <p className='is-size-7 has-text-grey-light'>Cantidad</p>
                </div>
            </div>
            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>AV corregidas AS
                        <span className="icon mr-2 icon-dash blue">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateBrippas.avCorregidasAS}</p>
                    <p className='is-size-7 has-text-grey-light'>Cantidad</p>
                </div>
            </div>
            <div className="column is-12">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Lps recuperados
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateBrippas.lps}</p>
                    <p className='is-size-7 has-text-grey-light'>Cantidad</p>
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
    brippas:state.brippas.brippas
})

export default connect(mapStateToProps, null)(Brippas)