import React from 'react'
const clickHandler = () => {
  console.log("Clicked !!!!");
  alert("Hey you clicked");
};

const App = () => {
  return (
    <button onClick={clickHandler}>Click Me</button>
    
  );
}

export default App