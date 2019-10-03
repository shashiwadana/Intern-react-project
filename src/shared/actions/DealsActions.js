import * as actionType from './ActionType';
import fetch from 'isomorphic-fetch';


//Api Call And Fetch Data
export function fetchDeals() {
  return dispatch => {
    dispatch(loadDealsBegin());

    console.log('Deal Fetching');

    return fetch("https://jsonplaceholder.typicode.com/photos")     
      .then(res => res.json())
      .then(json => {
        dispatch(loadDeals(json));        
      })
      .catch(error => dispatch(loadDealsError(error)));
  };
}

export const loadDealsBegin = () =>({
	type : actionType.LOAD_DEALS_BEGINS,
	payload : "Deals are fetching....."
});

export const loadDeals = (deals) => ({
	type : actionType.LOAD_DEALS_COMPLATE,
	payload : deals
});

export const loadDealsError = (error) => ({
	type : actionType.LOAD_DEALS_ERROR,
	payload : error
});