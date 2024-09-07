import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQuantity, total, decreaseQuantity } =
    useContext(CartContext);
  return (
    <div className="cart">
      <h1>Productos</h1>
      <h1>Detalle Carrito</h1>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id} className="cart-item">
            <div className="pizza-details">
              {pizza.quantity > 0 ? (
                <p>
                  <img src={pizza.image} className="pizza-carro" />{" "}
                  <strong>{pizza.name}</strong> (${pizza.price}) x{" "}
                  {pizza.quantity} = $ {pizza.price * pizza.quantity}
                </p>
              ) : null}
              <button onClick={() => increaseQuantity(pizza)}>+</button>
              <button onClick={() => decreaseQuantity(pizza)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <h2>Total: </h2>${total}
      </div>
      <button className="pay-button">Pagar</button>
    </div>
  );
};

export default Cart;
