import React, { Component } from 'react';
import './App.css';
import AddWidget from "./components/addwidget";
import GetWidget from "./components/getwidget";
import Nav from "./components/navs"

class App extends Component {

  AddCity = (city) => {
    let cities = [...this.state.cities];
    cities.push(city);
    this.setState({
      cities
    })
  };

  DelCity = (i) => {
    let cities = [...this.state.cities];
    cities.splice(i,1);
    this.setState({
      cities
    })
  };

  constructor(){
    super();

    this.state = {
        cities: [],
    }
  }



  render() {
    return (
      <div className='fon'>
        <Nav/>
        <div className='contener'>
          <AddWidget data={this.AddCity}/>
          <div className='contener2'>
            <GetWidget data = {this.state.cities} delete = {this.DelCity}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
