import { Link } from "react-router-dom";
const CardPizza = ({ name, price, image, ingredients }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Precio: ${price}</strong>
        </p>
        <p className="card-text">
          <strong>Ingredientes:</strong> {ingredients.join(", ")}
        </p>
        <div className="d-flex justify-content-around">
          <Link
            to="/react-pizza-mamma-mia-1/Pizza/p001"
            className="btn btn-primary bg-white text-dark"
          >
            Ver más 👀
          </Link>
          <a href="#" className="btn btn-primary bg-dark">
            Añadir 🛒
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
