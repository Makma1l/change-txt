import React, { useState } from "react";
import MyInput from "./components/MyInput";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div className="App">
      <h1>Current Text: {text}</h1>
      <MyInput text={text} onTextChange={handleTextChange} />
    </div>
  );
}

export default App;
