import { Card, Tooltip } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import ModalImage from "react-modal-image";
import React from "react";
import laptop from "../../images/laptop.png";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const ProductCardInCheckout = ({ p }) => {
  const colors = ["Black", "Brown", "Silver", "White", "Blue"];
  let dispatch = useDispatch();

  const handleColorChange = (e) => {
    console.log("color changed", e.target.value);

    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id === p._id) {
          cart[i].color = e.target.value;
        }
      });

      //  console.log('cart udpate color', cart)
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleQuantityChange = (e) => {
    // console.log("available quantity", p.quantity);
    let count = e.target.value < 1 ? 1 : e.target.value;

    if (count > p.quantity) {
      toast.error(`Max available quantity: ${p.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == p._id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleRemove = () => {
    // console.log(p._id, "to remove");
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // [1,2,3,4,5]
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  return (
    <tbody>
      {/* <tr >
        <td>
          <div style={{ width: "100px", height: "auto" }}>
            {p.images.length ? (
              <ModalImage small={p.images[0].url} large={p.images[0].url} />
            ) : (
              <ModalImage small={laptop} large={laptop} />
            )}
          </div>
        </td>
        <td ><h6>{p.title}</h6></td>
        <td><h6>${p.price}</h6></td>
        <td><h6>{p.brand}</h6></td>
        <td>
          <select
            onChange={handleColorChange}
            name="color"
            className="form-control"
          >
            {p.color ? (
              <option value={p.color}>{p.color}</option>
            ) : (
              <option>Select</option>
            )}
            {colors
              .filter((c) => c !== p.color)
              .map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
          </select>
        </td>
        <td className="text-center">
          <input
            type="number"
            className="form-control"
            value={p.count}
            onChange={handleQuantityChange}
          />
        </td>
        <td className="text-center">
          {p.shipping === "Yes" ? (
            <CheckCircleOutlined className="text-success" />
          ) : (
            <CloseCircleOutlined className="text-danger" />
          )}
        </td>
        <td className="text-center">
          <CloseOutlined
            onClick={handleRemove}
            className="text-danger pointer"
          />
        </td>
      </tr> */}

      <div className="card mb-2 rounded">
        <div >
          <div className="d-flex align-items-start mb-4 mt-4 justify-center" >

            <div className="col-3" >
              <div className="bg-image hover-overlay ripple" style={{ width: "100%", height: "auto" }}>
                {p.images.length ? (
                  <ModalImage small={p.images[0].url} large={p.images[0].url} />
                ) : (
                  <ModalImage small={laptop} large={laptop} />
                )}
              </div>
            </div>

            <div className="col-6">
              <h3>{p.title}</h3>
              <h6 className="text-muted pt-2">Brand: {p.brand}</h6>
              <div className="d-flex align-items-start pt-2">
                <select
                  onChange={handleColorChange}
                  name="color"
                  className="form-control btn btn-primary outline"
                >
                  {p.color ? (
                    <option value={p.color}>{p.color}</option>
                  ) : (
                    <option>Select</option>
                  )}
                  {colors
                    .filter((c) => c !== p.color)
                    .map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                </select>
                <td className="text-center pt-2">
                  <input
                    type="number"
                    className="form-control"
                    value={p.count}
                    onChange={handleQuantityChange}
                  />
                </td>
              </div>

            </div>


            <div className="col-4">
              <h6 className="text-primary">Price: ${p.price}</h6>
              <div className=" btn ">
                <p>Shipping:</p>
                {p.shipping === "Yes" ? (
                  <CheckCircleOutlined className="text-success" />
                ) : (
                  <CloseCircleOutlined className="text-danger" />
                )}
              </div>
              <br />
              <div className="btn">
                <p>Remove:</p>
                <CloseOutlined
                  onClick={handleRemove}
                  className="text-danger pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </tbody>
  );
};

export default ProductCardInCheckout;
