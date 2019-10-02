import * as actionType from '../actions/ActionType';

const defaultCountState={
    count:0,
}

const countReducer= (state=defaultCountState,action) =>{
    switch(action.type){
        case actionType.UPDATE_COUNT:
        {
            console.log("update_count_begins", action, action.payload);

            let newState={
                count:state.count +1
            }
            state = {...state, count: newState }
            console.log("updated",action,action.payload);
            break;
        }
        
    }
    return state;
}
export default countReducer;