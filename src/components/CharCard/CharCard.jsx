import axios from "axios";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";

export default function CharCard({ char, setCharacters }) {
  const [edit, setEdit] = useState(false);

  let powerList = char.powers.map((power) => <li>{power}</li>);

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:3000/api/char/${char._id}`);

      // Filtering out deleted char from state, and triggering rerender
      setCharacters((c) => c.filter((el) => el._id !== char._id));

      alert("Successful deletion");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  }

  return (
    <>
      {edit ? (
        <EditForm />
      ) : (
        <div className="card">
          <h2>{char.name}</h2>
          <h3>{char.alias}</h3>
          {char.hero ? <p>SuperHero</p> : <p>SuperVillan</p>}
          <h3>Powers:</h3>
          <ul>{powerList}</ul>
          <button onClick={()=>setEdit(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </>
  );
}
