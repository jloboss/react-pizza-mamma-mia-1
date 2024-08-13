import fondoPizza from "../assets/img/pizzeria-mamma-mia-header.jpg";
const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${fondoPizza})`,
        padding: "50px",
        color: "white",
      }}
    >
      <h1 className="tit_header">¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;
