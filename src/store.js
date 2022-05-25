import { combineReducers } from 'redux'
import { createStore } from 'redux';
import {UserReducer} from './ReduxUser/UserReducer'

let info =combineReducers({
    user:UserReducer,
    
})


export const Store = createStore(info);
