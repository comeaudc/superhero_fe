import { useState } from "react";

export default function EditForm() {
  const [formData, setFormData] = useState({
    name: "",
    alias: "",
    powers: "",
    hero: false,
  });

  function handleChange(e) {}

  function handleSubmit(e) {}

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
            value={formData.hero}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </fieldset>
  );
}
