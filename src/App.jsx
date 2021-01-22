import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (gender === "male") {
      calculateMaleLevel();
    } else {
      calculateFemaleLevel();
    }
  }

  function calculateMaleLevel() {
    const grams = calculateGramsLeft();
    const result = grams / (weight * 0.7);
    setResult(result);
  }

  function calculateFemaleLevel() {
    const grams = calculateGramsLeft();
    const result = grams / (weight * 0.6);
    setResult(result);
  }

  function calculateGramsLeft() {
    const grams = calculateGrams();
    const burning = calculateBurning();
    const gramsLeft = grams - burning * time;
    return gramsLeft;
  }

  function calculateGrams() {
    const litres = calculateLitres();
    const grams = litres * 8 * 4.5;
    return grams;
  }

  function calculateLitres() {
    const litres = bottles * 0.33;
    return litres;
  }

  function calculateBurning() {
    const burning = weight / 10;
    return burning;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Calculating alcohol blood level</h1>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Bottles</label>
        <select name="bottles" value={bottles} onChange={(e) => setBottles(e.target.value)}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => {
            return <option value={number}>{number}</option>;
          })}
        </select>
      </div>
      <div>
        <label>Time</label>
        <select name="time" value={time} onChange={(e) => setTime(e.target.value)}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => {
            return <option value={number}>{number}</option>;
          })}
        </select>
      </div>
      <div onChange={(e) => setGender(e.target.value)}>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" id="male" defaultChecked />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" value="female" id="female" />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <button>Calculate</button>
        <output>You're this drunk: {result.toFixed(1)}</output>
      </div>
    </form>
  );
}

export default App;
