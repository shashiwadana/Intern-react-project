import * as actionType from './ActionType';
import fetch from 'isomorphic-fetch';


export const loginBegin =(isloginPending) =>({
    type :actionType.LOGIN_BEGINS,
    payload:isloginPending
});

export const login =(isloginSuccess) =>({
    type :actionType.LOGIN_COMPLETE,
    payload:isloginSuccess
});

export const loginError =(isloginError) =>({
    type :actionType.LOGIN_ERROR,
    payload:isloginError
});

//Api call 
 
export function loginUser(email, password) {
    return dispatch => {   
      dispatch(loginBegin(true));
      dispatch(login(false));
      dispatch(loginError(null));
  
      callLoginApi(email, password, error => {
        dispatch(loginBegin(false));
        if (!error) {
          dispatch(login(true));
        
        } else {
          dispatch(loginError(error));
        }
      });
    }
  }