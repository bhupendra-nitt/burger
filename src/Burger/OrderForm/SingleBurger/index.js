import React from 'react';
import './_singleBurger.scss';

class SingleBurger extends React.Component {
  render () {
    const { index, updateValue } = this.props;
    return (
      <div className="single-burger">
        <div className="single-burger__buns">
          <div className="single-burger__buns--label">
            Buns
          </div>
          <div className="single-burger__buns--value">
            2
          </div> 
        </div>
        <div className="single-burger__salad">
          <div className="single-burger__salad--label">
            Salad
          </div>
          <input
            className="single-burger__salad--value"
            type="checkbox"
            onClick={e => updateValue(index, 'salad', e.target.value)} 
          />
        </div>
        <div className="single-burger__cheese-slice">
          <div
            className="single-burger__cheese-slice--label"
          >
            Cheese Slice
          </div>
          <input
            className="single-burger__cheese-slice--value"
            onChange={e =>  updateValue(index, 'cheeseSlice', e.target.value)}
            type="number"
          />
        </div>
        <div className="single-burger__cutlet">
          <div
            className="single-burger__cutlet--label"
          >
            Cutlet
          </div>
          <input
            className="single-burger__cutlet--value"
            onChange={e =>  updateValue(index, 'cutlet', e.target.value)}
            type="number"
          />
        </div>
      </div>
    )
  }
}

export default SingleBurger;
