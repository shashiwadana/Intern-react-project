import {combineReducers} from 'redux';
import dealsReducer from './dealsReducer';
import workerReducer from './WorkerReducer'
const allReducers = combineReducers({
	dealsReducer,
	workerR:workerReducer
});

export default allReducers;