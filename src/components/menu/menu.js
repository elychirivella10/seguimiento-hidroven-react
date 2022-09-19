import React from "react";

import {NavLink} from 'react-router-dom';

//md5
import md5 from 'md5'

const Menu = ({usuario}) =>{

    const usuarioA =usuario?usuario[md5('adjudicable')]:null
    const usuarioR =usuario?usuario[md5('id_rol')]:null

    return(
        
            <aside className="menu sidebar is-sticky top-3 is-radius">
                <div className="scrool small menu-box">
                <p className="menu-label">
                    Inicio
                </p>
                <ul className="menu-list">
                    <li>
                        <NavLink to='/' className="is-active">
                            <span className="icon mr-2">
                                <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
                            </span>
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
                <p className="menu-label">
                    Produccion
                </p>
                <ul className="menu-list">
                    {usuarioA && usuarioR !== 1?<li>
                        <NavLink to='/registro/produccion'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                            </span>
                            Registro
                        </NavLink>
                    </li>:null}
                    <li>
                        <NavLink to='/compilado/produccion'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                            </span>
                            Compilado
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/reportes/produccion'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-list" aria-hidden="true"></i>
                            </span>
                            Reportes
                        </NavLink>
                    </li>
                </ul>
                <p className="menu-label">
                    Pozos
                </p>
                <ul className="menu-list">
                    {usuarioA && usuarioR !== 1?<li>
                        <NavLink to='/registro/pozo'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                            </span>
                            Registro
                        </NavLink>
                    </li>:null}
                    {usuarioA && usuarioR !== 1?<li>
                        <NavLink to='/registro/pozos'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-box-open" aria-hidden="true"></i>
                            </span>
                            Axenar 
                        </NavLink>
                    </li>:null}
                    <li>
                        <NavLink to='/compilado/pozo'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                            </span>
                            Compilado
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/reportes/pozo'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-list" aria-hidden="true"></i>
                            </span>
                            Reportes
                        </NavLink>
                    </li>
                </ul>
                <p className="menu-label">
                    Fugas
                </p>
                <ul className="menu-list">
                    {usuarioA && usuarioR !== 1?<li>
                        <NavLink to='/registro/fugas'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                            </span>
                            Registro
                        </NavLink>
                    </li>:null}
                    <li>
                        <NavLink to='/compilado/fugas'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                            </span>
                            Compilado
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/reportes/fugas'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-list" aria-hidden="true"></i>
                            </span>
                            Reportes
                        </NavLink>
                    </li>
                </ul>
                <p className="menu-label">
                    Tomas ilegales
                </p>
                <ul className="menu-list">
                    {usuarioA && usuarioR !== 1?<li>
                        <NavLink to='/registro/tomas'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                            </span>
                            Registro
                        </NavLink>
                    </li>:null}
                    <li>
                        <NavLink to='/compilado/tomas'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                            </span>
                            Compilado
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/reportes/tomas'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-list" aria-hidden="true"></i>
                            </span>
                            Reportes
                        </NavLink>
                    </li>
                </ul>
                <p className="menu-label">
                    Brippas
                </p>
                <ul className="menu-list">
                    {usuarioA && usuarioR !== 1?<li>
                        <NavLink to='/registro/brippas'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                            </span>
                            Registro
                        </NavLink>
                    </li>:null}
                    {usuarioA && usuarioR !== 1?<li>
                        <NavLink to='/registro/brippasG'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-box-open" aria-hidden="true"></i>
                            </span>
                            Axenar 
                        </NavLink>
                    </li>:null}
                    <li>
                        <NavLink to='/compilado/brippas'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                            </span>
                            Compilado
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/reportes/brippas'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-list" aria-hidden="true"></i>
                            </span>
                            Reportes
                        </NavLink>
                    </li>
                </ul>
                <p className="menu-label">
                    Afectaciones
                </p>
                <ul className="menu-list">
                    {usuarioA && usuarioR !== 1?<li>
                        <NavLink to='/registro/afectaciones'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                            </span>
                            Registro
                        </NavLink>
                    </li>:null}
                    {usuarioA && usuarioR !== 1?<li>
                        <NavLink to='/registro/sistemas'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-box-open" aria-hidden="true"></i>
                            </span>
                            Axenar 
                        </NavLink>
                    </li>:null}
                    <li>
                        <NavLink to='/compilado/afectaciones'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                            </span>
                            Compilado
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/reportes/afectaciones'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-list" aria-hidden="true"></i>
                            </span>
                            Reportes
                        </NavLink>
                    </li>
                </ul>
                <p className="menu-label">
                    Abastecimiento y operatividad
                </p>
                <ul className="menu-list">
                    {usuarioA && usuarioR !== 1?<li>
                        <NavLink to='/registro/abastecimiento'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                            </span>
                            Registro
                        </NavLink>
                    </li>:null}
                    <li>
                        <NavLink to='/compilado/abastecimiento'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                            </span>
                            Compilado
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/reportes/abastecimiento'>
                            <span className="icon mr-2">
                                <i className="fa-solid fa-list" aria-hidden="true"></i>
                            </span>
                            Reportes
                        </NavLink>
                    </li>
                </ul>
                </div>
            </aside>
					 
    )
}
export default Menu