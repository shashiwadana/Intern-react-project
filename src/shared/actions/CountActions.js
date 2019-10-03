import * as actionType from './ActionType';

export const countUpdate = (count) =>({
    type:actionType.UPDATE_COUNT,
    payload:count

});