import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import CartItem from "./cartitem";
import { Button } from "@mui/material";
import axios from "axios";

const Cart = ({ cartItems }) => {
  const [productCount, setProductCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [items, setItems] = useState([]);
 // const [cart, setCart] = useState(cartItems);

  const handleRemoveFromCart = (item) => {
    const newCart = items.filter((cartItem) => cartItem.id !== item.id);
    setItems(newCart);
  };

  const handleQuantityChange = (item, newQuantity) => {
    const newCart = [...items];
    const index = newCart.findIndex((cartItem) => cartItem.id === item.id);
    newCart[index].quantity = newQuantity;
    setItems(newCart);
  };


  const handleAddToCart = () => {
    const productIds = cartItems.map((item) => item.id);
    const cartDTO = {
      productId: productIds,
      productCount: productCount,
      totalPrice: totalPrice,
    };
  };

  // console.log(items.product.productId)
  // console.log(items.product[0].productId)
  const getCartDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8084/cart/getAllCart`);
      console.log(response.data[0].products.imageUrl);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCartDetails();
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.productcount,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <Nav />

      <div className="container-fluid py-5 bg-light">
        <h3 className="text-center mb-4">Cart Items</h3>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                {items.length === 0 ? (
                  <div className="col-sm-12 empty-cart-cls text-center">
                    <img
                      src="https://i.imgur.com/dCdflKN.png"
                      alt="img"
                      style={{ width: "100px", height: "100px" }}
                      className="img-fluid mb-4 mr-3"
                    />
                    <h3>
                      <strong>Your Cart is Empty</strong>
                    </h3>
                    <h4>Add something to make me happy :)</h4>
                    <a
                      href="/products"
                      className="btn btn-primary cart-btn-transform m-3"
                      data-abc="true"
                      style={{ color: "black" }}
                    >
                      continue shopping
                    </a>
                  </div>
                ) : (
                  items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      products={item.products}
                      handleRemoveFromCart={handleRemoveFromCart}
                      handleQuantityChange={handleQuantityChange}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Price: ₹{getTotalPrice()}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Total Items: {getTotalItems()}
                </h6>
                <Button variant="contained">
                  <a
                    href="/placeorder"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Proceed to Checkout
                  </a>
                </Button>
                &nbsp;&nbsp;
                <Button variant="contained" color="error">
                  <a
                    href="/products"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Cancel
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
