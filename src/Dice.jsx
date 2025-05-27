import { useState } from "react";
import dice0 from "./assets/dice/null-0.svg";
import dice1 from "./assets/dice/dice-1.svg";
import dice2 from "./assets/dice/dice-2.svg";
import dice3 from "./assets/dice/dice-3.svg";
import dice4 from "./assets/dice/dice-4.svg";
import dice5 from "./assets/dice/dice-5.svg";
import dice6 from "./assets/dice/dice-6.svg";


function Dice() {
  const [diceValue, setDiceValue] = useState(null);
  const diceImages = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];
  const currentDiceImage = diceValue === null ? dice0 : diceImages[diceValue];

  function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log("Dice rolled:", randomNumber);
    setDiceValue(randomNumber);
  }

  return (
    <article>
      <h2>Dice</h2>
      <p>You've thrown <strong>{diceValue}</strong></p>
        <img
        src={currentDiceImage}
        alt={"Dice " + diceValue}
        style={{ width: "100px", height: "100px" }}
      />
      <button onClick={rollDice}>Roll</button>
    </article>
  );
}

export default Dice;
