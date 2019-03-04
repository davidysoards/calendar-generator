import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import logo from '../img/glyphicons-46-calendar.svg';

const Header = ({ startDate, handleUpdate }) => {
  return (
    <div className="header-container">
      <div className="app-identity">
        <img src={logo} alt="calendar icon" width="50px" />
        <h1>Calendar Generator</h1>
      </div>
      <form>
        <div className="app-inputs">
          <label>Start Date</label>
          <input
            type="date"
            name="start date"
            id="start"
            defaultValue={dateFns.format(startDate, 'YYYY-MM-DD')}
          />
          <label># of Days</label>
          <input
            type="number"
            name="days"
            id="days"
            defaultValue={dateFns.getDaysInMonth(new Date())}
          />
          <label>Country</label>
          <input type="text" name="country" id="country" defaultValue="US" />
          <input
            type="button"
            id="update"
            value="Update"
            onClick={() => {
              handleUpdate();
            }}
          />
        </div>
      </form>
    </div>
  );
};

Header.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
};

export default Header;
