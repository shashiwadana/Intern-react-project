import * as actionType from './ActionType';
import fetch from 'isomorphic-fetch';

export function fetchRequests() {
    return dispatch => {
        dispatch (requestBegin());
        console.log('Requests fetching');

        return fetch("http://127.0.0.1:3001/ordersClient/completedorders/"+localStorage.getItem("UserId"))
        .then(res => res.json())
        .then(json =>{
            dispatch(requests(json));
        })
        .catch(error => dispatch(requestsError(error)));
    };
}

export const requestBegin = () =>({
    type:actionType.REQUEST_FETCHING_BEGIN,
    payload:"Requsests are fetching "
});

export const requests =(reqsts) =>({
    type :actionType.REQUEST_FETCHING_COMPLETED,
    payload: reqsts
});

export const requestsError = (error) => ({
    type :actionType.REQUEST_FETCHING_ERROR,
    payload:error
});