import { Link } from "react-router-dom";
import React from "react";

const UserNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item ">
        <Link to="/user/history" className="nav-link">
          <h5>History</h5>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link h3">
          <h5>Password</h5>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/wishlist" className="nav-link h3">
          <h5>Wishlist</h5>
        </Link>
      </li>
    </ul>
  </nav>
);

export default UserNav;
