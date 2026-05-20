import CartWidget from "./CartWidget";
import logo from "../assets/LOGO.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="Logo" />
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;