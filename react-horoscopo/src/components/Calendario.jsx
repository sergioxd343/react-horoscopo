import { useState } from 'react';
import PropTypes from 'prop-types';

const DateInput = ({ onSubmit }) => {
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(dateOfBirth);
  };

  return (
    <div className="box">
      <h2 className="title is-4 has-text-centered">Fecha de Nacimiento</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Selecciona una fecha</label>
          <div className="control">
            <input
              className="input"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-primary is-fullwidth" type="submit">
            Ver Horóscopo
          </button>
        </div>
      </form>
    </div>
  );
};

DateInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DateInput;
