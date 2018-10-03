import React,{Component} from 'react'
import './widget.css'

class Widget extends Component{

  render(){
    return(
      <div className='wid'>
        <p>{this.props.city}</p>
        <br/>
          Температура: {this.props.temp}
          <button className='button' onClick={()=>{this.props.delete(this.props.number)}}>Удалить</button>
      </div>
    )
  }


}

export default Widget