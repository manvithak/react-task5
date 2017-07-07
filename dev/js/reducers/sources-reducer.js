import {GetSources} from '../actions/types';

const Initial_State = {
  sources:[]
}

export default function (state = Initial_State, action){
  switch(action.type){
    case GetSources:
      return{
        sources:action.sources
      }
    break;
  }
  return state;
}
