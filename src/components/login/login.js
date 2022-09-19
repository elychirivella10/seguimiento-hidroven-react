import React, {useState, Fragment, useEffect} from 'react';


//redux 
import {connect} from 'react-redux'
import {authUsuario} from '../../actions/authActions'
import {RenderMenu} from '../../actions/loginActions'
import {agregarUsuario} from '../../actions/usuarioActions'

//router
import {withRouter} from 'react-router-dom'


//alertas
import alerta from 'components/alerta/Alerta'


//validacion
import {validarEmpty} from 'helpers/funciones'

const Login = ({authUsuario, RenderMenu, history, agregarUsuario, RenderLoader}) => {
	const [infoUser, guardarInfoUser] =useState({
		user:'',
		pass:''
	})

	const handleChange = (e) => {
		guardarInfoUser({
			...infoUser,
			[e.target.name]:e.target.value})
	}
	
	const handleSubmit = async (e)=>{
		e.preventDefault()

		if (validarEmpty(infoUser) === true) {
			const token = await authUsuario(infoUser)
			const info =  await agregarUsuario(infoUser.user)

			if (info === true && token ===true) {

				RenderLoader(true)
				setTimeout(() => {
					history.go('/')
				}, 1500)
	
			}else {
				alerta.open({type:"error", message:'Usuario o contraseña incorrecta'})
			}   
		}else{
			alerta.open({type:"warning", message:'Existen campos vacios'})
		}
		
	}

	useEffect(() => {
		RenderLoader(false)
        RenderMenu(false)
    }, [RenderMenu]);

    return (
    	<Fragment>
			<div className="hero is-fullheight">			
				<div className="hero-body">
					<div className="container has-text-centered">
						<div className="columns is-centered">
							<div className="column is-3 pt-0">
							<h3 className="title">Sistema de Registro Mapa Soluciones</h3>
								<hr className="login-hr"/>
								<p className="subtitle">Esta ingresando a la APP del MinAguas</p>
								
								<div className="box">
									<form className="field" >
										<div className="control has-icons-left pb-4">
											<input className="input" type="text" placeholder="Usuario" name="user" onChange={handleChange}/>
											<span className="icon is-small is-left">
												<i className="fas fa-envelope"></i>
											</span>
										</div>

										<div className="control has-icons-left  pb-4">
											<input className="input" type="password" placeholder="Contraseña" name="pass" onChange={handleChange}/>
											<span className="icon is-small is-left">
												<i className="fas fa-lock"></i>
											</span>
										</div>
										<button className = "button    is-fullwidth is-orange" onClick={handleSubmit}>Ingresar</button>	
									</form>
								</div>
								
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</Fragment>
    );
}



export default withRouter(connect (null, {authUsuario,RenderMenu, agregarUsuario}) (Login));