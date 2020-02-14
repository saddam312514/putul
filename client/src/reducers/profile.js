import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    UPDATe_PROFILE
} from '../actions/types'
const initialState = {
    profile: [],
    profiles: [],
    repos: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const {type, payload} = action

    switch(type){
        case GET_PROFILE:
        case UPDATe_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                repos: [],
                loading: false
            }

        case PROFILE_ERROR:
            return{
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;


    }
}