export const makeBook = (loans, investors) => {
  const book = [];

  loans.map( (loan, index) => {
    const investor = investors.shift();
    var investedAmount = Math.min(loan.amount, investor.amount);
    book.push({
      loanId    : loan.id,
      investorId: investor.id,
      investedAmount
    })
    investor.invested += investedAmount;
    loan.underwritten += investedAmount;
  });
  return book;
}

//
// const findInvestor = (loans, investors) => {
//   while (loan.underwritten < loan.amount) {
//
//   }
// }
