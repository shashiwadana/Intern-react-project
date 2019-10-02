import {combineReducers} from 'redux';
import dealsReducer from './dealsReducer';
import countReducer from './countReducer';

const allReducers = combineReducers({
	dealsReducer,
	countReducer
});

export default allReducers;