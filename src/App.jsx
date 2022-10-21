import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 5, 7, 8]);
  const [sum, setSum] = useState(null);
  const [guess, setGuess] = useState("");

  const rndNumber = () => {
    const max = 100;
    const min = 3;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function printNumbers() {
    const newNUmbers = numbers.map(() => rndNumber());
    setNumbers(newNUmbers);
    const newSum = newNUmbers.reduce((a, b) => a + b);
    setSum(newSum);
  }

  function guessNumber() {
    if (guess === sum) {
      alert("Congrats!!!! You got it!");
      setGuess("");
      return printNumbers();
    }
    setGuess("");
    printNumbers();
    return alert("NOPE! not even close 🤣");
  }

  useEffect(() => {
    printNumbers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>guess the SUM</h1>
      <h2>
        {numbers.map((number, index) => {
          if (index < numbers.length - 1) {
            return `${number} +`;
          }
          return `${number} =`;
        })}{" "}
        <input
          type="number"
          onChange={(event) => setGuess(parseInt(event.target.value.trim()))}
          value={guess}
          placeholder="????"></input>
        <button onClick={guessNumber}>??</button>
      </h2>
    </div>
  );
}

export default App;
