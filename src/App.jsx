import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreateForm from "./pages/CreateForm.jsx";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        {/* Each Route represents a page, the element attribute is the component that will be that page */}
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreateForm />} />
      </Routes>
    </>
  );
}

export default App;