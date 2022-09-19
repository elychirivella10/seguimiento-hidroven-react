import {LOADER_RENDER} from '../actions/types'

const loaderState = {
    loader: true
}

export default function (state = loaderState, action) {
    switch (action.type) {
        case LOADER_RENDER:
            return {
                ...state,
                loader:action.payload
            }
        default:
            return state
    }
}