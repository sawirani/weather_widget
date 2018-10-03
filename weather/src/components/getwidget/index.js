import React,{Component} from 'react'
import Data from "../data";
import './getwidget.css'

class GetWidget extends Component{

  render(){
   return(
       this.props.data.map((el,i)=> (
       <Data className='wid' data={el} key = {i} number ={i} delete={this.props.delete}/>
       ))
   )
  }
}

export default GetWidget