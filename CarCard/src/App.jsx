import Car from "./Car";

const carList = [
  {
    id: 1,
    name: "Suzuki Swift",
    image: "src/assets/Suzuki-Swift.jpg",
    price: 3699000,
  },
  {
    id: 2,
    name: "Hyundai i20",
    image: "src/assets/Hyundai-i20-1024x576.jpg",
    price: 3996000,
  },
  {
    id: 3,
    name: "Toyota Yaris Cross",
    image: "src/assets/toyota-yaris-cross-.webp",
    price: 12500000,
  },
  {
    id: 4,
    name: "Kia Seltos",
    image: "src/assets/Kia-Seltos.jpg",
    price: 5790000,
  },
  {
    id: 5,
    name: "Mahindra XUV300",
    image: "src/assets/Mahindra-XUV300.jpg",
    price: 4275000,
  },
  {
    id: 6,
    name: "Toyota Corolla Cross",
    image: "src/assets/toyota-corolla-cross.jpg",
    price: 13800000,
  },
  {
    id: 7,
    name: "Hyundai Creta",
    image: "src/assets/Hyundai-Creta.jpg",
    price: 6496000,
  },
  {
    id: 8,
    name: "Tata Nexon",
    image: "src/assets/Tata-Nexon-768x404.jpg",
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
        return (
          <Car
            key={item.index}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default App;
