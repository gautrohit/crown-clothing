import React from "react";
import "./customButton.scss";

function CustomeButton({ children, ...otherProps }) {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}

export default CustomeButton;
