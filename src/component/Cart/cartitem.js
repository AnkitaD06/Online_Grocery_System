import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import axios from "axios";

const CartItem = ({ item, products, handleRemoveFromCart, handleQuantityChange }) => {
  console.log(item,"item data");
  const [quantity, setQuantity] = useState(item.productCount);
  const [cartId, setcartId] = useState("");

  const updateCartDetails = async () => {
    try {
      const data={
        productCount:quantity,
        productId:products.productId,
        totalPrice:0,
      }
      const response = await axios.put(`http://localhost:8084/cart/updateCart${cartId}`,data);
      console.log(response.data);
      setcartId(response.data.cartId);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    updateCartDetails();
  }, quantity);

  const handleRemoveClick = () => {
    handleRemoveFromCart(item);
  };

  const handleQuantityIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity((prev)=>prev+1);
    handleQuantityChange(item, newQuantity);
  };
console.log("quantity value=",quantity);
  const handleQuantityDecrease = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      handleQuantityChange(item, newQuantity);
    }
  };

  return (
    <div className="card mb-3">
      {products.map((product, index) => (
        <div className="row g-0" key={index}>
          <div className="col-md-4">
            <img
              src={product.imageUrl}
              className="card-img"
              style={{ width: "100px" }}
              alt="product"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">Price: ₹{product.price}</p>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-between">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Button variant="outlined" onClick={handleQuantityDecrease}>
                -
              </Button>
              <p style={{ margin: "5px 0px" }}>{quantity}</p>
              <Button variant="outlined" onClick={handleQuantityIncrease}>
                +
              </Button>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-outline-danger"
                onClick={handleRemoveClick}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
