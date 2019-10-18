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
         /*
          return   fetch("http://127.0.0.1:3001/user/login",{
            method:'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
          UserEmail:this.email,
          Password:this.password,
         
            })})
            .then (res=>{if(res.message==='Authorized'){
              console.log("authorized");
            }
          else{
            console.log("error");
          }
          })*/


        } else {
          dispatch(loginError(error));
        }
      });
    }
  }