import React from 'react';
import {makeBook} from './util';
import './App.css';

function App() {
  const loans = [{id: 0, amount: 1e6, underwritten: 0}, {id: 1, amount: 1e6, underwritten: 0}, {id: 2, amount: 1e6, underwritten: 0}];
  const investors = [{id: 0, amount: 6e5, invested: 0}, {id: 1, amount: 7e5, invested: 0}, {id: 2, amount: 8e5, invested: 0}, {id: 3, amount: 5e5, invested: 0}];
  const book = makeBook(loans, investors);

  return (
    <div className="App">
      <div>
        <h3>Loans</h3>
        <div>
          {loans.map( (loan, index) => (
            <div key={index}
              style={{width: (loan.amount/50000) + 'em'  }} >
              <h4>Loan ID: {loan.id}</h4>
              <b>{loan.amount}</b>
            </div>))}
        </div>
      </div>
      <div>
        <h3>Investors</h3>
        <div>
          {investors.map( (investor, index) => (
            <div key={index}
              style={{width: (investor.amount/50000) + 'em'  }} >
              <h4>Investor ID: {investor.id}</h4>
              <b>{investor.amount}</b>
            </div>))}
        </div>
      </div>
      <div>
        <h3>Book</h3>
        <div>
          {book.map( (deal, index) => (
            <div key={index}
              style={{width: (deal.investedAmount/50000) + 'em'  }} >
              <h4>Loan ID: {deal.loanId}</h4>
              <h4>Investor ID: {deal.investorId}</h4>
              <b>{deal.investedAmount}</b>
            </div>))}
        </div>
      </div>
    </div>
  );
}

export default App;
