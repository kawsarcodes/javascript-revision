/*

Task-8:
Calculate the total budget required to buy electronics.

laptop = 35000 tk
tablet = 15000 tk
mobile = 20000 tk

Write a function named calculateElectronicsBudget that takes the number of
laptop, tablets, and mobile and returns the total money required.

*/

function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const total =
    (laptopQty * laptopPrice) +
    (tabletQty * tabletPrice) +
    (mobileQty * mobilePrice);

  return total;
}

console.log(calculateElectronicsBudget(1, 2, 1));