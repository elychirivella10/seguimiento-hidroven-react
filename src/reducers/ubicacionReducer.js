import {AGREGAR_ESTADOS, RESET_ESTADOS, AGREGAR_MUNICIPIOS, RESET_MUNICIPIOS, AGREGAR_PARROQUIAS, RESET_PARROQUIAS} from '../actions/types'
 
const ubicacionState = {
    estados:[],
    municipios:[],
    parroquias:[]
}

export default function (state = ubicacionState, action) {
    switch (action.type) {
        case AGREGAR_ESTADOS:
            return {
                ...state,
                estados:action.payload
            }
        case AGREGAR_MUNICIPIOS:
            return {
                ...state,
                municipios:action.payload
            }
        case AGREGAR_PARROQUIAS:
            return {
                ...state,
                parroquias:action.payload
            }
        case RESET_ESTADOS:
            return {
                estados:[]
            }
        case RESET_MUNICIPIOS:
            return {
                municipios:[]
            }
        case RESET_PARROQUIAS:
            return {
                municipios:[]
            }

        
        default:
            return state
    }
}