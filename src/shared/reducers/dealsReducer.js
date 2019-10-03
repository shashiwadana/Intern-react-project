import * as actionType from '../actions/ActionType';

const defaultDealsState = {
	deals : undefined,
	loadingMsg : undefined,
	errorMsg : undefined
}

const dealsReducer = (state = defaultDealsState, action) => {
	switch(action.type){
		case actionType.LOAD_DEALS_BEGINS:
		{
			console.log("LOAD_DEALS_BEGINS ",action,  action.payload);

			let newState = {
				deals: undefined, 
				loadingMsg : action.loadingMsg,
				errorMsg :""	
			}
			state = {...state, deals: newState }
			break;
		}
		case actionType.LOAD_DEALS_COMPLATE:
		{
			console.log("LOAD_DEALS_COMPLATE " );
			console.log("LOAD_DEALS_COMPLATE ",action.payload );

			let newState = {
				deals: action.payload, 
				loadingMsg : action.loadingMsg,
				errorMsg :""	
			}

			state = {...state, deals : newState}

			console.log(state);
			break;
		}
		case actionType.LOAD_DEALS_ERROR:{
			let newState = {
				deals: undefined, 
				loadingMsg : "",
				errorMsg :action.errorMsg	
			}

			state = {...state, deals : newState}
			break;
		}
	}

	console.log(actionType.LOAD_DEALS_COMPLATE, state);

	return state;
}

export default dealsReducer;