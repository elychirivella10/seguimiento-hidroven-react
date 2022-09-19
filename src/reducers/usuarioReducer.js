import {AGREGAR_USUARIO, ELIMINAR_INFO_USUARIO} from '../actions/types'
 
const initialState = {
    usuarios: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ELIMINAR_INFO_USUARIO:
            return {
                ...state
            }
        case AGREGAR_USUARIO:
            return {
                usuarios: action.payload
            }
        default:
            return state
    }
}