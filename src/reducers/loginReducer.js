import {RENDER_HEADER, RENDER_HEADER_STATE} from '../actions/types'
 
const initialState = {
    renderHeader: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case RENDER_HEADER_STATE :
            return {
                ...state
            }
        case RENDER_HEADER :
            return {
                ...state,
                renderHeader: action.payload
            }

        
        default:
            return state
    }
}