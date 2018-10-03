import React,{Component} from 'react'
import './widget.css'

class Widget extends Component{

  render(){
    return(
      <div className='wid'>
        Город:{this.props.city}
        <br/>
          Температура: {this.props.temp}
          <button onClick={()=>{this.props.delete(this.props.key)}}>Удалить</button>
      </div>
    )
  }


}

export default Widget