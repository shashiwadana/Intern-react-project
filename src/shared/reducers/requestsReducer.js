import * as actionType from '../actions/ActionType';

const defaultState ={
    reqsts :undefined,
    loadingMsg :undefined,
    errorMsg :undefined
}

const requestsReducer =(state=defaultState,action)=>{
    switch(action.type){
        case actionType.REQUEST_FETCHING_BEGIN:
        {
            let newState = {
                reqsts:undefined,
                loadingMsg:action.loadingMsg,
                errorMsg:""
            }
            state ={...state,reqsts:newState}
            break;
        }
        case actionType.REQUEST_FETCHING_COMPLETED:
        {
            let newState={
                reqsts:action.payload,
                loadingMsg:action.loadingMsg,
                errorMsg:""
            }
            state={...state,reqsts:newState}
            break;
        }
        case actionType.REQUEST_FETCHING_ERROR:
        {
            let newState={
                reqsts:undefined,
                loadingMsg:"",
                errorMsg:action.errorMsg
            }
            state={...state,reqsts:newState}
            break;
        }
    }
    return state;
}

export default requestsReducer;