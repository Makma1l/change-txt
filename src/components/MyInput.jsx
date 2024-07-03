import React from "react";

const MyInput = ({ text, onTextChange }) => {
  const handleChange = (e) => {
    onTextChange(e.target.value);
  };

  return <input type="text" value={text} onChange={handleChange} />;
};

export default MyInput;
