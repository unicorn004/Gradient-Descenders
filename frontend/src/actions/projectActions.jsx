import {SIGNUP_PROJECT_REQUEST,SIGNUP_PROJECT_SUCCESS,SIGNUP_PROJECT_FAIL, LOGIN_PROJECT_REQUEST, LOGIN_PROJECT_SUCCESS, LOGIN_PROJECT_FAIL} from '../constants/projectConstants'


export const signup = (name, email, password, password2) => async (dispatch) => {
    try {
        dispatch({ type: SIGNUP_PROJECT_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await axios.post('http://127.0.0.1:8000/signup/', { name, email, password, password2 }, config);

        dispatch({
            type: SIGNUP_PROJECT_SUCCESS,
            payload: data
        });

        // You may also want to save user info in local storage
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: SIGNUP_PROJECT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const loginProject = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_PROJECT_REQUEST });
    
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        { email, password },
        config
      );
  
      dispatch({
        type: LOGIN_PROJECT_SUCCESS,
        payload: data,
      });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: LOGIN_PROJECT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
};
