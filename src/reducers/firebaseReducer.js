import {OBTENER_PROYECTOS_FIREBASE} from '../actions/types'
 
const proyectosState = {
    proyectos: []
}

export default function (state = proyectosState, action) {
    switch (action.type) {
        case OBTENER_PROYECTOS_FIREBASE:
            return {
                proyectos:[action.payload]
            }
        default:
            return state
    }
}