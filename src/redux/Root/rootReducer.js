import rootState from './rootState'

const rootReducer = (state = rootState, action) => {
    switch(action.type){
        case('INCREMENT') : {
            return ({...state, count: state.count + 1});
        }

        case('DECREMENT') : {
            return ({...state, count: state.count - 1});
        }

        case('GET_RECOMMENDED_YT_VIDS_ON_SUCCESS') : {
            return({...state, HomeState: {videos: action.payload.data.items} })
        }
        default:
            return state
    }
}

export default rootReducer
