import Laptop from "./Laptop";
import Person from "./Person";
import Player from "./Player";

const divStyle = {
  height: "100vh",
  width: "100vd",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
};

function App1() {
  return (
    <div style={divStyle}>
      {/* PERSON */}
      {/* <Person image="src\assets\download.jpeg" name="SPIDERMAN" />
      <Person image="src\assets\download (2).jpeg" name="SUPERMAN" />
      <Person image="src\assets\download (1).jpeg" name="BATMAN" /> */}

      {/* PLAYER */}
      {/* <Player image="src\assets\messi.webp" name="MESSI" />
      <Player image="src\assets\Ronaldo.jpg" name="RONALDO" />
      <Player image="src\assets\mbapee.jpeg" name="MBAPEE" /> */}

      {/* LAPTOP */}
      <Laptop image="src\assets\predator.jpg" name="PREDATOR" />
      <Laptop image="src\assets\macbook.jpg" name="MACBOOK" />
      <Laptop image="src\assets\asus.jpg" name="ASUS" />
    </div>
  );
}

export default App1;
