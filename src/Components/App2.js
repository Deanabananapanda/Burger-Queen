import React, { Component } from 'react';
import Item from './Item';
import Button from './Button';
import _ from 'lodash';
import RedirectFromMenuToSendOrder from './RedirectFromMenuToSendOrder';


class App2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [
        {
          image : "hambuerger.jfif",
          name  : "Earth Burger",
          portion : "350g",
          price   : 80
        },
        {
            image : "coca.jpg",
            name  : "Blue Coca-Cola ",
            portion : "250 ml",
            price   : 30
          }
      ]
    }
  }
  
  _remove(position){
    let { data } = this.state;

    let newData = [
      ...data.slice(0, position),
      ...data.slice(position + 1),
    ]

    this.setState({ data : newData });

  }

  _add(){
    let { data } = this.state;
    let newData = [
      ...data,
      {
        image : "pizzza.jpg",
        name  : "Galactic Pizza",
        portion : "500g",
        price   : 130
      }
    ]
    this.setState({ data : newData });
  }

  _getTotal(){
    return _.sumBy(this.state.data, function(o) { return o.price; });;
  }


  render() {
    return (
      <div className="app2">
        <h1>MENÚ</h1>
        <div className="todo-list">
          {this.state.data.map(
            (item,index) =>
              <Item data={item} key={index} onRemove={ () => this._remove(index)} />
            )
          }
        </div>
        <div className="footer">
          <Button
            onClick={this._add.bind(this)}
            name="Add item"
          />
          <h4>$ {this._getTotal()}</h4>
          <RedirectFromMenuToSendOrder />
        </div>
      </div>
    );
  }
}

export default App2;