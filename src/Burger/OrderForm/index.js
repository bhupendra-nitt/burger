import React from 'react';
import './_orderForm.scss';
import SingleBurger from './SingleBurger';
import { calcuateTotalPrice } from '../ListView/helper';

class OrderForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      personName: '',
      burgerList: []
    }
  }

  handleBurgerAddition = _ => {
    const burgerObject = { 
      buns: 2,
      salad: false,
      cheeseSlice: 0,
      cutlet: 0
    };
    const { burgerList } = this.state;
    const newList = burgerList;
    newList.push(burgerObject);
    this.setState({ burgerList: newList });
  }

  handleOrderUpdate = (index, burger) => {
    const { burgerList, personName } = this.state;
    const newList = burgerList;
    newList[index] = burger;
    this.props.updateOrder(personName, newList);
  }

  updateValue = (index, key, value) => {
    const { burgerList } = this.state;
    const newList = burgerList;
    newList[index][key] = value;
    this.setState({ burgerList: newList })
  }

  render () {
    const { burgerList } = this.state;  
    return (
      <div className="order-form"> 
        Order form
        <div className="order-form__name">
          <label className="order-form__name-label">Person Name</label>
          <input
            className="order-form__name-input" 
            onChange={e => this.setState({personName: e.target.value})}
          />
        </div>
        <div className="order-form__burgers">
          {burgerList.map((ele, index) => {
            return <SingleBurger 
              key={index}
              index={index}
              updateValue={this.updateValue}
            />
          })}
        </div>
        <div
          className="order-form__add-burger"
          onClick={this.handleBurgerAddition}
        > 
          Add Burger
        </div>
      <div className="order-form__total-amount">Total Amount: {calcuateTotalPrice(burgerList)}</div>
      <div
        className="order-form__confirm-order"
        onClick={this.handleOrderUpdate}
      >
        Confirm Order
      </div>
      </div>
    )
  }
}

export default OrderForm;
