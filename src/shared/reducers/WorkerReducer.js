import * as actionType from '../actions/ActionType';


const defaultWorkerState ={
    workers:[],
    loadingMsg:undefined,
    errorMsg:undefined
}

const workerReducer =(state=defaultWorkerState,action) =>{
switch(action.type){
    case actionType.LOAD_WORKERS_BEGINS:
    {
        let newState ={
            workers:[],
            loadingMsg:action.loadingMsg,
            errorMsg:""
        }
        state = {...state, workers: newState }
        break;
    }
    case actionType.LOAD_WORKERS_COMPLETE:
    {   
        console.log("update_worker",action,action.payload);
        let newState ={
            workers:[...state.workers,...action.payload],
            loadingMsg:action.loadingMsg,
            errorMsg:""
        }
        state ={...state,workers : newState}
        break;
    }
    case actionType.LOAD_WORKERS_ERROR:{
        let newState={
            workers:[],
            loadingMsg:"",
            errorMsg:action.errorMsg
        }
        state ={...state,workers: newState}
        break;
    }
}
console.log(state);
return state;


}
export default workerReducer;