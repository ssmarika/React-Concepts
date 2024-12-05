const divStyle = {
  width: "400px",
  padding: "1rem",
  border: "1px solid black",
};

const imgStyle = {
  width: "100%",
  height: "400px",
};

const Person = (props) => {
  return (
    <div style={divStyle}>
      <img src={props.image} alt="Image" style={imgStyle} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default Person;
