import {RENDER_HEADER, RENDER_HEADER_STATE} from '../actions/types'

export const RenderMenu = (valor) => {
    return {
        type: RENDER_HEADER,
        payload: valor
    }
}

export const RenderMenuState = () => {
    return {
        type: RENDER_HEADER_STATE
    }
}