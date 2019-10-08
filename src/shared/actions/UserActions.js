import * as actionType from './ActionType';
import fetch from 'isomorphic-fetch';

export function fetchUsers(){
    return dispatch => {
       
       return fetch("http://localhost:3000/dbUser")
       .then(res => res.json())
       .then(json => {
            dispatch(userUpdate(json));
           
       })
       
    };
}



export const userUpdate = (users) =>({
    type:actionType.USER_DATA,
    payload:users
});