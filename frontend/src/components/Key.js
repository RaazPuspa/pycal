import React from 'react';
import PropTypes from 'prop-types';

const Key = props => {
  return (
    <input
      type="button"
      value={props.value}
      onClick={props.onClick}
      className={`key key-${props.type} key-${props.size}`}
    />
  );
}

Key.propTypes = {
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Key;
