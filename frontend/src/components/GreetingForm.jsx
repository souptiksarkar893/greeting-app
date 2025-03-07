import React, { useState } from "react";
import axios from "axios";

function GreetingForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleGreeting = async () => {
    try {
      const response = await axios.get(
        `https://greeting-app-62iy.onrender.com/api/greet?name=${name}`
      );
      setMessage(response.data.message || response.data.error);
    } catch (error) {
      setMessage("Error fetching greeting", error);
    }
  };

  return (
    <div className="card p-4">
      <div className="mb-3">
        <label className="form-label">Enter Your Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleGreeting}>
        Get Greeting
      </button>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
}

export default GreetingForm;
