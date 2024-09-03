import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { Container } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");

  const validarFormulario = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios");
      setVariant("danger");
      return false;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      setVariant("danger");
      return false;
    }

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      setVariant("danger");
      return false;
    }

    setMessage("Registro Exitoso");
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
            </ListGroup.Item>
            <ListGroup.Item className="mb-3 d-flex justify-content-center">
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
