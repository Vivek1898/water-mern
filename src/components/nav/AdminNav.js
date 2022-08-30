import { Link } from "react-router-dom";
import React from "react";

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column bg-light">
      <li className="nav-item btn btn-primary">
        <Link to="/admin/dashboard" className="nav-link">
          Dashboard
        </Link>
      </li>

      <li className="nav-item btn btn-primary">
        <Link to="/admin/product" className="nav-link">
          Product
        </Link>
      </li>

      <li className="nav-item btn btn-primary">
        <Link to="/admin/products" className="nav-link">
          Products
        </Link>
      </li>

      <li className="nav-item btn btn-primary">
        <Link to="/admin/category" className="nav-link">
          Category
        </Link>
      </li>

      <li className="nav-item btn btn-primary">
        <Link to="/admin/sub" className="nav-link">
          Sub Category
        </Link>
      </li>

      {/* <li className="nav-item btn btn-primary">
        <Link to="/admin/coupon" className="nav-link">
          Coupon
        </Link>
      </li> */}

      <li className="nav-item btn btn-primary">
        <Link to="/user/password" className="nav-link">
          Password
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
