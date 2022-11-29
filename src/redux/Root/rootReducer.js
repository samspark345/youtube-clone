import rootState from './rootState'
import {combineReducers} from 'redux'
import homeReducer from '../reducers/homeReducer';


const main = (state = rootState.main, action) => {
    switch(action.type){
        case('INCREMENT') : {
            return ({...state, count: state.count + 1});
        }

        case('DECREMENT') : {
            return ({...state, count: state.count - 1});
        }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    mainState: main,
    homeState: homeReducer
})
export default rootReducer
