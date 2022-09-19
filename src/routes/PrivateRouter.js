import React, {useEffect, useState} from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'

import {RenderMenu} from '../actions/loginActions'
import {comproUsuario} from '../actions/authActions'

import md5 from 'md5'

const PrivateRoute = ({component: Component, auth, RenderMenu, RenderLoader, computedMatch, ...rest}) => {
    const [comprobacion, guardarComprobacion] = useState(false)
    const LoaderTimer = (valor) => {
            return RenderLoader(valor)
    }

    useEffect(() => {

        if (!auth && computedMatch.params.token) {
            async function compro(){
                const data = await comproUsuario(computedMatch.params.token)
                if (data !== false) {
                    localStorage.setItem('infoUser', JSON.stringify(data.info))
                    localStorage.setItem(md5('Token'), data.token)
                    setTimeout(() => {
                        guardarComprobacion(true)
                    }, 1000);
                }else{
                    setTimeout(() => {
                        guardarComprobacion(true)
                    }, 1000);
                }
                
            }
            compro()
        } else{
            setTimeout(() => {
                guardarComprobacion(true)
            }, 1000);
        }

        RenderMenu(true)
    }, [])

    
        return (
        
            <Route {...rest} render={props => (
                
                    auth?
                        <Component {...props} {...rest} LoaderTimer = {LoaderTimer}/>
                    : <Redirect to="/login"/>
                
            )} />
        )
    
   
    
};
const mapStateToProps = state => ({
    auth:state.auth.auth
})
export default withRouter(connect(mapStateToProps, {RenderMenu}) (PrivateRoute));