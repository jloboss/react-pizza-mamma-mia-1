import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Container } from "react-bootstrap";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";

const Register = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //const [confirmPassword, setConfirmPassword] = useState("");
  const email = useInput(""); // customHook
  const password = useInput(""); // customHook
  const confirmPassword = useInput(""); // customHook
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");
  const { register } = useContext(UserContext);

  const validarFormulario = (e) => {
    e.preventDefault();

    if (!email.value || !password.value || !confirmPassword.value) {
      setMessage("Todos los campos son obligatorios");
      setVariant("danger");
      return false;
    }

    if (password.value.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      setVariant("danger");
      return false;
    }

    if (password.value !== confirmPassword.value) {
      setMessage("Las contraseñas no coinciden");
      setVariant("danger");
      return false;
    }

    //setMessage("Registro Exitoso");
    register(email.value, password.value);
    setVariant("success");
  };

  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: "20rem" }}>
        <Form onSubmit={(e) => validarFormulario(e)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>Registro</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Enter email"
                  value={email}
                  {...email}
                />
              </Form.Group>
            </ListGroup.Item>
            <ListGroup.Item>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  {...password}
                />
              </Form.Group>
            </ListGroup.Item>
            <ListGroup.Item>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repita Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={confirmPassword}
                  {...confirmPassword}
                />
              </Form.Group>
            </ListGroup.Item>
            <ListGroup.Item className="mb-3 d-flex justify-content-center">
              <Link variant="link" type="submit" to="/react-pizza-mamma-mia-1/login">
                Tienes ya una cuenta?
              </Link>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Form>
        <ListGroup.Item>
          {message && (
            <Alert variant={variant} onClose={() => setMessage("")} dismissible>
              {message}
            </Alert>
          )}
        </ListGroup.Item>
      </Card>
    </Container>
  );
};

export default Register;
