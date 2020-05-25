import  { bunPrice, cheeseSlicePrice, cutletPrice, saladPrice  } from '../constants';

export const calculatePriceOfBurger = burger => {

  const totalBunPrice = burger.buns * bunPrice;
  const totalCheeseSlicePrice = burger.cheeseSlice * cheeseSlicePrice;
  const totalCutletPrice = burger.cutlet * cutletPrice;
  const totalSaladPrice = burger.salad ? saladPrice : 0;

  return (totalBunPrice + totalCheeseSlicePrice + totalCutletPrice + totalSaladPrice);
};

export const calcuateTotalPrice = list => {
  let sum = 0;
  for(let i = 0; i< list.length; i++) {
    sum = sum +calculatePriceOfBurger(list[i]); 
  }
  return sum;
}

export const calculateTotalSale = (list) => {
  let sum = 0;
  list.map(ele => {
    ele.list.map(innerElem => {
      sum = sum + calculatePriceOfBurger(innerElem);
    })
  })
  return sum;
}