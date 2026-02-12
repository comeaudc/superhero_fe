export default function People({ name, alias, powers }) {

let powerlist = powers.map((pow) => <li>{pow}</li>)
  return (
    <div>
      <h1>{name}</h1>
      <h2>{alias}</h2>
      <ul>{powerlist}</ul>
    </div>
  );
}
