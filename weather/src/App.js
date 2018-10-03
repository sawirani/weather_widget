import React, { Component } from 'react';
import './App.css';
import AddWidget from "./components/addwidget";
import GetWidget from "./components/getwidget";

class App extends Component {

  AddCity = (city) => {
    let widget = [...this.state.cities];
    widget.push(city);
    this.setState({
      widget
    })
  };

  DelCity = (i) => {
    let widget = [...this.state.cities];
    widget.splice(i,1);
    this.setState({
      widget
    })
  };

  constructor(){
    super();

    this.state = {
      cities: ['Москва'],
    }
  }

  render() {
    return (
      <div>
        <AddWidget data={this.AddCity}/>
        <GetWidget data = {this.state.cities} delete = {this.DelCity}/>
      </div>
    );
  }
}

export default App;
