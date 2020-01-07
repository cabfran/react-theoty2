import React, { Component } from 'react';
import Car from './Car/Car'
import './App.css';

class App extends Component {
  render () {
    const divStyle = {
      textAlign: 'center'
    }
    return (
      <div style = {divStyle}>
        <h1>Hello world!</h1>
        <Car name='Ford' year={2018}/>
        <Car name='Audi' year={2016}/>
        <Car name='Mazda' year={2010}/>
      </div>
    )
  }
}
export default App;
