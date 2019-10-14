import * as actionType from '../actions/ActionType';

const defaultJobState ={
    job:undefined,
   
}

const jobReducer =(state=defaultJobState,action) =>{
    switch(action.type){
        case actionType.LOAD_JOB:
        let newState ={
            job:action.payload,
           
        }
        state = {...state, job: newState }
        break;
    }
    return state;
}

export default jobReducer;