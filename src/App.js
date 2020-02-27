import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {


  state = {
    pizzas: []
    
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzaObj => this.setState({pizzas: pizzaObj}))
  }

  editBtnHandler = (pizza) => {
    console.log(pizza)
  }

  render() {
    console.log(this.state.pizzas)
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
        
        
        />
        <PizzaList
          pizzasArray = {this.state.pizzas}
          editBtn = {this.editBtnHandler}
        />
      </Fragment>
    );
  }
}

export default App;
