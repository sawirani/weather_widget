import React, {Component} from 'react'

class AddWidget extends Component {

  constructor(){
    super();

    this.state = {
      city: ''
    }
  }

  setCity = (event) =>{
    this.setState({
      city: event.target.value
    })
  };

  render() {

    return (
      <div>
        <input type='text' value={this.state.city} onChange={this.setCity}/>
        <button onClick={()=>{this.props.data(this.state.city)}}> Добавить город</button>
      </div>
    )
  }
}

export default AddWidget;