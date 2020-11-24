import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [index, setIndex] = useState(0);
  const incrementFn = () => {
    setIndex(index + 1);
  };
  const decrementFn = () => {
    setIndex(index - 1);
  };
  return (
    <>
      <button data-testid="button-restart" onClick={setIndex(0)} disabled={(index===0)}>
        Restart
      </button>
      <button
        data-testid="button-prev"
        onClick={decrementFn}
        disabled={index === 0}
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        onClick={incrementFn}
        disabled={index === props.slides.length - 1}
      >
        Next
      </button>
      <h1 data-testid="title">{props.slides[index].title}</h1>
      <p data-testid="text">{props.slides[index].text}</p>
    </>
  );
};
export default App;
