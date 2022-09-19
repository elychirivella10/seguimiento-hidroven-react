import React, {Fragment} from 'react'

//react-router-dom
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

//redux
import {connect} from 'react-redux'
import {RenderMenuState} from '../../actions/loginActions'
import {desUsuario} from '../../actions/authActions'
import {desInfoUser} from 'actions/usuarioActions'

//importar funcion para detectar dispositivos
import {detecterDispositivo} from '../../helpers/funciones'

import Logo from './logo.png'
const Header = ({renderHeader, desUsuario, usuario, history, desInfoUser}) =>{

    const RenderBurgerMenu = (e) => {

        let burgerMenu = document.getElementById("BurgerMenu")
        let buttonBugerMenu = document.getElementById("buttonBurgerMenu")

        if (burgerMenu.classList[1] === "is-active" && buttonBugerMenu.classList[2] === "is-active") {
            buttonBugerMenu.classList.remove("is-active")
            burgerMenu.classList.remove("is-active")
        } else{
            buttonBugerMenu.classList.add("is-active")
            burgerMenu.classList.add("is-active")
        }
    
    }

    const desLogin = async (e) => {
        
        await desUsuario()
        await desInfoUser()
        setTimeout(() => {
            history.go('/login')
        }, 1500);

    }
    renderHeader=true
    return(
      <div className = "is-relative z-index-100">
        {renderHeader ===true ? 
            <Fragment>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to = "/">
                    <img src={Logo} />
                    </Link>

                    <a role="button" id = "buttonBurgerMenu" className="navbar-burger burger" onClick = {RenderBurgerMenu} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span ></span>
                        <span ></span>
                        <span ></span>
                    </a>
                </div>

                <div className="navbar-menu" id = "BurgerMenu">
                    

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                {usuario?usuario.hidrologica:null}
                                </a>

                                <div className="navbar-dropdown is-right" onClick = {desLogin}>
                                    <a className="navbar-item" >
                                        Salir
                                    </a>
                                </div>
                            </div>

                            {/*<div className="buttons">
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div> aca se pondra el salir para los mobiles o el hover*/}

                        </div>
                    </div>
                </div>
            </nav>  
        </Fragment>
      :null}



          
        </div>
    )
}

const mapStateToProps = (state) => ({
    renderHeader: state.renderHeader.renderHeader,
    usuario: state.usuario.usuarios
})

export default withRouter(connect (mapStateToProps, {RenderMenuState, desUsuario, desInfoUser})(Header))