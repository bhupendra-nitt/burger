import React from 'react';
import './_burger.scss';
import { LIST_ORDER, ADD_ORDER } from './constants';
import OrderForm from './OrderForm';
import ListView from './ListView';

class Burger extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      currentStep: ADD_ORDER,
      orders: []
    }
  }
  
  render ( ) {
    return (
      <div className="burger">
        <div
          className="burger__add-order"
          onClick={() => this.setState({currentStep: ADD_ORDER})}
        >
          Add order
        </div>
        <div
          className="burger__list-orders"
          onClick={() => this.setState({ currentStep: LIST_ORDER })}
        > 
          List Orders
        </div>
        {this.getCurrentView()}
      </div>
    )
  }

  handleOrderUpdate = (name, list) => {
    const order = {
      name: name,
      list: list
    }
    const newOrderList = this.state.orders;
    newOrderList.push(order);
    this.setState({ orders: newOrderList });
  }

  getCurrentView = _ => {
    const { currentStep, orders } = this.state;

    switch(currentStep) {
      case ADD_ORDER:
        return <OrderForm updateOrder={this.handleOrderUpdate}/>;
      case LIST_ORDER:
        return <ListView orders={orders}/>;
      default:
        return <OrderForm updateOrder={this.handleOrderUpdate}/>;
    }
  }

}

export default Burger;
