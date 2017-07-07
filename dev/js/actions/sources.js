import {GetSources} from './types';
import {GetNews} from './types';
import axios from 'axios';
export function Sources(){
  return function(dispatch){
    axios.get('https://newsapi.org/v1/sources?category=')
    .then(response =>{
      dispatch({
        type : GetSources,
        sources:response.data.sources
      })
    }).catch(err =>{
      console.log(err);
    })
  }
}

export  function news(id){
  return function(dispatch){
    axios.get('https://newsapi.org/v1/articles?',{
        params: {
          source: id,
          sortBy:'top',
          apiKey:'4b6e2e6046dc41c4a8f5f3a38809f810'
        }
      })
    .then(response =>{
      dispatch({
        type : GetNews,
        news:response.data.articles
      })
    }).catch(err =>{
      console.log(err);
    })
  }
}
