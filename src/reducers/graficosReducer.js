import {GRAFICO_ARRIBA_IZQUIERDA, GRAFICO_ARRIBA_CENTRO, GRAFICO_ARRIBA_DERECHA, GRAFICO_ABAJO_IZQUIERDA, GRAFICO_ABAJO_CENTRO, RESET_GRAFICO, GRAFICO_ABAJO_DERECHA} from '../actions/types'
 
const graficosState = {
    graficos: []
}

export default function (state = graficosState, action) {
    switch (action.type) {
        case GRAFICO_ARRIBA_IZQUIERDA:
            return {
                ...state,
                graficos:[...state.graficos, action.payload]
            }
        case GRAFICO_ARRIBA_CENTRO:
            return {
                ...state,
                graficos:[...state.graficos, action.payload]
            }
        case GRAFICO_ARRIBA_DERECHA:
            return {
                ...state,
                graficos:[...state.graficos, action.payload]
            }
        case GRAFICO_ABAJO_IZQUIERDA:
            return {
                ...state,
                graficos:[...state.graficos, action.payload]
            }
        case GRAFICO_ABAJO_CENTRO:
            return {
                ...state,
                graficos:[...state.graficos, action.payload]
            }
        case GRAFICO_ABAJO_DERECHA:
            return {
                ...state,
                graficos:[...state.graficos, action.payload]
            }

        case RESET_GRAFICO:
        return {
            graficos:[]
        }
        default:
            return state
    }
}