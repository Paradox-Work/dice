import { useState } from "react";
import Dice from "./Dice";

function App() {
  const [diceValues, setDiceValues] = useState([null, null, null]);

  function rollAll() {
    const newValues = diceValues.map(() => Math.floor(Math.random() * 6) + 1);
    setDiceValues(newValues);
  }

  return (
    <main>
      <h1>Dice Party 🎲</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        {diceValues.map((val, i) => (
          <Dice key={i} value={val} />
        ))}
      </div>
      <button onClick={rollAll}>Roll All</button>
    </main>
  );
}

export default App;
