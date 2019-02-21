import React from "react";

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

export default Manufacture;
