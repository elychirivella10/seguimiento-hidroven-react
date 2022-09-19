import {OBTENER_POZOS, RESET_POZOS} from '../actions/types'
 
const pozosState = {
    pozos: []
}

export default function (state = pozosState, action) {
    
    switch (action.type) {
        case OBTENER_POZOS:                       
            return {                              
                pozos:action.payload
            }
        case RESET_POZOS:
            return {
                ...state,
                pozos:[]
            }
        default:
            return state
    }
}