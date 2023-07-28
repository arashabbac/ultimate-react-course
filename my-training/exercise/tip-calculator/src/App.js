import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [myRate, setMyRate] = useState(0);
  const [myFriendRate, setMyFriendRate] = useState(0);
  const tip = (bill * (myRate + myFriendRate)) / 2 / 100;
  function handleReset() {
    setBill(0);
    setMyRate(0);
    setMyFriendRate(0);
  }

  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage rate={myRate} onSelect={setMyRate}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage rate={myFriendRate} onSelect={setMyFriendRate}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <>
      <h2>
        How much was the bill?
        <input
          type="number"
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </h2>
    </>
  );
}

function SelectPercentage({ rate, onSelect, children }) {
  return (
    <>
      <h2>
        {children}
        <select value={rate} onChange={(e) => onSelect(Number(e.target.value))}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </h2>
    </>
  );
}

function Output({ bill, tip }) {
  return (
    <h1>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h1>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
