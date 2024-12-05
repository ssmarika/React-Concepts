import Car from "./Car";

const carList = [
  {
    id: 1,
    name: "Suzuki Swift",
    price: 3699000,
  },
  {
    id: 2,
    name: "Hyundai i20",
    price: 3996000,
  },
  {
    id: 3,
    name: "Toyota Yaris Cross",
    price: 12500000,
  },
  {
    id: 4,
    name: "Kia Seltos",
    price: 5790000,
  },
  {
    id: 5,
    name: "Mahindra XUV300",
    price: 4275000,
  },
  {
    id: 6,
    name: "Toyota Corolla Cross",
    price: 13800000,
  },
  {
    id: 7,
    name: "Hyundai Creta",
    price: 6496000,
  },
  {
    id: 8,
    name: "Tata Nexon",
    price: 4975000,
  },
];

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1
        style={{
          color: "red",
        }}
      >
        CAR LISTINGS
      </h1>
      {carList.map((item, index, array) => {
        return <Car key={item.index} name={item.name} price={item.price} />;
      })}
    </div>
  );
};

export default App;
