import {combineReducers} from 'redux';
import dealsReducer from './dealsReducer';
import countReducer from './countReducer';
import userReducer from './userReducer'

const allReducers = combineReducers({
	dealR:dealsReducer,
	countR:countReducer,
	usersR:userReducer,
});

export default allReducers;