import React, {useState, useEffect, Fragment} from "react"
//component
import HeroInf from 'components/layout/HeroInf'
import HeroSeleccion from 'components/layout/HeroSeleccion'
import Produccion from "./produccion"
import Pozos from "./pozos";
import Fugas from "./fugas";
import Tomas from "./tomas";
import Brippas from "./brippas";
import Afectaciones from "./afectaciones";
import Abastecimiento from "./abastecimiento";
import PozosAnexar from './anexarPozos'
import PozosBrippas from './anexarBrippas'
import SistemasAnexar from './anexarSistemas'

//router
import {withRouter} from 'react-router-dom'
//redux
import {connect} from 'react-redux'
import {agregarMunicipios, agregarParroquias} from "actions/ubicacionActions"
//funciones
import {isEmptyObject, extraerTabla} from "helpers/funciones"
//axios
import axios from 'axios'
import {rutaAxios} from 'variablesGoblales'
//moment
import moment from 'moment'
//alerta
import alerta from 'components/alerta/Alerta'


let date = new Date()

const Registro = ({match, LoaderTimer, estados, usuario, agregarMunicipios, municipios, agregarParroquias, parroquias}) =>{
  const [hidrologica, guardarHidrologica] = useState(usuario.hidrologica)
  const [fecha, guardarFecha] =useState(moment().format("YYYY-MM-DD"))
  const [estado, guardarEstado] = useState({
    estado:"",
    id:0
  })
  const [municipio, guardarMunicipio] = useState({
    municipio:"",
    id:0
  })
  const [parroquia, guardarParroquia] = useState({
    parroquia:"",
    id:0
  })

  useEffect(() => {
    LoaderTimer(false)
  }, [])

  const submitReporte = async (array) => { 
    const tipoReporte = extraerTabla(match.params.tipo)
    const valores = tipoReporte>=7?[...array]:[hidrologica, fecha, ...array]
    const body = {
      tipo_formulario:tipoReporte,
      id_estado:estado.id,
      valores_insertar:valores
    }
    const respuesta = await axios.post(`${rutaAxios}seguimiento/public/api/formularios/reportes`, {body})
    alerta.open({type:respuesta.headers.cod, message:respuesta.headers.information})
  }

  const handleChangeEstado = async (e) => {
    const a = parseInt(e.target.value)
    const id = document.getElementById(a)
    const name= e.target.name
    if (id) {
      switch (name) {
        case "estado":
          guardarEstado({
            estado:id.childNodes[0].data,
            id:a
          })
          agregarMunicipios(a)
          break;
        case "municipio":
          guardarMunicipio({
            municipio:id.childNodes[0].data,
            id:a
          })
          agregarParroquias(a)
          break;
        case "parroquia":
          guardarParroquia({
            parroquia:id.childNodes[0].data,
            id:a
          })
          break;
      
        default:
          break;
      }
      
        
    } 
  }
  
  const RenderR = ({...rest}) =>{
    if (match.params) {
      let render = ""
      switch (match.params.tipo) {
        case 'produccion':
          render =<Produccion {...rest}/>
          break;
        case 'pozo':
          render =<Pozos {...rest}/>
          break;
        case 'fugas':
          render =<Fugas {...rest} municipio={municipio} parroquia={parroquia}/>
          break;
        case 'tomas':
          render =<Tomas {...rest} municipio={municipio} parroquia={parroquia}/>
          break;
        case 'brippas':
          render =<Brippas {...rest}/>
          break;
        case 'afectaciones':
          render =<Afectaciones {...rest}/>
          break;
        case 'abastecimiento':
          render =<Abastecimiento {...rest}/>
          break;
        case 'pozos':
          render =<PozosAnexar {...rest} municipio={municipio} parroquia={parroquia}/>
          break;
        case 'brippasG':
          render =<PozosBrippas {...rest} municipio={municipio} parroquia={parroquia}/>
          break;
        case 'sistemas':
          render =<SistemasAnexar {...rest} municipio={municipio} parroquia={parroquia}/>
          break;
      
        default:
          break;
      }
      return render
    }
  }

  
  return (
    <div className="columns is-multiline">
      <div className="column is-12">
        <div className="box">
          <HeroInf
            country = {estado.id=== 0 ?null:estado.estado}
          />
        </div>
      </div>
      <div className={`column ${match.params.tipo === "fugas" || match.params.tipo === "tomas" || match.params.tipo === "pozos" || match.params.tipo === "brippasG"?"is-4":"is-12"}`}>
          <div className="select is-rounded is-small">
              <select onChange={handleChangeEstado} name="estado">
                  <option value={0} id={0}>--Seleccione un estado--</option>
                  {estados && isEmptyObject(fecha)!==true?
                      estados.map((u, index)=>(
                          <option value={u.id_estado} key={index} id={u.id_estado}>{u.estado}</option> 
                      ))
                  :null}
              </select>
          </div>
      </div>
      { match.params.tipo === "fugas" || match.params.tipo === "tomas" || match.params.tipo === "pozos" || match.params.tipo === "brippasG"?
        <Fragment>
          <div className="column is-4">
              <div className="select is-rounded is-small">
                  <select onChange={handleChangeEstado} name="municipio">
                      <option value={0} id={0}>--Seleccione un estado--</option>
                      {
                          municipios.map((u, index)=>(
                              <option value={u.id_municipio} key={u.id_municipio} id={u.id_municipio}>{u.municipio}</option> 
                          ))
                      }
                  </select>
              </div>
          </div>
          <div className="column is-4">
              <div className="select is-rounded is-small">
                  <select onChange={handleChangeEstado} name="parroquia">
                      <option value={0} id={0}>--Seleccione un estado--</option>
                      {
                          parroquias.map((u, index)=>(
                              <option value={u.id_parroquia} key={u.id_parroquia} id={u.id_parroquia}>{u.parroquia}</option> 
                          ))
                      }
                  </select>
              </div>
          </div>
        </Fragment>
      :null }
      <div className="column is-12">
        <div className="columns">{
          estado.id!==0?
            <div className="column is-12" id='registro'>
              <RenderR
              match={match}
              fecha={fecha}
              estado={estado}
              submitReporte={submitReporte}
              />
            </div>
          :
          <div className="column is-12">
            <div className="box">
              <HeroSeleccion
                text="Seleccione un estado"
              />
            </div>
          </div>
          }
            
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  estados:state.ubicacion.estados,
  municipios:state.ubicacion.municipios,
  parroquias:state.ubicacion.parroquias,
  usuario:state.usuario.usuarios
});

export default withRouter(connect(mapStateToProps ,{agregarMunicipios, agregarParroquias})(Registro))