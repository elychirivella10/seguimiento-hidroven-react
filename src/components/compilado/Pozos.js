import React , {Fragment, useState, useEffect} from 'react'
//funciones
import {PromArray} from 'helpers/compFunciones'
import {filterValues} from 'helpers/filterFunciones'
//graficos
import GeoChart from 'components/graficos/geochart'
//redux
import {connect} from 'react-redux'
//axios
import axios from "axios";
import {rutaAxios, tipos} from "variablesGoblales";

const Pozos = ({reportes, pozos, estado, fecha, match, modal2, guardarModal2, mapa, guardarMapa}) =>{
    const [statePozos, guardarStatePozos] = useState({
        total:0,
        inoperativos:0,
        operativos:0,
        lps:0,
        rehabilitados:0,
    })

    useEffect(() => {
        let operativos = filterValues(pozos, "operatividad", 1)
        let inoperativos = filterValues(pozos, "operatividad", 0)
       guardarStatePozos({
           ...statePozos,
           total:pozos.length,
           inoperativos:inoperativos.length,
           operativos:operativos.length,
           lps:PromArray(reportes, "lps", "sum"),
           rehabilitados:reportes.length
       })
    }, [reportes, pozos])
    

    return(
        <Fragment>
            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Total pozos
                            <span className="icon mr-2 icon-dash blue">
                                <i className="fa-solid fa-arrow-up-from-water-pump" aria-hidden="true"></i>
                            </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{statePozos.total}</p>
                    <p className='is-size-7 has-text-grey-light'>m3</p>
                </div>
            </div>

            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Pozos operativos
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>

                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{statePozos.operativos}</p>
                    <p className='is-size-7 has-text-grey-light'>m3</p>
                </div>
            </div>

            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Pozos inoperativos
                        <span className="icon mr-2 icon-dash orange">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{statePozos.inoperativos}</p>
                    <p className='is-size-7 has-text-grey-light'>m3</p>
                </div>
            </div>

            <div className="column is-6">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Lps recuperados
                        <span className="icon mr-2 icon-dash blue">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{statePozos.lps}</p>
                    <p className='is-size-7 has-text-grey-light'>m3</p>
                </div>
            </div>
            <div className="column is-12">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Pozos rehabilitados
                        <span className="icon mr-2 icon-dash blue">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{statePozos.rehabilitados}</p>
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
                        <button className="modal-close is-large has-text-orange has-background-grey" aria-label="close" onClick={()=>{
                            guardarModal2(false)
                            guardarMapa({
                                condicion:null,
                                value:null
                            })
                        }}></button>
                    </div>
                :null
            }
        </Fragment>
    )
}
const mapStateToProps = state => ({
    pozos:state.pozos.pozos
})

export default connect(mapStateToProps, null)(Pozos)