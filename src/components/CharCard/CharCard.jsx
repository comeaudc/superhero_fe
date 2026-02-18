export default function CharCard({ char }) {
  return (
    <div className="card">
      <h2>{char.name}</h2>
      <h3>{char.alias}</h3>
      {char.hero ? <p>SuperHero</p> : <p>SuperVillan</p>}
    </div>
  );
}
