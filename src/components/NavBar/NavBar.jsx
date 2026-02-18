export default function NavBar({ setPage }) {
  return (
    <nav>
      <button onClick={()=> setPage('home')}>Home</button>
      <button onClick={()=>{setPage('create')}}>Create New Character</button>
    </nav>
  );
}
