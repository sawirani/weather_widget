import React,{Component} from 'react'
import Data from "../data";

class GetWidget extends Component{

  render(){
   return(

     this.props.data.map((el,i)=> (
       <Data data={el} key = {i} delete={this.props.delete}/>
     ))
   )
  }
}

export default GetWidget