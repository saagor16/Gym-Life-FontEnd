import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p>GYM TIME</p>
      </Link>
    </header>
  );
};

export default Navbar;
