import React, { Component } from 'react';
import Car from './Car/Car'
import './App.css';

class App extends Component {
  
  state ={
    cars: [
      {name:'Zhiguli', year:2018 },
      {name:'Audi', year:2016 },
      {name:'Mazda', year:2010 }
    ],
    pageTitle: 'React components'
  }
  changeTitlteHandler = (newTitle) => {
this.setState({
  pageTitle: newTitle
})

  }
  handleInput = (event) => {
this.setState({
  pageTitle: event.target.value
})
  }

  render () {
    const divStyle = {
      textAlign: 'center'
    }
     
    return (
      <div style = {divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <input  type="text" onChange={this.handleInput} />

        <button
         onClick={this.changeTitlteHandler.bind(this, 'changed!')}>
          Change title
        </button>


        {this.state.cars.map((car, index) => {
          return (
            <Car 
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitlteHandler(car.name)}
            />
          )
        }) }
        {/* <Car
         name={cars[0].name}
         year={cars[0].year}
         onChangeTitle={this.changeTitlteHandler.bind(this, cars[0].name)}
         />
        <Car
         name={cars[1].name} 
         year={cars[1].year}
         onChangeTitle={() => this.changeTitlteHandler(cars[1].name)}
         />
        <Car 
         name={cars[2].name}
         year={cars[2].year}
         onChangeTitle={() => this.changeTitlteHandler(cars[2].name)}
         />
      */}
      </div>
    )
  }
}
export default App;
