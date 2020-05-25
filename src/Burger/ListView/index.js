import React from 'react';
import './_listView.scss';
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
      <div className="list-view">
         {this.props.orders.length === 0 ? <div className="list-view__no-orders">No orders</div> :
         <React.Fragment>
          <input
            className="list-view__search-input"
            onChange={e=> this.setState({searchString: e.target.value})}
          />
        
        { this.props.orders.map(ele => {
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
          <div>Total Amount: {calculateTotalSale(tempOrders)}</div>
          </React.Fragment>
       }
      </div>
    )
  }
}

export default ListView;
