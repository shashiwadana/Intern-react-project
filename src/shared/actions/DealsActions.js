import * as actionType from './ActionType';


//Api Call And Fetch Data
export function fetchDeals() {
  return dispatch => {
    dispatch(loadDealsBegin());
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