import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

const Header = ({ handleUpdate }) => {
  return (
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
