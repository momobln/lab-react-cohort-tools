import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src="/logo.png" alt="logo" />
      </Link>

      <Link to="/profile">
        <FaUserCircle size={24} />
      </Link>
    </nav>
  );
}
