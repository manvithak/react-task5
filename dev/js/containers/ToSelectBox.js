import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import DisplayInfo from './DisplayInfo';
import {news} from '../actions/sources';

class ToSelectBox extends Component{
  constructor(){
    super();
    this.state = {
      id:'',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.news(e.target.value);
  }
  componentDidMount(){
    this.setState({id:this.props.match.params.source});
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState({id:nextProps.match.params.source})
  }
  render(){
    if(!this.state.id){
      return<p></p>
    }
    let ids = filterId(this.props.ids,this.state.id);
    return(
      <div>
        <h2>{this.state.id}</h2>
        <select ref="userInput" defaultValue="" onChange = {this.handleChange}>
          <option value="" disabled >News</option>
          {
            ids.map(function(news,index) {
              return <option key={index} value={news}  >{news}</option>;
            })
          }
        </select>
        {this.props.news?<DisplayInfo/>:null}
      </div>
    )
  }
}
function filterId(sources,id){
    var ids = [];
    sources.map((source,index) => {
      if(source.category === id)
        ids.push(source.id);
    })
    return ids;
}
function mapStateToProps(state){
  return{
    ids:state.sources.sources,
    news:state.news
  }
}
export default connect(mapStateToProps,{news})(ToSelectBox);
