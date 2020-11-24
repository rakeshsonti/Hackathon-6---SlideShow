import React, {Component, useState, useEffect} from "react";
import '../styles/App.css';
// import Slide from './Slide';

const App = (prop) => {
  const [slide, setSlide] = useState(0);

  const decr = () =>{
    setSlide(slide - 1);
  }
  const incr = () =>{
    setSlide(slide + 1);
  }
  return (
    <div>
      <button data-testid="button-restart" onClick={() => setSlide(0)} disabled={slide === 0}>Restart</button>

      <button data-testid="button-prev" onClick={decr} disabled={slide === 0}>Prev</button>

      <button data-testid="button-next" onClick={incr} disabled={slide === prop.slides.length-1}>Next</button>

      <h1 data-testid="title">{prop.slides[slide].title}</h1>
      <p data-testid="text">{prop.slides[slide].text}</p>
      {/* <Slide title={props.slides[slide].title} text={props.slides[slide].text}></Slide> */}

    </div>
  )
}
export default App;
