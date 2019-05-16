export const makeBook = (loans, investors) => {
  const book = [];

  for(var loan of loans) {
    if (loan.underwritten < loan.amount) {
      for(var investor of investors) {

        const investedAmount = Math.min((loan.amount - loan.underwritten), (investor.amount - investor.invested));
        book.push({
          loanId    : loan.id,
          investorId: investor.id,
          investedAmount
        })
        investor.invested += investedAmount;
        loan.underwritten += investedAmount;

      }
    }
  }
  return book;
}
