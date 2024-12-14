import CustomCard from "./component/Card/CustomCard";

const cardItem = [
  {
    name: "Lizard",
    image: "src/assets/lizard.webp",
    description:
      "Lizards are cold-blooded reptiles with scaly skin, known for their agility and ability to regenerate their tails when threatened.",
  },
  {
    name: "Butterfly",
    image: "src/assets/butterfly.webp",
    description:
      "Butterflies are colorful, winged insects known for their graceful flight and metamorphic life cycle, transitioning from caterpillars to adults.",
  },
  {
    name: "Humming Bird",
    image: "src/assets/hummingbird.webp",
    description:
      "Hummingbirds are small, vibrant birds known for their rapid wing beats, ability to hover in mid-air, and feeding on nectar from flowers",
  },
];

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {cardItem.map((item, index, array) => {
        return (
          <CustomCard
            key={item.index}
            name={item.name}
            image={item.image}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default App;
