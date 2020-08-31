import {addNewColor, deleteSelectedColor, rateSelectedColor} from './actionCreate';

export const addColor = (data) => (dispatch) => {
  const newColor = {
    ...data,
    rating: 0,
    id: Math.random().toString(36).substring(7)
  }
  dispatch(addNewColor(newColor));
};

export const deleteColor = (id) => (dispatch) => {
  dispatch(deleteSelectedColor(id));
};

export const rateColor = (data) => (dispatch) => {
  dispatch(rateSelectedColor(data));
}