import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Spinner from 'react-spinkit';
import {connect} from 'react-redux';
import axios from 'axios';

class DisplayInfo extends Component{

 render(){
   if(this.props.newsInfo.news.length==0){
     return(
       <div>
         <h2>News</h2>
         <Spinner name='circle'/>
       </div>
     )
   }
   return(
     <div>
       <h2>News</h2>
         {
           this.props.newsInfo.news.map(function(news,index) {
             return <p key={index}  >{news.description}</p>;
           })
         }
     </div>
   )
 }
}
function mapStateToProps(state){
  return{
    newsInfo:state.news
  }
}
export default connect(mapStateToProps)(DisplayInfo);
