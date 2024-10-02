import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats  from "./Stats";
export default function App() {
  const [item, setItems] = useState([]);

  function handelItem(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeletItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function HandelClearList() {
    const confirmed = window.confirm("Are u sure to delete all items");

    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form OnAddItems={handelItem} />
      <PackingList
        items={item}
        onDeleteItem={handelDeletItem}
        onToggleItem={handelToggleItem}
        onClicklist={HandelClearList}
      />
      <Stats items={item} />
    </div>
  );
}
