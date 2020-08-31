import { PROJECT_LIST } from './types';
import { teamList, projectList } from './teamList';

export const getInitialState = projectList.reduce((a, {id}) => {
  a[id] = [];
  Object.keys(a).map((key, i) => i === 0 ? a[key] = teamList : a[key] = []);
  return a;
}, {});

export const initialState = {
  projectDistribution: getInitialState,
};

export const reducer = (state = initialState, action) => {
  if (action.type === PROJECT_LIST) {
    return {
      ...state,
      projectDistribution: action.payload
    };
  }
  return state;
}

