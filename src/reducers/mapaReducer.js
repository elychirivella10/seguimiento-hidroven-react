import {OBTENER_OBRAS_SECTORES_MAPA} from '../actions/types'
 
const mapaState = {
    mapa: []
}

export default function (state = mapaState, action) {
    switch (action.type) {
        case OBTENER_OBRAS_SECTORES_MAPA:
            return {
                mapa:action.payload
            }
        default:
            return state
    }
}