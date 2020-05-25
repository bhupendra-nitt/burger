import React from 'react';
import './_orderDetail.scss';
import { calculatePriceOfBurger } from '../helper';  

class OrderDetail extends React.PureComponent {
  render () {
    const { order } = this.props;

    return (
      <div className="order-detail">
        <div className="order-detail__name">
          Ordered by: <span>{order.name}</span>
          <div className="order-detail__list">
            {order.list.map(ele => {
              const price = calculatePriceOfBurger(ele);
            return <div className="order-detail__list__detail">
              <div className="order-detail__list__detail__buns">
                <div className="order-detail__list__detail__buns--label">
                  Buns
                </div>
                <div className="order-detail__list__detail__buns--value">
                  {ele.buns}
                </div> 
              </div>
              <div className="order-detail__list__detail__salad">
                <div className="order-detail__list__detail__salad--label">
                  Salad
                </div>
                <div
                  className="order-detail__list__detail__salad--value"
                  type="checkbox"
                >{ele.salad}</div>
              </div>
              <div className="order-detail__list__detail__cheese-slice">
                <div
                  className="order-detail__list__detail__cheese-slice--label"
                >
                  Cheese Slice
                </div>
                <div
                  className="order-detail__list__detail__cheese-slice--value"
            >{ele.cheeseSlice}</div>
              </div>
              <div className="order-detail__list__detail__cutlet">
                <div
                  className="order-detail__list__detail__cutlet--label"
                >
                  Cutlet
                </div>
                <div
                  className="order-detail__list__detail__cutlet--value"
            >{ele.cutlet}</div>
              </div>
            </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default OrderDetail;
