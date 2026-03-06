import { useState, useEffect } from "react";
import CharCard from "../components/CharCard/CharCard.jsx";
import axios from "axios";

// useEffect - allows us to automate actions - to synconize with external systems - api requests, setTimeouts, webAPIs

// useEffect runs in 3 ways
// 1 with no dependecies -> run anonymous function On Mount AND EVERY RERENDER
// 2 Empty dependency array -> only runs On Mount, when that component is initially rendered
// 3 populated dependency array -> runs on mount AND everytime the specified dependency changes
export default function HomePage() {
  const [characters, setCharacters] = useState(null);

  async function getCharacters() {
    try {
      let res = await axios.get("https://superhero-server-x2wb.onrender.com/api/char/");

      setCharacters(res.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="home">
      {characters ? (
        characters.map((char) => (
          <CharCard key={char._id} char={char} setCharacters={setCharacters} />
        ))
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  );
}
