import * as actionType from '../actions/ActionType';


const defaultUserState = {
   users: undefined,
   errorMsg:"x"


}

const userReducer = (state = defaultUserState , action) => {
    switch(action.type){
        case actionType.USER_DATA:
        {
            console.log("update_user_begins",action,action.payload);

            let newState ={
                users:action.payload,
                errorMsg:""
            }
            state = {...state, users: newState }          
            break;
           
        }     
    }
    console.log('state is ');
    console.log(state);
    return state;
}

export default userReducer;