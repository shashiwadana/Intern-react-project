import * as actionType from './ActionType';
import fetch from 'isomorphic-fetch';

export function fetchWorkers(){
    return dispatch =>{
        dispatch(loadWorkersBegin());
        console.log('workers are fetching');

        return fetch("http://localhost:3001/dataservices/getallskills")
        .then (res=>res.json())
        .then(res => {
           dispatch(loadWorkers(res));       
        })
        .catch(error =>dispatch(loadWorkersError(error)));
    };
}

export const loadWorkersBegin = () =>({
	type : actionType.LOAD_WORKERS_BEGINS,
	payload : "Workers are fetching....."
});

export const loadWorkers = (workers) => ({
	type : actionType.LOAD_WORKERS_COMPLETE,
	payload : workers.recordsets[0]
});

export const loadWorkersError = (error) => ({
	type : actionType.LOAD_WORKERS_ERROR,
	payload : error
});

