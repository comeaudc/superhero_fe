import { useState } from "react";
import axios from "axios";

export default function CreateForm() {
  const [formData, setFormData] = useState({
    name: "",
    alias: "",
    powers: "",
    hero: false,
  });

  function handleChange(e) {
    if (e.target.type == "checkbox") {
      setFormData({ ...formData, hero: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Manipulate data to final state
      let copy = { ...formData };

      copy.powers = copy.powers.split(",");

      let res = await axios.post("http://localhost:3000/api/char", copy);

      //handle response
      setFormData({
        name: "",
        alias: "",
        powers: "",
        hero: false,
      });
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    }
  }

  return (
    <div className="createForm">
      <fieldset style={{ textAlign: "center" }}>
        <legend>Create a New Character</legend>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Name..."
              onChange={handleChange}
              value={formData.name}
              required
            />
          </label>
          <br />
          <label>
            Alias:
            <input
              type="text"
              name="alias"
              placeholder="Alias..."
              onChange={handleChange}
              value={formData.alias}
              required
            />
          </label>
          <br />
          <label>
            Powers:
            <textarea
              name="powers"
              placeholder="Comma Separated Powers... "
              onChange={handleChange}
              value={formData.powers}
              required
            />
          </label>
          <br />
          <label>
            Hero:
            <input
              type="checkbox"
              name="hero"
              onChange={handleChange}
              checked={formData.hero}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </fieldset>
    </div>
  );
}
