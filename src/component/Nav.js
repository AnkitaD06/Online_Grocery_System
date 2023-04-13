import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Nav() {
  const userLoginStatus = localStorage.getItem("status");
  const userRole = localStorage.getItem("role");
  const userName = localStorage.getItem("userName");

  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <nav>
        <h5>E-GROCERY</h5>
        
        {!userLoginStatus && (
          <ul className="nav-links">
            <li>
              <Link style={navStyle} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        {userRole === "CUSTOMER" ? (
          <ul className="customer">
            
            <li>
              <Link style={navStyle} to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/cart">
                Cart
              </Link>
            </li>
            <li>
              <Link style={navStyle} to="/wishlist">
                Wishlist
              </Link>
            </li>

            <li>
              <Link style={navStyle} to="/vieworders">
                Orders
              </Link>
            </li>

            <li>
              <Link style={navStyle} to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        ) : null}
        {userRole === "ADMIN" ? (
          <ul className="admin">
            <li>
              <Link style={navStyle} to="/viewproducts">
                Products
              </Link>
            </li>
            
            
            <li>
              <Link style={navStyle} to="/allorders">
                Orders
              </Link>
            </li>

            <li>
              <Link style={navStyle} to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </div>
  );
}
export default Nav;
