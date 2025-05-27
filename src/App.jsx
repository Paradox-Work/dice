import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from './Dice';

function Form() {
  const [name, setName] = useState('');

  const users = ['Alice', name, 'Charlie']; // ✅ move logic outside JSX

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
      <p>Hello, {name}!</p>

      <ul>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}

function Card({ title = "Untitled", content = "No content yet" }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Form />
      <Card />
      <Dice />
      <Dice />
      <Dice />
    </>
  );
}

export default App