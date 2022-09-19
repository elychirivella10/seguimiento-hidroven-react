import {OBTENER_BRIPPAS, RESET_BRIPPAS} from '../actions/types'
 
const brippasState = {
    brippas: []
}

export default function (state = brippasState, action) {
    
    switch (action.type) {
        case OBTENER_BRIPPAS:                       
            return {                              
                brippas:action.payload
            }
        case RESET_BRIPPAS:
            return {
                ...state,
                brippas:[]
            }
        default:
            return state
    }
}