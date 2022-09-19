import React , {Fragment, useState, useEffect} from 'react'
//funciones
import {PromArray} from 'helpers/compFunciones'
//graficos
import GeoChart from 'components/graficos/geochart'

const Fugas = ({reportes, estado, fecha, match, modal2, guardarModal2, mapa}) =>{
    const [stateFugas, guardarStateFugas] = useState({
        reparadas:0,
        lps:0
    })
    


    useEffect(() => {
        

        guardarStateFugas({
            reparadas:PromArray(reportes, "cantidad_fugas_reparadas", "sum"),
            lps:PromArray(reportes, "lps_recuperados", "sum"),
        })
    }, [reportes])
    

    return(
        <Fragment>
            <div className="column is-12">
                <div className="box">
                    <div className='mt-2'>
                        <h2 className='has-text-weight-medium is-relative'>Fugas Reparadas
                        <span className="icon mr-2 icon-dash blue">
                            <i className="fa-solid fa-hand-holding-droplet" aria-hidden="true"></i>
                        </span>
                        </h2>
                    </div>
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateFugas.reparadas}</p>
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
                    <p className='mt-3 is-size-4 has-text-weight-semibold'>{stateFugas.lps}</p>
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


export default Fugas