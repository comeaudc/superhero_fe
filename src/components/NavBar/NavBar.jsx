import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      {/* Link tag replaces an <a></a> */}
      <NavLink to={"/"}><button>Home</button></NavLink>
      <NavLink to={"/create"}><button >Create New Character</button></NavLink> 
    </nav>
  );
}
