import * as actionType from '../actions/ActionType';


const defaultUserState = {
   users:[],
   loadingMsg: undefined,
   errorMsg:undefined
}

const userReducer = (state = defaultUserState , action) => {
    switch(action.type){
        
        case actionType.USER_DATA_BEGINS:
        {
            console.log("update_user_begins",action,action.payload);
            
            let newState={
                users: [],
                loadingMsg:action.loadingMsg,
                errorMsg:""
            }
            state = {...state,users: newState}          
            break;
           
        } 
        
        case actionType.USER_DATA:
        {
            console.log("update_user",action,action.payload);
            
            let newState={
                users:[...state.users,...action.payload],
                loadingMsg :action.loadingMsg,
                errorMsg :""
            }
            state = {...state,users: action.payload}          
            break;
           
        } 
        case actionType.USER_DATA_ERROR:
        {
            //console.log("update_user",action,action.payload);
            
            let newState={
                users:[],
                loadingMsg :"",
                errorMsg :action.errorMsg
            }
            state = {...state,users: newState}          
            break;
           
        }

        
           
    }
    console.log(actionType.USER_DATA_COMPLETE, state);
    console.log(state);
    
    return state;
   
}

export default userReducer;