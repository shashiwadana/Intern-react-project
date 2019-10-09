import * as actionType from '../actions/ActionType';


const defaultUserState = {
   users:[],
}

const userReducer = (state = defaultUserState , action) => {
    switch(action.type){
        case actionType.USER_DATA:
        {
            console.log("update_user_begins",action,action.payload);
            
            let newState={
                users: [...state.users, ...action.payload]
            }
            state = {...state,users: newState }          
            break;
         
        } 
           
    }
   
    console.log(state);
    return state;
   
}

export default userReducer;