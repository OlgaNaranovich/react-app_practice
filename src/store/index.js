import {combineReducers} from 'redux';
import {reducer as counterReducer} from './counter/reducer';
import {reducer as distribReducer} from './distribution/reducer';
import {reducer as cardsReducer} from './colorCards/reducer';
import {reducer as userReducer} from './userLogin/reducer';

const reducer = combineReducers({
  counter: counterReducer,
  teamDistribution: distribReducer,
  colorCards: cardsReducer,
  userLogin: userReducer
});

export default reducer;