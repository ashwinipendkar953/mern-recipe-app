import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container d-lg-flex ">
          <Link to="/" className="navbar-brand">
            Recipe Organiser
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-lg-end"
            id="navbarToggler"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-primary fw-semibold" to="/">
                  Recipes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-primary fw-semibold"
                  to="/add-recipe"
                >
                  Add Recipe
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
