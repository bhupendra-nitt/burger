import React from 'react';
import { calculatePriceOfBurger } from '../helper';  

class OrderDetail extends React.PureComponent {
  render () {
    const { order } = this.props;

    return (
      <div>
        <div>
          Ordered by: {order.name}
          <div>
            {order.list.map(ele => {
              const price = calculatePriceOfBurger(ele);
            return <div>{JSON.stringify(ele) }, {price}</div>
            })}
          </div>
        </div>

      </div>
    )
  }
}

export default OrderDetail;
