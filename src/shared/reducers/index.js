import {combineReducers} from 'redux';
import dealsReducer from './dealsReducer';
import workerReducer from './WorkerReducer';
import loginReducer from './loginReducer';

const allReducers = combineReducers({
	dealsReducer,
	workerR:workerReducer,
	loginR:loginReducer

	
});

export default allReducers;