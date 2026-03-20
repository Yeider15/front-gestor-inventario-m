import React from 'react';

const PrimaryButton = ({ text, type = "button", onClick }) => {
  return (
    <button type={type} className="btn-primary" onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryButton;