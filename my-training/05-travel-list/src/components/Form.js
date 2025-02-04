import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    console.log(quantity);
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
