import React from 'react';
import ReactDOM from 'react-dom';
import {makeBook} from '../util';

it('makeBook can match a large investor to a single smaller loan', () => {
  const loans = [{id: 0, amount: 1e6, underwritten: 0}];
  const investors = [{id: 0, amount: 1.5e6, invested: 0}];
  const expectedBook = [{loanId: 0, investorId: 0, investedAmount: 1e6}];
  const result = makeBook(loans, investors);

  expect(result).toMatchObject(expectedBook);
});
