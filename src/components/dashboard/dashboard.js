import React, {Fragment, useEffect, useState} from 'react'

import 'bulma-list/css/bulma-list.css'

//funcion
/*import {stringSlice, mediaQueries} from 'helpers/funciones'


//formato de numero
import {formatNumber} from 'helpers/funciones'
import {colorLoop} from 'helpers/funciones'*/

import XY from '../graficos/xy'
import Bar from '../graficos/bar'
import Area from '../graficos/area'
import Donut from '../graficos/donut'
import Basic from 'components/graficos/basic'

import '@fortawesome/fontawesome-free/css/all.css'

//router dom
import {withRouter} from 'react-router-dom'

//redux
import {connect} from 'react-redux'
import {graficosActions} from '../../actions/graficosActions'
import {resetGrafico} from '../../actions/graficosActions'
import {obtenerReportes, resetReportes} from '../../actions/reportesActions'

const Dashboard = ({LoaderTimer, loader, graficosActions, graficos, resetGrafico, obtenerReportes, resetReportes, reportes}) =>{
    useEffect(() => {
        LoaderTimer(true)
        async function  reportes(){
            await resetGrafico()
            await resetReportes()
            await obtenerReportes("produccion", {inicio: '2022-01-01', final: '2022-012-31'}, null,"OBTENER_REPORTES_DASHBOARD")
            await obtenerReportes("abastecimiento", {inicio: '2022-01-01', final: '2022-012-31'}, null, "OBTENER_REPORTES_DASHBOARD")
            await graficosActions("fugas")
            await graficosActions("tomas_ilegales")
            await graficosActions("lps_recuperados")
            await graficosActions("pozos_operativos")
            await LoaderTimer(false)
            }
        reportes()

        return function clean () {
            resetGrafico()
            resetReportes()
        }   
    }, [])
    return (
        <Fragment>
            {loader ===false?
                <div className="columns is-multiline">
                    <div className="column is-4 ">
                        <Basic
                            title = "Operatividad"
                            fondo ={true}
                            reportes ={reportes.length>1?reportes[1]:[]}
                            llave="porcentaje_operatividad"
                            tipo = "prm"
                            nomenclatura="porcentaje"
                        />
                    </div>
                    <div className="column is-4 ">
                        <Basic
                            title = "Produccion"
                            icon = "blue"
                            reportes ={reportes.length>0?reportes[0]:[]}
                            llave="metros_cubicos"
                            tipo = "sum"
                            nomenclatura="m3"
                        />
                    </div>
                    <div className="column is-4">
                        <Basic
                            title = "Abastecimiento"
                            icon = "orange"
                            reportes ={reportes.length>1?reportes[1]:[]}
                            llave="porcentaje_abastecimiento"
                            tipo = "prm"
                            nomenclatura="porcentaje"
                        />
                    </div>
                    <div className="column is-8">
                        <div className="box height">
                            
                            <div className='mt-2'>

                                <h2 className='has-text-weight-medium'>Fugas</h2>
                            </div>
                            <XY
                            showX={true}
                            legend={true}
                            height={300}
                            showY={true}
                            markersSize={4}
                            stroke={3.5}
                            data={graficos.length>0?graficos[0]:[]}
                            color={['#03c9d7', '#fb9678']}
                            />
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="columns is-multiline">
                            <div className="column is-12">
                                <div className="box height pb-0 pl-0 pr-0">
                                    <div className='mt-2 padding-graf-dash'>
                                        <h2 className='has-text-weight-medium '>Tomas no autorizadas</h2>
                                    </div>
                                    <Area
                                        showX={false}
                                        showY={false}
                                        markersSize={0}
                                        stroke={2}
                                        height={120}
                                        data={graficos.length>1?graficos[1]:[]}
                                        color={['#fb9678']}
                                    />
                                </div>      
                            </div>
                            <div className="column is-12">
                                <div className="box height is-primary">
                                    <div className='mt-2'>
                                        <h2 className='has-text-weight-medium has-text-white'>Lps recuperados</h2>
                                    </div>
                                    <Bar
                                    height={120}  
                                    data={graficos.length>2?graficos[2]:[]}
                                    />
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="column is-5">
                        <div className="box height">
                            <div className='mt-2'>
                                <h2 className='has-text-weight-medium'>Pozos rehabilitados</h2>
                            </div>
                            <Donut
                                height={300}
                                data={graficos.length>3?graficos[3]:[]}
                            />
                        </div>
                    </div>
                    <div className="column is-7">
                        <div className="box height">
                            <div className='mt-2'>
                                <h2 className='has-text-weight-medium'>Ultimos reportes</h2>
                            </div>
                            <div className="list has-hidden-images">
                            <div className="list-item">
                                <div className="list-item-image">
                                <figure className="image is-64x64">
                                    <img className="is-rounded" src="https://via.placeholder.com/128x128.png?text=Image"/>
                                </figure>
                                </div>

                                <div className="list-item-content">
                                <div className="list-item-title">List item</div>
                                <div className="list-item-description">List item description</div>
                                </div>
                            </div>

                            <div className="list-item">
                                <div className="list-item-image">
                                <figure className="image is-64x64">
                                    <img className="is-rounded" src="https://via.placeholder.com/128x128.png?text=Image"/>
                                </figure>
                                </div>

                                <div className="list-item-content">
                                <div className="list-item-title">List item</div>
                                <div className="list-item-description">List item description</div>
                                </div>
                            </div>

                            <div className="list-item">
                                <div className="list-item-image">
                                <figure className="image is-64x64">
                                    <img className="is-rounded" src="https://via.placeholder.com/128x128.png?text=Image"/>
                                </figure>
                                </div>

                                <div className="list-item-content">
                                <div className="list-item-title">List item</div>
                                <div className="list-item-description">List item description</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            :null}
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
	loader:state.loader.loader,
    graficos:state.graficosReducer.graficos,
    reportes:state.reportesReducer.reportes
});

export default withRouter(connect (mapStateToProps, {graficosActions, resetGrafico, obtenerReportes, resetReportes})(Dashboard))