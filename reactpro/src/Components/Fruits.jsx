export default function Fruits() {
  //const fruits = ["mango", "Oranges", "apples", "bananas", "Onions"];
  const fruits = [
    { name: "Bananas", price: 10, emoji: "🍌" },
    { name: "Oranges", price: 20, emoji: "🍊" },
    { name: "Apples", price: 30, emoji: "🍎" },
    { name: "Water melon", price: 60, emoji: "🍉" },
    { name: "Dragon fruit", price: 100, emoji: "🐲" },
  ];
  return (
    // <div>
    //   <ul>
    //     {fruits.map((fruit) => (
    //       <li key={fruit.name}>
    //         {fruit.name}${fruit.price} {fruit.emoji}
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div>
      <ul>
        {fruits.map((fruit) =>
          fruit.price > 30 ? (
            <li key={fruit.name}>
              {fruit.name}${fruit.price} {fruit.emoji}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}
