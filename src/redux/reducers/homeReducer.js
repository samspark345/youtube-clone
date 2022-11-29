import React from 'react'
import { GET_RECOMMENDED_YT_VIDS_ON_SUCCESS, SET_NEXT_PAGE_TOKEN, VIDEO_IS_LOADING, VIDEO_IS_NOT_LOADING } from '../actions/homeActions'
import rootState from '../Root/rootState'
import initHomeState from '../states/HomeState'

const homeReducer = (state = rootState.HomeState, action) => {
    switch(action.type){
        case(GET_RECOMMENDED_YT_VIDS_ON_SUCCESS) : {
            return({
                ...state, 
                videos: state.videos.concat(action.payload.data.items),
                nextPageToken: action.payload.data.nextPageToken
            })
        }
        
        case(SET_NEXT_PAGE_TOKEN) : {
            return({
                ...state, 
                nextPageToken: action.payload  
            })
        }

        case(VIDEO_IS_LOADING) : {
            return({
                ...state, 
                loading: true
            })
        }

        case(VIDEO_IS_NOT_LOADING) : {
            return({
                ...state, 
                loading: false
            })
        }

        default:
            return state
    }
}

export default homeReducer