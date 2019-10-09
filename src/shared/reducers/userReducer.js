import * as actionType from '../actions/ActionType';


const defaultUserState = {
   users:[],
}

const userReducer = (state = defaultUserState , action) => {
    switch(action.type){
        case actionType.USER_DATA:
        {
            console.log("update_user_begins",action,action.payload);
            
            state = {users: [...state.users, ...action.payload]  }          
            break;
           
          
        } 
           
    }
   
    console.log(state);
    return state;
}

export default userReducer;