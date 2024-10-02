
import { useState } from "react";

export default function Form({ OnAddItems }) {
    const [description, setDescription] = useState("");
    const [select, setSelect] = useState(1);
  
    //
    function handleSubmit(e) {
      e.preventDefault();
      // to make the page not reload when i add new text
  
      if (!description) return;
  
      const newItem = { description, select, packed: false, id: Date.now() };
      console.log(newItem);
  
      OnAddItems(newItem);
      setDescription(""); // to when add item the for get back empty
      setSelect(1); // same with numper
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>what do you need for your 😍 trip ?</h3>
        <select
          value={select}
          onChange={(e) => setSelect(Number(e.target.value))}
        >
          {/* to make it as a number look at dev tools on Form  */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) =>
            // console.log(e.target.value);
            setDescription(e.target.value)
          }
        ></input>
        <button> Add </button>
      </form>
    );
  }