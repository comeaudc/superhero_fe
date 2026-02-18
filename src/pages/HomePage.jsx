import { useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [characters, setCharacters] = useState(null);

  async function handleFetch(e) {
    try {
      let res = await axios.get("http://localhost:3000/api/char");

      setCharacters(res.data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="home">
      {characters ? (
        <h1>Data we Fetched</h1>
      ) : (
        <button onClick={handleFetch}>Fetch Data</button>
      )}
    </div>
  );
}
