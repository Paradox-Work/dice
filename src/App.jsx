import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to React!</h1>

      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count is {count}
      </button>
    </div>
  );
}


export default App
