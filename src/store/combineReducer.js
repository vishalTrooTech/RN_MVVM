import {combineReducers} from '@reduxjs/toolkit';
import {homeReducer} from './reducers/home';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
