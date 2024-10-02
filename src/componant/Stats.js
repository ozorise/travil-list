export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding item to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const parcentage = Number(Math.round((numPacked / numItems) * 100));
  return (
    <footer className="stats">
      <em>
        {parcentage === 100
          ? "you got everything ready to go ✈️"
          : `👜 item have ${numItems} item on your list, and you already packed
        ${numPacked} (${parcentage}%)`}
      </em>
    </footer>
  );
}
