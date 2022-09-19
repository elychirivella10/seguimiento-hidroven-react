import {AGREGAR_FECHA, RESET_FECHA} from '../actions/types'

export const agregarFecha = (valor) => {
    return {
        type: AGREGAR_FECHA,
        payload: valor
    }
}

export const resetFecha = () => {
    return {
        type: RESET_FECHA
    }
}