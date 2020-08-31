import { INCREMENT, DECREMENT } from './types';


const initialState = 0;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return ++state;
    case DECREMENT:
      return --state;
    default:
      return state;
  }
}
