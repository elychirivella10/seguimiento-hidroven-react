import {LOADER_RENDER} from './types'

export const RenderLoader = (valor) => {
    return {
        type: LOADER_RENDER,
        payload: valor
    }
}