import React from 'react'

import {Link, withRouter} from 'react-router-dom'

//redux
import {connect} from 'react-redux'
import {desUsuario} from '../../actions/authActions'

const HeaderMapa = ({desUsuario, usuario, history}) => {

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
        setTimeout(() => {
            history.go('/login')
        }, 1500);

    }
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">

                    <a role="button" id = "buttonBurgerMenu" className="navbar-burger burger" onClick = {RenderBurgerMenu} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span ></span>
                        <span ></span>
                        <span ></span>
                    </a>
                </div>

                <div className="navbar-menu" id = "BurgerMenu">
                    <div className="navbar-start ">
                        <Link to = "/registro" className = "navbar-item">
                            Registrar proyecto
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                {usuario?usuario.hidrologica:null}
                                </a>

                                <div className="navbar-dropdown">
                                    <a className="navbar-item" onClick = {desLogin}>
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
    )
}

const mapStateToProps = (state) => ({
    usuario: state.usuario.usuarios
})

export default withRouter(connect(mapStateToProps, {desUsuario})(HeaderMapa))