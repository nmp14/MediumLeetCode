function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let min = prices[0];
  let bought = false;

  const len = prices.length;
  for (let i = 0; i < len; i++) {
    const next = prices[i + 1];
    const curr = prices[i];
    if (bought) {
      if (curr > next || i === len - 1) {
        console.log(`min ${min}`);
        bought = false;
        maxProfit += (curr - min);
        min = curr;
        console.log(maxProfit);
      }
    }
    if (!bought && (i !== len - 1)) {
      console.log(`Not bought min ${min}`);
      if (next > min) {
        bought = true;
      }
      else if (next < min) {
        min = next;
      }
    }
  }

  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));