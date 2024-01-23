/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let max = -1;
  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) min = prices[i];
    let state = prices[i] - min;
    if (state > max) max = state;
  }
  return max;
};
