import React, { Component } from 'react';
import './App.scss';
import dateFns from 'date-fns';
import Header from './js/Header';
import Main from './js/Main';

class App extends Component {
  state = {
    startDate: dateFns.startOfMonth(new Date()),
    numberOfDays: dateFns.getDaysInMonth(new Date()),
  };

  handleUpdate = () => {
    this.setState({
      startDate: dateFns.startOfDay(document.getElementById('start').value),
      numberOfDays: document.getElementById('days').value,
    });
  };

  render() {
    const { startDate, numberOfDays } = this.state;
    console.log('start date = ' + startDate);
    const endDate = dateFns.addDays(startDate, numberOfDays - 1);
    console.log('end date = ' + endDate);
    const totalMonths = dateFns.differenceInCalendarMonths(endDate, startDate);
    console.log('0 indexed # of months = ' + totalMonths);
    return (
      <div className="app-container">
        <header>
          <Header handleUpdate={this.handleUpdate} />
        </header>
        <main>
          <Main
            startDate={startDate}
            endDate={endDate}
            totalMonths={totalMonths}
          />
        </main>
      </div>
    );
  }
}

export default App;
