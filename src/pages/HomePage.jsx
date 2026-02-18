import { useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [characters, setCharacters] = useState(null);

  function handleFetch(e){
    console.log('testing')
  }

  return (
    <div className="home">
      {characters ? <h1>Data we Fetched</h1> : <button onClick={handleFetch}>Fetch Data</button>}
    </div>
  );
}
