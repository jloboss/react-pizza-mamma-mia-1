import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const total = 25000;
  const token = true;

  /*https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp*/
  const nuevototal = total.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          Pizzería Mamma Mia!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                🍕 Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                {" "}
                {token ? "🔓 Profile" : "🔒 Register"}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                {" "}
                {token ? "🔐 Logout" : "🔐 Login"}
              </a>
            </li>
          </ul>
        </div>
        <div className="text-end">
          <a className="nav-link text-light" href="#">
            🛒 Total: {nuevototal}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
