import CustomButton from "./component/Button/CustomButton";

cardItem = [
  {
    name: "Lizard",
    image: "assets/lizard.webp",
    description: ",",
  },
  {
    name: "Butterfly",
    image: "assets/butterfly.webp",
    description: ",",
  },
  {
    name: "Humming Bird",
    image: "assets/hummingbird.webp",
    description: "",
  },
];
const App = () => {
  return (
    <div>
      <CustomButton />
    </div>
  );
};

export default App;
