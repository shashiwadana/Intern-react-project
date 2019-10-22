import {combineReducers} from 'redux';
import dealsReducer from './dealsReducer';
import workerReducer from './WorkerReducer';
import loginReducer from './loginReducer';
import requestsReducer from './requestsReducer';

const allReducers = combineReducers({
	dealsReducer,
	workerR:workerReducer,
	loginR:loginReducer,
	requestR:requestsReducer

	
});

export default allReducers;