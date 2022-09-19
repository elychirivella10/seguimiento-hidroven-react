import {AGREGAR_FECHA, RESET_FECHA} from '../actions/types'
 
const fechaState = {
    fecha: {}
}

export default function (state = fechaState, action) {
    switch (action.type) {
        case AGREGAR_FECHA:
            return {
                ...state,
                fecha:action.payload
            }
        case RESET_FECHA:
            return {
                
                fecha:{}
            }

        
        default:
            return state
    }
}