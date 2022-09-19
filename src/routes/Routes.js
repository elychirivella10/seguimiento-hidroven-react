import React, {Fragment, useEffect} from 'react'
//componentes creados para las rutas
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
//router-dom
import {BrowserRouter as Router,Switch} from 'react-router-dom'
//Redux
import {connect} from 'react-redux'
//componentes para las rutas y estaticos
import Login from '../components/login/login'
import Header from 'components/layout/Header'
import Dashboard from 'components/dashboard/dashboard'
import Menu from 'components/menu/menu'
import Registro from 'components/registro/Registro'
import Compilado from 'components/compilado/Compilado'
import Reportes from 'components/reportes/Reportes'
import Reporte from 'components/reportes/Reporte'
import Loader from 'components/loader/Loader'
//action
import {RenderLoader} from '../actions/loaderActions'
import {agregarEstados} from 'actions/ubicacionActions'

const Routes = ({RenderLoader, loader, renderHeader, usuario, agregarEstados, auth}) =>{
	
	useEffect(() => {
	  if (auth && usuario) {
		agregarEstados(usuario.id_hidrologica)
	  }
	}, [auth])
	

    return (
			<Router>	
				{loader === true ?
					<Loader/>
				:null}	
				{renderHeader===true?<Header/>:null}	
					
				<section className={`section ${renderHeader===true?"pt-5":"pt-0"} pr-0 pb-0 pl-0`}>
					<div className="container">
					<div className="columns is-multiline">
						{renderHeader?<div className="column is-menu-widescreen is-menu-desktop is-sticky top-1"><Menu usuario={usuario}/></div>:null}
						<div className="column">
							<div className="columns is-multiline">
								<div className="column is-12 pb-0">
									<Fragment>
										<Switch>
										
											<PublicRouter exact path="/login" component={Login} RenderLoader = {RenderLoader}/>
											<PrivateRouter exact path="/"  component = {Dashboard} RenderLoader = {RenderLoader} loader={loader}/>
											<PrivateRouter exact path="/registro/:tipo"  component = {Registro} RenderLoader = {RenderLoader}/>
											<PrivateRouter exact path="/compilado/:tipo"  component = {Compilado} RenderLoader = {RenderLoader}/>
											<PrivateRouter exact path="/reportes/individual/:id"  component = {Reporte} RenderLoader = {RenderLoader}/>
											<PrivateRouter exact path="/reportes/:tipo"  component = {Reportes} RenderLoader = {RenderLoader}/>
											{/*<PrivateRouter exact path="/" component={RedirectRouter} component2 = {Dashboard} RenderLoader = {RenderLoader} RenderLoaderRedirect = {RenderLoader}/>
											<PrivateRouter exact path="/proyectos" component={ListaProyectos} RenderLoader = {RenderLoader}/>
											<PrivateRouter exact path="/registro" component={Registro} RenderLoader = {RenderLoader}/>
											<PrivateRouter exact path="/mapa" component={mapaServicioEstatus} RenderLoader = {RenderLoader}/>
											<PrivateRouter exact path="/:token" component={RedirectRouter} component2 = {Dashboard} RenderLoader = {RenderLoader} RenderLoaderRedirect = {RenderLoader}/>
											<PrivateRouter exact path="/proyectos/:id" component={Proyecto} RenderLoader = {RenderLoader} />
											<PrivateRouter exact path="/actualizacion/:id" component={Actualizacion} RenderLoader = {RenderLoader} />*/}
							
										</Switch>
									</Fragment>
								</div>
							</div>
						</div>
						</div>
				
						
					</div>
				</section>	  	
						
				
			</Router>
    )
}

const mapStateToProps = state => ({
	auth:state.auth.auth,
	loader:state.loader.loader,
	renderHeader:state.renderHeader.renderHeader,
	usuario:state.usuario.usuarios,
	auth:state.auth.auth
})

export default connect(mapStateToProps, {RenderLoader, agregarEstados}) (Routes)