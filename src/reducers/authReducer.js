import {AUTHENTICAR_USUARIO, DESLOGEAR_USUARIO} from '../actions/types'
 
const authState = {
    auth: []
}

export default function (state = authState, action) {
    switch (action.type) {
        case AUTHENTICAR_USUARIO:
            return {
                auth:action.payload
            }

        case DESLOGEAR_USUARIO:
            return {
                ...state
            }
        default:
            return state
    }
}