import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreateForm from "./pages/CreateForm.jsx";
import { Routes, Route } from "react-router";
import deadpool from "./assets/images/deadpool.jpg";
import capitan from "./assets/images/Captain_America_Shield.svg.png"
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <img src={deadpool} alt="DeadPool Img" height={"100px"} />
      <img src={capitan} alt="Capitan" height={"100px"} />
      <Routes>
        {/* Each Route represents a page, the element attribute is the component that will be that page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateForm />} />
      </Routes>
    </>
  );
}

export default App;
