import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const configureStore = preloadedState =>
  createStore(reducer, preloadedState, applyMiddleware(thunk));

  console.log(configureStore().getState());
 //const unsubscribe= configureStore().subscribe(()=>console.log('Updated count',configureStore.getState()))
  //configureStore.dispatch(countUpdate())
  //store.dispatch(countUpdate())
  //unsubscribe()

export default configureStore;
