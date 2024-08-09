import './App.css';
import { useState } from "react"

function App() {

  const [counter, setCounter] = useState(0)

  const increment = (event) => {
    event.preventDefault()
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }


  return (
    <div className="App">
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;

// you could also inline the button onClick function to be onClick={() => setCounter(counter + action)}