import React, { useState } from "react";

function AddEvent() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      date: date,
      description: description,
      category: category,
      amount: amount,
    };

    fetch(`https://events-app-api-mu7z.onrender.com/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => {
       res.json()
      })
      .then((data) => {
        console.log(data);
        setDate("");
        setDescription("");
        setCategory("");
        setAmount("");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{marginBottom:"10px"}}>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        
        <label>
          Description:
          <input
            type="text"
            value={description}
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
    
        <label>
          Category:
          <input
            type="text"
            value={category}
            placeholder="Enter category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
    
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;
