import { useState } from "react";
import axios from "axios";
import EditForm from "../EditForm/EditForm";

export default function CharCard({ char, setCharacters }) {
  const [edit, setEdit] = useState(false);

  let powerList = char.powers.map((power) => <li>{power}</li>);

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:3000/api/char/${char._id}`);

      alert("Successfully Deleted");

      setCharacters(c => {
        return c.filter((character) => character._id !== char._id)
      })
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      {edit ? (
        <EditForm char={char} setEdit={setEdit} setCharacters={setCharacters} />
      ) : (
        <div className="card">
          <h2>{char.name}</h2>
          <h3>{char.alias}</h3>
          {char.hero ? <p>SuperHero</p> : <p>SuperVillan</p>}
          <h3>Powers:</h3>
          <ul>{powerList}</ul>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </>
  );
}
