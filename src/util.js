export const makeBook = (loans, investors) => {
  let deal = [];
  let remainder = [];

  if(loans.length && investors.length) {
    const loan = loans[0];
    const investor = investors[0];
    const investedAmount = Math.min((loan.amount - loan.underwritten), (investor.amount - investor.invested));

    // record transaction
    investor.invested += investedAmount;
    loan.underwritten += investedAmount;
    deal = [{
      loanId    : loan.id,
      investorId: investor.id,
      investedAmount
    }];

    // recurse if any remaining loan / investor amounts
    if ( (loan.amount - loan.underwritten) && investors.length ) {
      remainder = makeBook(loans, investors.slice(1))
    } else if ( loans.length && (investor.amount - investor.invested) ) {
      remainder = makeBook(loans.slice(1), investors)
    } else if ( loans.length > 1 && loans.length > 1 ) {
      remainder = makeBook(loans.slice(1), investors.slice(1))
    }
  }

  return [...deal, ...remainder];
}
