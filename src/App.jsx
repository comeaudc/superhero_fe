import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreateForm from "./pages/CreateForm.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  function showPage() {
    switch (page) {
      case "home":
        return <HomePage />;
      case "create":
        return <CreateForm />;
      default:
        return <h1>404 Not Found</h1>;
    }
  }

  return (
    <>
      <NavBar setPage={setPage} />
      {showPage()}
    </>
  );
}

export default App;
