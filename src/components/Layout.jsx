import { NavLink, Outlet } from "react-router-dom";
import logo from "../images/logo.png";

const Layout = () => {
  return (
    <>
      <div className="sup-header">
        <NavLink className="sup-header__link" to="/wishlist">
          Wishlist
        </NavLink>
        <NavLink className="sup-header__link" to="/register">
          Login & Register
        </NavLink>
      </div>
      <header className="header">
        <NavLink className="header_link" to="/">
          Home
        </NavLink>
        <NavLink className="header_link" to="/catalogue">
          Catalogue
        </NavLink>
        <NavLink className="header_link" to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <NavLink className="header_link" to="/shopping-cart">
          Shopping Cart
        </NavLink>
        <NavLink className="header_link" to="/contact">
          Contact Us
        </NavLink>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
