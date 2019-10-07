import * as actionType from '../actions/ActionType';

const defaultUserState={
    Name:'',
    Age:10

}
const userReducer =(state=defaultUserState,action) =>{
    switch(action.type){
        case actionType.USER_DATA:{
            console.log("update_user_begins",action);
            let newState ={
                Name:"adassd",
                
            }
            return {Name:state.Name}
        }
        default:
        return state
    }
}

export default userReducer;