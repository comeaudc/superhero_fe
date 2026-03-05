import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <Link to={"/"}><button>Home</button></Link>
      <Link to={"/create"}><button >Create New Character</button></Link> 
    </nav>
  );
}
