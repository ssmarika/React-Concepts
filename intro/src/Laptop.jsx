const Laptop = (props) => {
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
        alt="Laptop"
        style={{ height: 400, width: "100%" }}
      />

      <h3>{props.name}</h3>
    </div>
  );
};

export default Laptop;
