import React from 'react';
import ReactDOM from 'react-dom';
import {makeBook} from '../util';

/*****
loans    :  ______
investors:  _____________
*/

it('makeBook can match a large investor to a single smaller loan', () => {
  const loans = [{id: 0, amount: 1e6, underwritten: 0}];
  const investors = [{id: 0, amount: 1.5e6, invested: 0}];
  const expectedBook = [{loanId: 0, investorId: 0, investedAmount: 1e6}];
  const result = makeBook(loans, investors);

  expect(result).toMatchObject(expectedBook);
});

/*****
loans    :  ______ ___
investors:  _____________
*/
it('makeBook can match a large investor to multiple smaller loans', () => {
  const loans = [{id: 0, amount: 1e6, underwritten: 0}, {id: 1, amount: 1e5, underwritten: 0}, {id: 2, amount: 1e5, underwritten: 0}];
  const investors = [{id: 0, amount: 1.5e6, invested: 0}];
  const expectedBook = [{loanId: 0, investorId: 0, investedAmount: 1e6}, {loanId: 1, investorId: 0, investedAmount: 1e5}, {loanId: 2, investorId: 0, investedAmount: 1e5}];
  const result = makeBook(loans, investors);

  expect(result).toMatchObject(expectedBook);
});

/*****
loans    :  ______ ___ _________
investors:  _____________
*/
it('makeBook can match a large investor to multiple loans exceeding the available investment', () => {
  const loans = [{id: 0, amount: 1e6, underwritten: 0}, {id: 1, amount: 1e5, underwritten: 0}, {id: 2, amount: 1e6, underwritten: 0}];
  const investors = [{id: 0, amount: 1.5e6, invested: 0}];
  const expectedBook = [{loanId: 0, investorId: 0, investedAmount: 1e6}, {loanId: 1, investorId: 0, investedAmount: 1e5}, {loanId: 2, investorId: 0, investedAmount: 4e5}];
  const result = makeBook(loans, investors);

  expect(result).toMatchObject(expectedBook);
});
