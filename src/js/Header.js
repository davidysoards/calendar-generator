import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ startDate, numberOfDays }) => {
  return (
    <div className="header-container">
      <div className="app-identity">
        <h1>Calendar Generator</h1>
      </div>
      <form>
        <div className="app-inputs">
          <label>Start Date</label>
          <input type="date" name="start date" id="start" value={startDate} />
          <label># of Days</label>
          <input type="number" name="days" id="days" value={numberOfDays} />
          <input type="button" id="update" value="Update" />
        </div>
      </form>
    </div>
  );
};

Header.propTypes = {
  startDate: PropTypes.string.isRequired,
  numberOfDays: PropTypes.number.isRequired,
};

export default Header;
