import {combineReducers} from 'redux';
import sources from './sources-reducer';
import news from './news-reducer';

const allReducers = combineReducers({
  sources:sources,
  news:news
})

export default allReducers;
