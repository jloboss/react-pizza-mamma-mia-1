import { useState } from "react";
import { menuPizza as initialCart } from "../pizzas"; // Asegúrate de la ruta correcta

const Cart = () => {
  const [pizzaList, setPizzaList] = useState(initialCart);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Función para aumentar la cantidad de pizza
  const increaseQuantity = (pizza) => {
    setCart((prevState) => {
      const exist = prevState.find((x) => x.id === pizza.id);

      if (exist) {
        const updatedCart = prevState.map((x) =>
          x.id === pizza.id ? { ...exist, quantity: exist.quantity + 1 } : x
        );
        setTotal(calculateTotal(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = [...prevState, { ...pizza, quantity: 1 }];
        setTotal(calculateTotal(updatedCart));
        return updatedCart;
      }
    });
  };

  // Función para disminuir la cantidad de pizza
  const decreaseQuantity = (pizza) => {
    setCart((prevState) => {
      const exist = prevState.find((x) => x.id === pizza.id);

      if (exist) {
        if (exist.quantity <= 1) {
          const updatedCart = prevState.filter((x) => x.id !== pizza.id);
          setTotal(calculateTotal(updatedCart));
          return updatedCart;
        } else {
          const updatedCart = prevState.map((x) =>
            x.id === pizza.id ? { ...exist, quantity: exist.quantity - 1 } : x
          );
          setTotal(calculateTotal(updatedCart));
          return updatedCart;
        }
      }
      return prevState;
    });
  };

  // Función para calcular el total
  const calculateTotal = (cart) => {
    return cart.reduce(
      (total, pizza) => total + pizza.price * pizza.quantity,
      0
    );
  };
  return (
    <div className="cart">
      <h1>Productos</h1>
      <ul>
        {pizzaList.map((pizza) => (
          <li key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="pizza-image" />
            <div className="pizza-details">
              <h2>{pizza.name}</h2>
              <p>${pizza.price}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(pizza)}>-</button>
                <span>
                  {cart.find((x) => x.id === pizza.id)?.quantity || 0}
                </span>
                <button onClick={() => increaseQuantity(pizza)}>+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h1>Detalle Carrito</h1>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id} className="cart-item">
            <div className="pizza-details">
              {pizza.quantity > 0 ? (
                <p>
                  <img src={pizza.img} className="pizza-carro" />{" "}
                  <strong>{pizza.name}</strong> (${pizza.price}) x{" "}
                  {pizza.quantity} = $ {pizza.price * pizza.quantity}
                </p>
              ) : null}
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
