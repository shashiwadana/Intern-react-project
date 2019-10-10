import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
//import allReducers from '../shared/reducers/index';
const configureStore = preloadedState =>
  createStore(reducer, preloadedState, applyMiddleware(thunk));

  //console.log(configureStore().getState());


export default configureStore;
