import { useState } from "react";
import axios from "axios";

export default function EditForm({ char, setEdit, setCharacters }) {
  const [formData, setFormData] = useState({
    name: char.name,
    alias: char.alias,
    powers: char.powers.toString(),
    hero: char.hero,
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
      // Make a copy
      let copy = { ...formData, powers: formData.powers.split(",") };

      // Attempt to update in DB
      let res = await axios.put(
        `http://localhost:3000/api/char/${char._id}`,
        copy,
      );

      // Update state with updated object
      setCharacters((c) =>
        c.map((char) => {
          if (char._id === res.data._id) return res.data;
          else return char;
        }),
      );

      // Toggle back to card view
      setEdit(false);
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  }

  return (
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
        <input type="submit" value="Save" />
      </form>
    </fieldset>
  );
}
