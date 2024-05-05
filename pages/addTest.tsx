// Inside /pages/addTest.tsx
import { useState } from "react";

export default function AddTest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Inside /pages/addTest.tsx
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/addTest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }), // send the name and email state to the API route
    });

    if (response.ok) {
      // handle successful submission here (maybe clear the form)
      setName("");
      setEmail("");
    } else {
      // handle errors here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Add Test</button>
    </form>
  );
}
