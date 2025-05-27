import dice0 from "./assets/dice/null-0.svg";
import dice1 from "./assets/dice/dice-1.svg";
import dice2 from "./assets/dice/dice-2.svg";
import dice3 from "./assets/dice/dice-3.svg";
import dice4 from "./assets/dice/dice-4.svg";
import dice5 from "./assets/dice/dice-5.svg";
import dice6 from "./assets/dice/dice-6.svg";
import "./Dice.css";


const diceImages = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];

function Dice({ value }) {
  // If value is null or undefined, use dice0, else use diceImages[value]
  // Note: diceImages is 0-based: diceImages[0] = dice0 (null image), diceImages[1] = dice1 etc.
  const imageIndex = value === null || value === undefined ? 0 : value;
  return (
    <article className="dice">
      <img
        src={diceImages[imageIndex]}
        alt={"Metamais kauliņš " + (value ?? "?")}
        style={{ width: "100px", height: "100px" }}
      />
      <p>
        Tu uzmeti: <strong>{value ?? "?"}</strong>
      </p>
    </article>
  );
}

export default Dice;
