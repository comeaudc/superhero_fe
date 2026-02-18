import axios from "axios";

export default function CharCard({ char, setCharacters }) {
  let powerList = char.powers.map((power) => <li>{power}</li>);

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:3000/api/char/${char._id}`);

      setCharacters((c) => c.filter((el) => el._id !== char._id));
      
      alert("Successful deletion");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  }

  return (
    <div className="card">
      <h2>{char.name}</h2>
      <h3>{char.alias}</h3>
      {char.hero ? <p>SuperHero</p> : <p>SuperVillan</p>}
      <h3>Powers:</h3>
      <ul>{powerList}</ul>
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
