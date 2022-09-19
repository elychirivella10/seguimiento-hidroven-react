import {AUTHENTICAR_USUARIO, DESLOGEAR_USUARIO} from '../actions/types'
import store from '../store'

import axios from 'axios'

import {rutaAxios} from 'variablesGoblales'

import {setToken, deleteToken} from 'helpers/auth-helper'



export const authUsuario = (body)  => async dispatch => {
    const myHeaders = new Headers()
	    myHeaders.append('Content-type', 'application/json')

	    const myConfig = {
	      headers: myHeaders,
	      body : JSON.stringify(body)  
	    }
    const respuesta = await axios.post(`${rutaAxios}user/public/api/user/authenticate`, myConfig)

    if (respuesta.data !== 'No user found' && respuesta.data !== 'undefined') {
        store.subscribe( () => {
            setToken(respuesta.data.Token)
        });
        
    
        setTimeout(function(){ dispatch ({
            type:AUTHENTICAR_USUARIO, 
            payload: true
        }) },1000);

        return true
    }

    return false

}
export const authUsuarioManual = ()  => async dispatch => {
    dispatch ({
        type:AUTHENTICAR_USUARIO, 
        payload: true
    })
}

export const comproUsuario = async (token) => {
    const respuesta = await axios.get(`${rutaAxios}user/public/api/user/verification/${token}`)
    if (respuesta.data !== "Usuario no Autorizado") {
        return respuesta.data
    }else{
        return false
    }
}

export const desUsuario = () => {
    if(deleteToken() === true){
        return {
            type:DESLOGEAR_USUARIO
        }
    }
}