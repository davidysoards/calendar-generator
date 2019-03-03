import React, { Component } from 'react';
import './App.scss';
import dateFns from 'date-fns';

import Main from './js/Main';

class App extends Component {
  state = {
    startDate: dateFns.startOfMonth(new Date()),
    numberOfDays: dateFns.getDaysInMonth(new Date()),
  };

  handleUpdate = () => {
    this.setState({
      startDate: new Date(document.getElementById('start').value),
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
          <div className="header-container">
            <div className="app-identity">
              <h1>Dates Generator</h1>
            </div>
            <form>
              <div className="app-inputs">
                <label>Start Date</label>
                <input
                  type="date"
                  name="start date"
                  id="start"
                  defaultValue={dateFns.startOfMonth(new Date())}
                />
                <label># of Days</label>
                <input
                  type="number"
                  name="days"
                  id="days"
                  defaultValue={dateFns.getDaysInMonth(new Date())}
                />
                <input
                  type="button"
                  id="update"
                  value="Update"
                  onClick={() => {
                    this.handleUpdate();
                  }}
                />
              </div>
            </form>
          </div>
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
