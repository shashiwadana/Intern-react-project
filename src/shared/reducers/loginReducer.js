import * as actionType from '../actions/ActionType';

const loginReducer =(state={
    isloginPending: false,
    isloginSuccess:false,
    isloginError:null
},action)=>{
    switch(action.type){
        case actionType.LOGIN_BEGINS:
        {
            
            state={...state,isloginPending:action.isloginPending}
            break;
        }
        case actionType.LOGIN_COMPLETE:
        {
            
            state={...state,isloginSuccess:action.isloginSuccess}
            break;
        }
        case actionType.LOAD_WORKERS_ERROR:
        {
           
            state={...state,isloginError:action.isloginError}
            break;
        }
    }
    console.log(state);
    return state;
}
export default loginReducer;