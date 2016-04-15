import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './modules/counter';
import randomWord from './modules/random-word';

export default combineReducers({
  counter,
  randomWord,
  router
});
