import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

const Calendar = ({ startDate, endDate, currentMonth }) => {
  const prevSunday = dateFns.startOfWeek(startDate);
  const endOfMonth = dateFns.endOfMonth(startDate);
  const monthYear = dateFns.format(currentMonth, 'MMMM YYYY');
  const dateFormat = 'D';
  const weeks = [];

  let currentDate = prevSunday;
  let days = [];

  while (currentDate <= endOfMonth && currentDate <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(
        <td key={currentDate}>{dateFns.format(currentDate, dateFormat)}</td>
      );
      currentDate = dateFns.addDays(currentDate, 1);
    }
    weeks.push(<tr key={currentDate}>{days}</tr>);
    days = [];
  }
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="7">
            <h2>{monthYear}</h2>
          </th>
        </tr>
      </thead>
      <tbody>{weeks}</tbody>
    </table>
  );
};

Calendar.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date).isRequired,
  currentMonth: PropTypes.instanceOf(Date).isRequired,
};

export default Calendar;
