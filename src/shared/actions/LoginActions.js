import * as actionType from './ActionType';
import fetch from 'isomorphic-fetch';

//Api call 
 
export function loginUser(email, password) {
  console.log(email);
  return dispatch => { 
      dispatch(loginBegin(true));
      dispatch(login(false));
      dispatch(loginError(null));
     
      fetch("http://127.0.0.1:3001/user/login",{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
    UserEmail:email,
    Password:password,
   
      })},{withCredentials:'include'})
      .then (res=>res.json())
      .then (res=>{
        if(res.message==='Authorized'){
        console.log("authorized");
        dispatch(loginBegin(false));
        dispatch(login(true));
        
       /*
        this.setState({
            email : "",
            password : ""
  
          });
          */
          localStorage.setItem('sessionType', res.result.sessionType);
          localStorage.setItem("UserId" , res.result.UserId);
      }
    else{
      console.log("error");
      dispatch(loginError(error));
    }
    })
     

    }
  }

  
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
