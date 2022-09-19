import {OBTENER_REPORTE, RESET_REPORTE} from '../actions/types'
 
const proyectoState = {
    proyecto: []
}

export default function (state = proyectoState, action) {
    switch (action.type) {
        case OBTENER_REPORTE:
            return {
                proyecto:action.payload
            }
        case RESET_REPORTE:
            return {
                state:{}
            }
        default:
            return state
    }
}