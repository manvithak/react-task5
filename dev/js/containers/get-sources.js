import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Sources} from '../actions/sources';
import {connect} from 'react-redux';
import ToSelectBox from './ToSelectBox';
import {Link,HashRouter,Route} from 'react-router-dom';
import Spinner from 'react-spinkit';
import _ from 'lodash';

class GetSources extends Component{
  componentWillMount(){
    this.props.Sources();
  }
  render(){
    const sources = this.props.categories;
    if(this.props.sources.length == 0){
      return <Spinner name='circle'/>
    }
    return(

      <HashRouter>
        <div>
          {this.props.sources.map((source,index) => {
            return(
              <div  key = {index}>
                <li><Link to = {'/ToSelectBox/'+source}>{source}</Link></li>
              </div>
            )
          })}
        <Route path = '/ToSelectBox/:source' component = {ToSelectBox}/>
        </div>
      </HashRouter>
    )
  }
}

function filterList(sources){
  var categories = [];
  sources.map((source,index) => {
    categories[index] = source.category;
  })
  return categories;
}

function mapStateToProps(state){
  if(state.sources===null)
   return {
     sources:state.sources
   }
  else{
    let sources = state.sources.sources;
    let categories = filterList(sources);
    var uniqCategories = _.uniqWith(categories);
    return{
      categories:sources,
      sources:uniqCategories
    }
  }
}

export default connect(mapStateToProps,{Sources} )(GetSources);
