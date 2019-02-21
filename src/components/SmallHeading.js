import React from "react";
import PropTypes from "prop-types";

const SmallHeading = ({ text }) => {
  return <h2 className="header-small">{text}</h2>;
};

SmallHeading.propTypes = {
  text: PropTypes.string.isRequired
};
export default SmallHeading;
