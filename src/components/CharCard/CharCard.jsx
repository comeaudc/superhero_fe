export default function CharCard({ char }) {
  let powerList = char.powers.map((power) => <li>{power}</li>);

  return (
    <div className="card">
      <h2>{char.name}</h2>
      <h3>{char.alias}</h3>
      {char.hero ? <p>SuperHero</p> : <p>SuperVillan</p>}
      <h3>Powers:</h3>
      <ul>{powerList}</ul>
    </div>
  );
}
