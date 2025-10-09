const transactions = [1000, -500, 3000, -1000, 4000];

// Filter out the deposits
// convert them to dollars and
// provide the total amount in dollars

const finalBalance = transactions
  .filter(function (amount) {
    return amount > 0;
  })
  .map(function (amount) {
    return (amount / 89)
  })
  .reduce(function (acc, curr) {
    acc = acc + curr;
    return acc
  }, 0);

console.log(finalBalance.toFixed(2));

