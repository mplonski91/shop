import React from "react";
import PropTypes from "prop-types";

const Manufacture = ({ item, onChange, checked }) => {
  return (
    <div>
      <input
        type="radio"
        name="manufacturere"
        id={item}
        value={item}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  );
};

Manufacture.propTypes = {
  item: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.string.isRequired
};
export default Manufacture;
