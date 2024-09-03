import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import notFoundImage from "../assets/img/Error404.png";

const NotFound = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-4">
      <h1>Página no encontrada</h1>
      <img
        src={notFoundImage}
        alt="Página no encontrada"
        className="not-found-image"
        style={{ maxWidth: "44%", height: "auto" }}
      />
      <p>
        ¡Vaya! Algo no ha salido bien. Por suerte aqui somos expertos para
        solucionar problemas...
      </p>
      <Link to="/react-pizza-mamma-mia-1/">
        <Button variant="dark">Ir a Home</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
