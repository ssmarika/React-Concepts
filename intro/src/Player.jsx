const Player = (props) => {
  return (
    <div
      style={{
        width: 400,
        padding: "1rem",
        border: "1px solid black",
      }}
    >
      <img
        src={props.image}
        alt="Player"
        style={{ width: "100%", height: 400 }}
      />

      <h3>{props.name}</h3>
    </div>
  );
};

export default Player;
