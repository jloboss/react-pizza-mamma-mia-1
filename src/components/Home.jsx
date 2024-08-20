import Header from "./Header";
import CardPizza from "./CardPizza";
import { Row, Col } from "react-bootstrap";
import { menuPizza } from "../pizzas";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <h1 className="mnu_pizza">Menú Pizzas</h1>
      <div className="container">
        <Row className="mx-2">
          {menuPizza.map((Element) => (
            <Col md={4} key={Element.id}>
              <CardPizza
                name={Element.name}
                price={Element.price}
                image={Element.img}
                ingredients={Element.ingredients}
                id={Element.id}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
