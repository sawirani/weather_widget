import React,{Component} from 'react'
import './widget.css'

class Widget extends Component{

  render(){
    return(
      <div className='wid'>
        <h6 align="center">{this.props.city}</h6>
        <hr/>
        <br/>
          Температура: {this.props.temp}
          <button className='button' onClick={()=>{this.props.delete(this.props.number)}}>Удалить</button>
      </div>
    )
  }


}

export default Widget