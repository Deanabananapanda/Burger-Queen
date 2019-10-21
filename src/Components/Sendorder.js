import React, {Component} from 'react';

class SendOrder extends Component {
    constructor() {
        super();
    }
render() {
    return(
    <div className="thirdcontainer">
        <h1>Please confirm your order</h1>
        <div>
        {<img className="cocaAzul" src="https://pbs.twimg.com/media/BVjTuebCMAA01nY.jpg:large"></img>}
        <p>Earth Burger $80</p>

        {<img className="cocaAzul" src="https://i.pinimg.com/originals/71/21/fa/7121fa71eeae93aa2e4aae834d0c2d95.jpg"></img>}
         <p>Blue CocaCola $30</p>

    {<img src="https://i.ibb.co/JjBj9ZD/giphy.gif"></img>}
        <p> TOTAL: $110</p> 
    <a href="/App2">
     <button className="buttonStyle">Back to menu</button>
     </a>
    </div>
    <a href="/Kitchenconfirm">
     <button className="buttonStyle">SUBMIT</button>
     </a>
    </div>
    )
    }
}

export default SendOrder;