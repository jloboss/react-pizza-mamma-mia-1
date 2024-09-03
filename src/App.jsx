import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Pizzas from "./components/Pizzas";
import Register from "./views/Register";
import Login from "./views/Login";
import Cart from "./views/Cart";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/react-pizza-mamma-mia-1/" element={<Home />}></Route>
          <Route
            path="/react-pizza-mamma-mia-1/Register"
            element={<Register />}
          ></Route>
          <Route
            path="/react-pizza-mamma-mia-1/Login"
            element={<Login />}
          ></Route>
          <Route
            path="/react-pizza-mamma-mia-1/Cart"
            element={<Cart />}
          ></Route>
          <Route
            path="/react-pizza-mamma-mia-1/Profile"
            element={<Profile />}
          ></Route>
          <Route
            path="/react-pizza-mamma-mia-1/Pizza/p001"
            element={<Pizzas />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
