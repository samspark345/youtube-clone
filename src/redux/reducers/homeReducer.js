import React from 'react'
import { GET_RECOMMENDED_YT_VIDS_ON_SUCCESS, INCREASE_VIDEOS_TO_GET, VIDEO_IS_LOADING, VIDEO_IS_NOT_LOADING } from '../actions/homeActions'
import HomeState from '../states/HomeState'

const homeReducer = (state = rootState, action) => {
    switch(action.type){
        case(GET_RECOMMENDED_YT_VIDS_ON_SUCCESS) : {
            return({...state, 
                HomeState: {
                ...state.HomeState,
                videos: action.payload.data
            } })
        }
        
        case(INCREASE_VIDEOS_TO_GET) : {
            return({...state, 
                HomeState: {
                    totalVideoCount: action.payload,
                } })
        }

        case(VIDEO_IS_LOADING) : {
            return({...state, 
                HomeState: {
                    loading: false
                } })
        }

        case(VIDEO_IS_NOT_LOADING) : {
            return({...state, 
                HomeState: {
                    loading: false
                } })
        }

        default:
            return state
    }
}

export default homeReducer