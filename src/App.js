import './App.css';
import React, {useState} from "react";

const App = () => {
  const [counter,setCounter] = useState(0);

  const increment = () => {
    // counter = counter + 1;
    // console.log(counter)
    setCounter(counter+1);
    // setCounter(4);
    // setCounter(5);

  }
  return (
    <div>
      {counter}
      <button onClick={increment}>
        increment
      </button>
    </div>
  );
}

export default App;
