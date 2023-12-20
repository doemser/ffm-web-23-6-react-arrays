import ListItem from "./components/ListItem";

const vegetables = [
  { id: "abc1", name: "broccoli", color: "green" },
  { id: "abc2", name: "carrot", color: "orange" },
  { id: "abc3", name: "spinach", color: "dark green" },
  { id: "abc4", name: "tomato", color: "red" },
  { id: "abc5", name: "cucumber", color: "light green" },
];

export default function App() {
  return (
    <>
      <h1>React Arrays</h1>
      <h2>Explicit return</h2>
      <ul>
        {vegetables.map((vegetable) => {
          console.log(vegetable);
          return <ListItem key={vegetable.id} vegetable={vegetable} />;
        })}
      </ul>
      <h2>Implicit return</h2>
      <ul>
        {vegetables.map((vegetable) => (
          <ListItem key={vegetable.id} vegetable={vegetable} />
        ))}
      </ul>
    </>
  );
}

/*

<IrgendEineComponent banane="gelb" numberA={2} functionX={() => {}}/>

const props = {banane: "gelb", numberA: 2, functionX: () => {}}

function IrgendEineComponent({banane, numberA, functionX}) {
  return irgend ein JSX
}
*/
