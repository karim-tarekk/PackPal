export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 📋</p>
    );
  const itemsLength = items.length;
  const packedItemsLength = items.filter((item) => item.packed === true).length;
  const packedItemsLegthPercent = Math.round(
    (packedItemsLength / itemsLength) * 100
  );

  return (
    <footer className="stats">
      <em>
        {packedItemsLegthPercent === 100
          ? `You got everything! Ready to go ✈️`
          : `👜 You have ${itemsLength} items on your list, and you already packed
          ${packedItemsLength} (${
              itemsLength === 0 ? 0 : packedItemsLegthPercent
            }
          %)`}
      </em>
    </footer>
  );
}
