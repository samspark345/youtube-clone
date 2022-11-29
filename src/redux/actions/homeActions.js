export const GET_RECOMMENDED_YT_VIDS = 'GET_RECOMMENDED_YT_VIDS'
export const GET_RECOMMENDED_YT_VIDS_ON_SUCCESS = 'GET_RECOMMENDED_YT_VIDS_ON_SUCCESS'
export const INCREASE_VIDEOS_TO_GET = 'INCREASE_VIDEOS_TO_GET'
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
        type: INCREASE_VIDEOS_TO_GET,
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