import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import Calendar from './Calendar';
import DaysOfWeek from './DaysOfWeek';

const Main = ({ startDate, endDate, totalMonths }) => {
  let months = [];
  for (let i = 0; i <= totalMonths; i++) {
    let currentMonth = dateFns.addMonths(startDate, i);
    months.push(
      <Calendar
        startDate={i === 0 ? startDate : dateFns.startOfMonth(currentMonth)}
        endDate={endDate}
        currentMonth={currentMonth}
        key={currentMonth}
      />
    );
  }

  return (
    <div className="main-container">
      <DaysOfWeek />
      {months}
    </div>
  );
};

Main.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date).isRequired,
  totalMonths: PropTypes.number.isRequired,
};

export default Main;
