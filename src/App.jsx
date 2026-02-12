import { useState } from "react";
import People from "./components/People";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  async function handleGetData() {
    try {
      let data = await fetch("http://localhost:3001/api/char");
      data = await data.json();

      setData(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      {data ? (
        data.map((el) => <People {...el} />)
      ) : (
        <button onClick={handleGetData}>Click for Data</button>
      )}
    </>
  );
}

export default App;
