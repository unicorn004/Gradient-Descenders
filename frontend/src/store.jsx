import {combineReducers,createStore,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import { loginProjectReducers, signupProjectReducers, userDetailReducers } from './reducers/projectReducers';

const rootReducer = combineReducers({
    userSignup:signupProjectReducers,
    userLogin :loginProjectReducers,
    userDetails:userDetailReducers
})



const middleware=[thunk]
const initialState = {};


const store = createStore(rootReducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;