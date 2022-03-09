import React from "react";
import PropTypes from "prop-types";

export default function Paper({ content, fSize }) {
  return <p style={{ fontSize: `${fSize}px` }}>{content}</p>;
}

Paper.propTypes = {
  content: PropTypes.string,
  fSize: PropTypes.number,
};
