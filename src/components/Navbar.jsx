import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { formatCurrency } from "../helpers/format";
import { Link } from "react-router-dom";

function NavbarApp() {
  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center gap-2">
          <p className="text-light bg-dark">Pizzería Mamma Mia!</p>

          <Link to="/react-pizza-mamma-mia-1/">
            <Button className="btn-sm" variant="outline-light" href="#home">
              🍕Home
            </Button>
          </Link>

          {token ? (
            <>
              <Link to="/react-pizza-mamma-mia-1/Profile">
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#profile"
                >
                  🔓Profile
                </Button>
              </Link>

              <Button className="btn-sm" variant="outline-light" href="#Logout">
                🔒Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/react-pizza-mamma-mia-1/Login">
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#Login"
                >
                  🔐Login
                </Button>
              </Link>
              <Link to="/react-pizza-mamma-mia-1/Register">
                <Button
                  className="btn-sm"
                  variant="outline-light"
                  href="#register"
                >
                  🔐Register
                </Button>
              </Link>
            </>
          )}
        </Nav>

        {token && (
          <Link to="/react-pizza-mamma-mia-1/Cart">
            <Button className="btn-sm" variant="outline-light" href="#total">
              🛒Total: {formatCurrency(total)}
            </Button>
          </Link>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
