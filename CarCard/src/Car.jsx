const Car = (props) => {
  return (
    <div
      style={{
        width: 600,
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        // gap: "5rem",
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1rem",
      }}
    >
      <img
        src={props.image}
        alt="image"
        style={{
          width: "100%",
          height: 400,
          borderRadius: "1rem",
        }}
      />
      <h2 style={{ color: props.price > 10000000 ? "red" : "blue" }}>
        {props.name}
      </h2>
      <h4
        style={{
          textDecoration: props.price > 10000000 ? "underline" : "bold",
        }}
      >
        Price: {props.price}
      </h4>
    </div>
  );
};

export default Car;
