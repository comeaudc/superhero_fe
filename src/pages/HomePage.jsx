import { useState } from "react";
import axios from "axios";
import CharCard from "../components/CharCard/CharCard.jsx";

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
        characters.map((char) => (
          <CharCard key={char._id} char={char} setCharacters={setCharacters} />
        ))
      ) : (
        <button onClick={handleFetch}>Fetch Data</button>
      )}
    </div>
  );
}
