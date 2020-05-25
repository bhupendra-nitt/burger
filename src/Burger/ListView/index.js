import React from 'react';
import OrderDetail from './OrderDetail';
import { calculateTotalSale } from './helper';

class ListView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchString: null
    }
  }
  render ( ) {
    const { searchString } = this.state;
    const tempOrders = [];
    return (
      <div>
      list view
      <input onChange={e=> this.setState({searchString: e.target.value})}/>
      {this.props.orders.map(ele => {
        if(!searchString) {
          tempOrders.push(ele);
          return <OrderDetail order={ele}/>
        } else {
          if(ele.name.includes(searchString)) {
            tempOrders.push(ele);
            return <OrderDetail order={ele} />
          }
        }
      })}
        {calculateTotalSale(tempOrders)}
      </div>
    )
  }
}

export default ListView;
