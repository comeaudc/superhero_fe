import { useState } from "react";

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

  

  return (
    <div className="createForm">
      <fieldset style={{ textAlign: "center" }}>
        <legend>Create a New Character</legend>
        <form>
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
    </div>
  );
}
