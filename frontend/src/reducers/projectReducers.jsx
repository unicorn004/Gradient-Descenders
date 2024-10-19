import {SIGNUP_PROJECT_REQUEST,SIGNUP_PROJECT_SUCCESS,SIGNUP_PROJECT_FAIL, LOGIN_PROJECT_REQUEST, LOGIN_PROJECT_SUCCESS, LOGIN_PROJECT_FAIL, LOGOUT_PROJECT} from '../constants/projectConstants'

const initialState = {
    loading: false,
    userInfo: null,
    error: null,
    };


export const signupProjectReducers = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_PROJECT_REQUEST:
        return {
            ...state,
            loading: true,
        };
        case SIGNUP_PROJECT_SUCCESS:
        return {
            ...state,
            loading: false,
            userInfo: action.payload,
        };
        case SIGNUP_PROJECT_FAIL:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        default:
        return state;
    }
};
const initialState2 = {
    userInfo:null,
}

export const loginProjectReducers = (state = initialState2, action) => {
    switch (action.type) {
      case LOGIN_PROJECT_REQUEST:
        return { loading: true , isAuthenticated: false};
      case LOGIN_PROJECT_SUCCESS:
        return { loading: false,isAuthenticated: true, userInfo: action.payload };
      case LOGIN_PROJECT_FAIL:
        return { loading: false, isAuthenticated: false, error: action.payload };
      case LOGOUT_PROJECT:
        return {};
      default:
        return state;
    }
};