import {GetNews} from '../actions/types';
const InitialState = {
  news:[]
}

export default function(state = InitialState, action){

  switch(action.type){
    case GetNews:
      const news = action.news;
      return{
        news:news
      }
    break;
  }
  return state;
}
