import {PROJECT_LIST, IS_RENDER} from './types';

export const setProjectList = (data) => ({type: PROJECT_LIST, payload: data});
export const isComponentChanged = () => ({type: IS_RENDER});



