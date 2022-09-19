import React from 'react'

import Logo from '../login/logo.png'

//WithRouter
import {withRouter, Link, NavLink} from 'react-router-dom'

//importar funcion para detectar dispositivos
import {detecterDispositivo} from '../../helpers/funciones'

const Loader = ({location}) =>{
    return (
        <div className="columns mt-0 mb-0 ml-0 mr-0">
            <div className="column is-12 is-12-touch is-fixed pt-0 pb-0 pl-0 pr-0 z-index-1000">
                <section className="hero is-primary  is-fullheight">
                    
                    <div className="hero-head">
                        <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                            <a className="navbar-item">
                                <img src= {Logo} alt="Logo"/>
                            </a>
                            </div>
                        </div>
                        </nav>
                    </div>

                    
                    <div className="hero-body">
                        <div className="container has-text-centered has-text-white">

                            
                            {detecterDispositivo() === true && location.pathname === "/" ? 
                            
                                <div className="columns">
                                    <div className="column is-12">
                                        <div className="box">
                                            <div className="columns">
                                                <div className="column is-12"><p><NavLink to="/proyectos" className ="link header active">Proyectos</NavLink></p></div>
                                                <div className="column is-12"><p><NavLink to="/registro" className ="link header active">Registro</NavLink></p></div>
                                                <div className="column is-12"><p><NavLink to="/mapa" className ="link header active">Mapa</NavLink></p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            :
                                <div className="loader-list">
                                    <div className="loader-item">
                                        <div className="loader loader-3">
                                        </div>
                                    </div>
                                </div>
                            }    
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default withRouter(Loader)