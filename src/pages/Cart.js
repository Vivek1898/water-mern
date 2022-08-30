import { useDispatch, useSelector } from "react-redux";

import { Button } from 'antd';
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import React from "react";
import { userCart } from "../functions/user";

const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const saveCashOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    dispatch({
      type: "COD",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (
    cart.map((p) => (
      <ProductCardInCheckout key={p._id} p={p} />
    ))
    // <table className="table table-bordered table-success table-striped table-responsive-xl table-hover">
    //   <thead className="thead-light text-bold fw-bolder">
    //     <tr>
    //       <th scope="col">Image</th>
    //       <th scope="col">Title</th>
    //       <th scope="col">Price</th>
    //       <th scope="col">Brand</th>
    //       <th scope="col">Color</th>
    //       <th scope="col">Count</th>
    //       <th scope="col">Shipping</th>
    //       <th scope="col">Remove</th>
    //     </tr>
    //   </thead>

    //   {
    //     cart.map((p) => (
    //       <ProductCardInCheckout key={p._id} p={p} />
    //     ))
    //   }
    // </table >
  );

  return (
    <div className="bg-light">
      <div className="container flex">
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex flex-row">
              <h2 className="fw-bold pb-2 pt-4"> My Cart &nbsp;</h2>
              <h6> ({cart.length} Product)</h6>
            </div>


            {!cart.length ? (
              <h4 className="text-muted">
                No products in cart. <Link to="/shop">Continue Shopping.</Link>
              </h4>
            ) : (
              showCartItems()
            )}
          </div>
          <div className="col-md-4 pb-4 card">
            <h3 className="fw-bold text-muted pt-4">Order Summary</h3>
            <hr />
            <h4>Products</h4>
            {cart.map((c, i) => (
              <div key={i}>
                <h6 className="text-primary">
                  {c.title} x {c.count} = ${c.price * c.count}
                </h6>
              </div>
            ))}
            <hr />
            <h4>Total: <b>${getTotal()}</b></h4>
            <hr />
            {user ? (
              <>
                <Button
                  onClick={saveOrderToDb}
                  type="primary"
                  size="large"
                  className="bg-primary"
                  disabled={!cart.length}

                >
                  Proceed to Checkout
                </Button>
                <br />
                <Button
                  onClick={saveCashOrderToDb}
                  disabled={!cart.length}
                  className="btn btn-outline-primary"
                >
                  Pay Cash on Delivery
                </Button>
              </>
            ) : (
              <Button
                type="primary"
                size="large"
                className="bg-primary"
              >
                <Link
                  to={{
                    pathname: "/login",
                    state: { from: "cart" },
                  }}
                >
                  Login to Checkout
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cart;
