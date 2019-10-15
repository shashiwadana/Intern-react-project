import * as actionType from './ActionType';


export function sendJob(job){
	return dispatch => {
		dispatch(loadJob(job));
	}
}

export const loadJob = (job) =>({
	type : actionType.LOAD_JOB,
	payload : job
});