import { ADD_COLOR, REMOVE_COLOR, RATE_COLOR} from './types';

export const addNewColor = (data) => ({type: ADD_COLOR, payload: data});
export const deleteSelectedColor = (id) => ({type: REMOVE_COLOR, payload: id});
export const rateSelectedColor = (data) => ({type: RATE_COLOR, payload: data});



