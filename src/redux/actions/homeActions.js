export const GET_RECOMMENDED_YT_VIDS = 'GET_RECOMMENDED_YT_VIDS'
export const GET_RECOMMENDED_YT_VIDS_ON_SUCCESS = 'GET_RECOMMENDED_YT_VIDS_ON_SUCCESS'
export const SET_NEXT_PAGE_TOKEN = 'SET_NEXT_PAGE_TOKEN'
export const VIDEO_IS_LOADING = 'VIDEO_IS_LOADING'
export const VIDEO_IS_NOT_LOADING = 'VIDEO_IS_NOT_LOADING'

export function GetYoutubeRecommendedVids(){
    return {
        type: GET_RECOMMENDED_YT_VIDS
    }; 
}


export function GetYoutubeRecommendedVidsOnSuccess(payload){
    return {
        type: GET_RECOMMENDED_YT_VIDS_ON_SUCCESS,
        payload: payload
    }; 
}


export function IncreaseVideosToGet(payload){
    return {
        type: SET_NEXT_PAGE_TOKEN,
        payload: payload
    }; 
}

export function SetVideosToLoad(){
    return {
        type: VIDEO_IS_LOADING
    }
}

export function SetVideosToStopLoad(){
    return {
        type: VIDEO_IS_NOT_LOADING
    }
}