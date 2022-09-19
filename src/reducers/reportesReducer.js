import {OBTENER_REPORTES_PREVIEW, RESET_REPORTES, OBTENER_REPORTES_DASHBOARD} from '../actions/types'
 
const reportesState = {
    reportes: []
}

export default function (state = reportesState, action) {
    
    switch (action.type) {
        case OBTENER_REPORTES_PREVIEW:                       
            return {                              
                reportes:action.payload
            }
        case OBTENER_REPORTES_DASHBOARD:                       
            return {    
                ...state,                          
                reportes:[...state.reportes,action.payload]
            }
        case RESET_REPORTES:
            return {
                ...state,
                reportes:[]
            }
        default:
            return state
    }
}