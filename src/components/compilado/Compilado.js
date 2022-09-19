import React, {useEffect, useState} from "react"
//variables
import {tipos , mapTipos} from 'variablesGoblales'
//router
import {withRouter} from 'react-router-dom'
//css checkandradio
import 'bulma-checkradio/dist/css/bulma-checkradio.min.css'
//component
import Breadcrumb from 'components/layout/breadcrumb'
import HeroInf from 'components/layout/HeroInf'
import Produccion from "components/compilado/Produccion"
import Calendar from "components/bulma/Calendar"
import Pozos from "./Pozos"
import Fugas from "./Fugas"
import Tomas from "./Tomas"
import Brippas from "./Brippas"
import AbastecimientoOperatividad from "./AbastecimientoOperatividad"
import Afectaciones from "./Afectaciones"
//Redux
import {connect} from 'react-redux'
import {obtenerPozos, resetPozos} from "actions/pozosActions"
import {obtenerReportes, resetReportes} from "actions/reportesActions"
import {obtenerBrippas, resetBrippas} from 'actions/brippasActions'
import { resetFecha } from "actions/fechaActions"
//funciones
import {isEmptyObject, mapState} from "helpers/funciones"
//alerta
import alerta from 'components/alerta/Alerta'




const Compilado = ({match, reportes, fecha, LoaderTimer, obtenerReportes, resetReportes, obtenerPozos, resetPozos, obtenerBrippas, ubicacion, resetBrippas}) =>{ 
    const [estado, guardarEstado] = useState({
        estado:"",
        id:0
    })
    const [renderComponent , guardarRenderComponent] = useState(null)
    const [modal, guardarModal] = useState(null)
    const [modal2, guardarModal2] = useState(null)
    const [mapa, guardarMapa] = useState(null)
    const [selectMapa, guardarSelectMapa] = useState({
        condicion:null,
        value:null
    })

    useEffect(() => {
        async function  loader(){
            //await obtenerReportes(match.params.tipo)
            await LoaderTimer(false)
            resetReportes()
        }

        async function  reportes(){
            if (isEmptyObject(fecha)!==true) {
                const reportes = await obtenerReportes(match.params.tipo, fecha, estado.id!==0?estado.id:null)
                if (reportes) {
                    let component = null
                    switch (match.params.tipo) {
                        case 'pozo':
                            component = await obtenerPozos(estado.id)
                            break;
                        case 'brippas':
                            component = await obtenerBrippas()
                            break;
                            
                            default:
                            component = true
                                break;
                            }
                            if (component && reportes) {
                                console.log(reportes)
                                guardarRenderComponent(true)
                            }
                }
            }
        }

        reportes()
        loader()

        return function clean () {
            switch (match.params.tipo) {
                case "pozo":
                    resetPozos()
                    break;
                case "brippas":
                    resetBrippas()
                    break;
                default:
                    break;
            }
            resetReportes()
        }

    }, [fecha, match.params.tipo, estado.id])
    
    const RenderR = ({...rest}) =>{
        if (match && isEmptyObject(fecha)!==true && renderComponent === true) {
          let render = ""
          switch (match.params.tipo) {
            case 'produccion':
                render =<Produccion {...rest} />
                break;
            case 'pozo':
                render =<Pozos {...rest}/>
                break;
            case 'fugas':
                render =<Fugas {...rest}/>
                break;
            case 'tomas':
              render =<Tomas {...rest}/>
              break;
            case 'brippas':
              render =<Brippas {...rest}/>
              break;
            case 'afectaciones':
              render =<Afectaciones {...rest}/>
              break;
            case 'abastecimiento':
              render =<AbastecimientoOperatividad {...rest}/>
              break;
          
            default:
              break;
          }
          return render
        }
        return null
      }
    
    return(
        <div className="columns is-multiline">
            
            <div className="column is-12">
                <div className="box">
                    <Breadcrumb 
                    />
                </div>
            </div>

            <div className="column is-12">
                <div className="box pt-0 pb-0 pr-0 pl-0 ">
                    <HeroInf
                        value={{reportes:reportes.length}}
                        country = {estado.id=== 0 ?null:estado.estado}
                        footer={true}
                    />
                </div>
            </div>

            <div className="is-fixed right-0 top-10">
                <div className="box not-radius-right is-primary bold">
                    <span className="icon is-pointer" onClick={()=>(
                        guardarModal(true)
                    )} >
                        <i className="fa-solid fa-plus" aria-hidden="true"></i>
                    </span>
                </div>
            </div>

            <div className="column is-6">
                <Calendar
                />
            </div>

            <div className="column is-6">
                <div className="select is-rounded">
                    <select onChange={(e)=>{
                        const a = e.target.value
                        const id = document.getElementById(a)
                        if (id) {
                            guardarEstado({
                                estado:id.childNodes[0].data,
                                id:parseInt(e.target.value)
                            })
                        }   
                    }}>
                        <option value={0} id={0}>general</option>
                        {ubicacion && isEmptyObject(fecha)!==true?
                            ubicacion.map(u=>(
                                <option value={u.id_estado} id={u.id_estado} key={u.id_estado}>{u.estado}</option> 
                            ))
                        :null}
                    </select>
                </div>
            </div>

            {
                modal?
                    <div className="modal is-active">
                        <div className="modal-background"></div>
                        <div className="modal-content width-auto">
                            <div class="card">
                                <header class="card-header">
                                    <p class="card-header-title">
                                        Seleccione una categoria para crear el mapa
                                    </p>
                                </header>
                                <div class="card-content">
                                    <div className="select is-rounded">
                                        <select id="select" onChange={(e)=>{
                                            let o = document.getElementById("select")
                                            o =[...o.childNodes]
                                            o.map((s)=>{
                                                console.log()
                                                if (s.value == e.target.value) {
                                                    guardarSelectMapa({
                                                        condicion:s.id,
                                                        value:s.value
                                                    })
                                                }
                                            })
                                            
                                        }}>
                                            <option value={0} id={0}>general</option>
                                            {ubicacion && isEmptyObject(fecha)!==true?
                                                mapTipos[tipos[match.params.tipo]].map(u=>(
                                                    <option value={u.value} id={u.condition}>{u.nombre}</option> 
                                                ))
                                            :null}
                                        </select>
                                    </div>
                                    <div className="column is-12">
                                        <div className="field is-grouped is-grouped-right are-small">
                                            <p className="control">
                                                <a className="button is-primary is-small" onClick={()=>{
                                                    if (selectMapa.value == null || selectMapa.value == 0) {
                                                        alerta.open({type:"error", message:"Seleccione una opcion"})
                                                    } else{
                                                        guardarMapa(mapState(reportes, selectMapa.value, selectMapa.condicion))
                                                        guardarModal(false)
                                                        guardarModal2(true)
                                                    }
                                                    
                                                }}>
                                                    Submit
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="modal-close is-large has-text-orange has-background-grey" aria-label="close" onClick={()=>(
                            guardarModal(false)
                        )}></button>
                    </div>
                :null
            }
            
            <div className="column">
                <div className="columns is-multiline">
                    <RenderR
                        match = {match}
                        fecha = {fecha}
                        reportes = {reportes}
                        estado={estado}
                        modal2={modal2}
                        guardarModal2={guardarModal2}
                        mapa={mapa}
                        guardarMapa={guardarSelectMapa}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
	reportes:state.reportesReducer.reportes,
    fecha:state.fecha.fecha,
    ubicacion:state.ubicacion.estados
})

export default withRouter(connect(mapStateToProps, {obtenerReportes, resetReportes, obtenerPozos, resetPozos, resetFecha, obtenerBrippas, resetBrippas})(Compilado))