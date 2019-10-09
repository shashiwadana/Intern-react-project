import * as actionType from './ActionType';
import fetch from 'isomorphic-fetch';

export function fetchUsers(){
    return dispatch => {
       dispatch(userUpdateBegin());
       console.log('Users fetching');

       return fetch("http://localhost:3000/dbUser")
       .then(res => res.json())
       .then(json => {
            dispatch(userUpdate(json));
          
       })
       .catch(error=>dispatch(userUpdateError(error))); 
    };
}


export const userUpdateBegin = () =>({
    type:actionType.USER_DATA_BEGINS,
    payload:"Users are fetching"
});

export const userUpdate = (users) =>({
    type:actionType.USER_DATA,
    payload:users
});

export const userUpdateError = (error) =>({
    type:actionType.USER_DATA_COMPLETE,
    payload:error
});