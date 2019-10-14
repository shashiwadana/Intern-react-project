import * as actionType from './ActionType';

export const loadJob = (job) =>({
	type : actionType.LOAD_JOB,
	payload : job
});
