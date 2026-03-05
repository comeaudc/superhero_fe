import { useState } from "react";
import EditForm from "../EditForm/EditForm";

export default function CharCard({ char, setCharacters }) {
  const [edit, setEdit] = useState(false);

  let powerList = char.powers.map((power) => <li>{power}</li>);

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
          <button onClick={()=>setEdit(true)}>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </>
  );
}
