import { ADD_COLOR, RATE_COLOR, REMOVE_COLOR } from './types';
import { colorsList } from './colorsList';

export const reducer = (state = colorsList, action) => {
  switch (action.type) {
    case ADD_COLOR:
      return [
        ...state,
        color({}, action)
      ]
    case RATE_COLOR:
      return state.map(item => color(item, action))
    case REMOVE_COLOR:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

const color = (state = {}, action) => {
  switch (action.type) {
    case ADD_COLOR:
      return {
        id: action.payload.id,
        title: action.payload.title,
        color: action.payload.color,
        rating: action.payload.rating
      }
    case RATE_COLOR:
      return state.id !== action.payload.id ?
        state :
        {
        ...state,
        rating: action.payload.rating
      }
    default:
      return state;
  }
}

