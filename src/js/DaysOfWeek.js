import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

const DaysOfWeek = props => {
  const dateFormat = 'dd';
  const prevSunday = dateFns.startOfWeek(new Date());
  const days = [];

  for (let i = 0; i < 7; i++) {
    days.push(
      <th key={i}>
        {dateFns.format(dateFns.addDays(prevSunday, i), dateFormat)}
      </th>
    );
  }
  return (
    <table className="days-of-week-header">
      <thead>
        <tr>{days}</tr>
      </thead>
    </table>
  );
};

DaysOfWeek.propTypes = {
  startDate: PropTypes.string,
};

export default DaysOfWeek;
