import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  return (
    <div className="display">
      <div className="display-expression">
        <input type="text" readOnly value={props.expression}/>
      </div>

      <div className="display-main">
        <input type="text" readOnly value={props.display}/>
      </div>
    </div>
  );
}

Display.propTypes = {
  display: PropTypes.string.isRequired,
  expression: PropTypes.string.isRequired
}

export default Display;
