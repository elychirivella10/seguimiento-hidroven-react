import React, {useState, Fragment, useEffect} from "react"
//componentes
import Breadcrumb from 'components/layout/breadcrumb'
import Pagination from "components/bulma/Pagination"
import CardCom from 'components/cards/Card'
//router
import {withRouter} from 'react-router-dom'
//Redux
import {connect} from 'react-redux'
import {obtenerReportesPreview, resetReportes} from 'actions/reportesActions'

const Reportes = ({obtenerReportesPreview, resetReportes, LoaderTimer, reportes, loader, match, estados}) =>{
  const [render, guardarRender] = useState(false)
  const [paginas, guardarPaginas] = useState(0)
  const [pagina, guardarPagina] = useState(1)
  const [estado, guardarEstado] = useState(null)
  useEffect(() => {
    LoaderTimer(true)
    async function  reportes(){
      const render = await obtenerReportesPreview(pagina, estado, match.params.tipo)
      await LoaderTimer(false)
      guardarRender(render.render)
      guardarPaginas(render.paginas)
		}

    setTimeout(() => {
      reportes()
    }, 1000);

    

    }, [match.params.tipo, pagina, estado]);
 
  return (
    <div className="columns is-multiline">
      <div className="column is-12">
        <div className="box">
          <Breadcrumb
          />
        </div>
      </div>

      <div className="column is-12">
          <div className="select is-rounded">
              <select onChange={(e)=>(
                guardarEstado(e.target.value)
              )}>
                  <option>Seleccione un estado</option>
                  {estados.map(estado=>(
                    <option value={estado.id_estado}>{estado.estado}</option>
                  ))}
              </select>
          </div>
      </div>
      
      <div className="column is-12">
        <div className="columns">
          <div className="column is-12" id='reportes'>
            <div className="columns is-multiline">
                {
                  render ===true && loader === false ?
                    reportes.map(reporte=>(
                      <div className="column is-3" key={reporte.id}>
                        <CardCom
                          id={reporte.id}
                          read={true}
                          contenidos= {[
                            {
                              cabecera:reporte.ubicacion_reporte,
                              contenido:{
                              titulo:"Nombre",
                              contenido:reporte.estado
                              },
                              fecha:reporte.fecha
                            }
                          ]}
                        />
                      </div>
                    ))
                  :null
                }
            </div>
          </div>
        </div>
      </div>
      {paginas>1?
        <div className="column is-12">
          <Pagination pagina={pagina} paginas={paginas} guardarPagina={guardarPagina}/>
        </div>
      :null}
    </div>
  )
}

const mapStateToProps = state => ({
	reportes:state.reportesReducer.reportes,
  loader:state.loader.loader,
  estados:state.ubicacion.estados
})

export default withRouter(connect(mapStateToProps, {obtenerReportesPreview, resetReportes}) (Reportes)) 