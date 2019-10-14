import {combineReducers} from 'redux';
import dealsReducer from './dealsReducer';
import workerReducer from './WorkerReducer';
import jobReducer from './jobReducer'

const allReducers = combineReducers({
	dealsReducer,
	workerR:workerReducer,
	jobR:jobReducer
});

export default allReducers;