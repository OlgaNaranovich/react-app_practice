import {setProjectList} from './actionCreate';
import {teamList} from './teamList';
import {initialState} from './reducer';

const filterById = (id) => {
  const filteredItem = teamList.filter(person => person.id === id);
  return filteredItem[0];
}

const addPerson = (persId, colId) => {
  const payload = {...initialState}.projectDistribution;
  if (payload[colId]) payload[colId].push(filterById(persId));
  return payload;
}

const removePerson = (persId, colId) => {
  const payload = {...initialState}.projectDistribution;
  if (payload[colId]) {
    payload[colId] = payload[colId].filter((personInfo) => personInfo.id !== persId);
  }
  return payload;
}
export const addPersonToCol = (persId, colId) => (dispatch) => {
  const data = addPerson(persId, colId);
  dispatch(setProjectList(data));
  // dispatch(isComponentChanged());
};

export const removePersonFromCol = (persId, colId) => (dispatch) => {
  const data = removePerson(persId, colId);
  dispatch(setProjectList(data));
};