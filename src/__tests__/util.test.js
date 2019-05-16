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

/*****
loans    :  __________________
investors:  _____________
*/
it('makeBook can match a large loan exceeding the available investment', () => {
  const loans = [{id: 0, amount: 1e7, underwritten: 0}];
  const investors = [{id: 0, amount: 1.5e6, invested: 0}];
  const expectedBook = [{loanId: 0, investorId: 0, investedAmount: 1.5e6}];
  const result = makeBook(loans, investors);

  expect(result).toMatchObject(expectedBook);
});

/*****
loans    :  __________________
investors:  _______ ______
*/
it('makeBook can match a large loan exceeding the available multiple investment', () => {
  const loans = [{id: 0, amount: 1e7, underwritten: 0}];
  const investors = [{id: 0, amount: 1.5e6, invested: 0}, {id: 1, amount: 1.5e6, invested: 0}];
  const expectedBook = [{loanId: 0, investorId: 0, investedAmount: 1.5e6}, {loanId: 0, investorId: 1, investedAmount: 1.5e6}];
  const result = makeBook(loans, investors);

  expect(result).toMatchObject(expectedBook);
});

/*****
loans    :  __________ __________ __________
investors:  ______ _______ ________ _____
*/
it('makeBook can match multiple loans with multiple investment', () => {
  const loans = [{id: 0, amount: 1e6, underwritten: 0}, {id: 1, amount: 1e6, underwritten: 0}, {id: 2, amount: 1e6, underwritten: 0}];
  const investors = [{id: 0, amount: 6e5, invested: 0}, {id: 1, amount: 7e5, invested: 0}, {id: 2, amount: 8e5, invested: 0}, {id: 3, amount: 5e5, invested: 0}];
  const expectedBook =  [ { loanId: 0, investorId: 0, investedAmount: 6e5 },
                          { loanId: 0, investorId: 1, investedAmount: 4e5 },
                          { loanId: 1, investorId: 1, investedAmount: 3e5 },
                          { loanId: 1, investorId: 2, investedAmount: 7e5 },
                          { loanId: 2, investorId: 2, investedAmount: 1e5 },
                          { loanId: 2, investorId: 3, investedAmount: 5e5 } ];
  const result = makeBook(loans, investors);
  expect(result).toMatchObject(expectedBook);
});
