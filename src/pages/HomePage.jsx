import { useState } from "react";
import CharCard from "../components/CharCard/CharCard.jsx";

export default function HomePage() {
  const [characters, setCharacters] = useState(null);

  return (
    <div className="home">
      {characters ? (
        characters.map((char) => (
          <CharCard key={char._id} char={char} setCharacters={setCharacters} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
