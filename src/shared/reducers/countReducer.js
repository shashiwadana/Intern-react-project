import * as actionType from '../actions/ActionType';



const countReducer = (state={count:0},action) =>{
    switch(action.type){
        case actionType.UPDATE_COUNT:
        {
            console.log("update_count_begins", action);
            /*
            let newState={
                count:state.count+1
                
            }*/
            //console.log("new state " +newState.count);
            //state = { ...state, count: newState }
            //console.log("updated ",state.count);
            //break;
            return {count:state.count+1}
        }
        default:
        return state
        
    }
    //return state;
    
}
export default countReducer;