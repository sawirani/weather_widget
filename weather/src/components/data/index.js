import React, {Component} from 'react'
import Widget from '../widget'
import axios from 'axios'

class Data extends Component{

  constructor(){
    super();

    this.state = {
      city: '',
      temp: '',
    }
  }

  componentDidMount() {
    let city;
    let temp;

    axios.get(
      'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + this.state.city +'") and u="c" &format=json&env=store://datatables.org/alltableswithkeys')
      .then(function (response) {
        temp = response.data.query.results.channel.item.condition.temp;
        city = response.data.query.results.channel.location.city;

        this.setState({
          city,temp
        });
      }.bind(this));
  }



  render(){

    if (this.props.data){
      this.state.city=this.props.data;
    }

    return(

      <div>
      <Widget city = {this.state.city} temp = {this.state.temp} number ={this.props.number} delete = {this.props.delete}/>
      </div>
    )
  }

}

export default Data