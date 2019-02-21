import React from "react";
import PropTypes from "prop-types";

const BigHeading = ({ text }) => {
  return <h1 className="header-big">{text}</h1>;
};

BigHeading.propTypes = {
  text: PropTypes.string.isRequired
};
export default BigHeading;
