import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: ""
    }
  }
  componentDidMount(){
    const URL = 'https://gdl003burger.herokuapp.com/menuSpace';
    axios.get(URL)
      .then(res => {
        const meal = res.data.meals; 
        if(typeof meal === 'object'){
          this.setState({ meal });
        }
      })
      .catch(error => {
        console.log(error);
      });
}
render() {
    return (
      <div className="App">
      </div>
    );
  }
}
export default App;
