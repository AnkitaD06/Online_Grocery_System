import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Stack from "@mui/material/Stack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { Button, ButtonGroup } from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
//import { toast } from "react-toastify/dist";

const CustomerCard = ({ product }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist]=useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    axios.post("http://localhost:8084/cart/addToCart", product)
          .then(res =>{
            console.log(res.data.message)
            setIsAddedToCart(false)
          })
          .catch(err=>{
            console.error(err)
            setIsAddedToCart(false)
          })
    toast.success("Item added to cart successfully!", { autoClose: 600 });
  };
  const handleAddToWishlist = () => {
    setIsAddedToWishlist(true);
    axios.post("http://localhost:8084/wishlist/addWishlist", product)
          .then(res =>{
            console.log(res.data.message)
            setIsAddedToWishlist(false)
          })
          .catch(err=>{
            console.error(err)
            setIsAddedToWishlist(false)
          })
    toast.success("Item added to cart successfully!", { autoClose: 600 });
  };
  const con = {
    margin: "10px",
  };

  return (
    <div>
      <br></br>
      <div
        className="container"
        style={{
          width: "250px",
          height: "350px",
          fontstyle: "italic",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gridGap: "20px",
        }}
      >
        <div className="card-deck">
          <div className="card text-center">
            <div className="card-block">
              <br></br>
              <h5
                className="card-title"
                style={{ fontFamily: "Arial", fontSize: "18px" }}
              >
                {product.productName}
              </h5>
              <img
                src={product.imageUrl}
                className="card-img"
                style={{ width: "150px" }}
                alt="..."
              />
              <p className="card-text" style={{ fontStyle: "italic" }}>
                {product.description}
              </p>
              <p className="card-text">{product.price}</p>
            </div>
            <br></br>
            <Stack direction="row" >
              <Button
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                size="small"
                color="error"
                style={con}
                disabled={isAddedToCart}
                onClick={handleAddToCart}
              >
                {isAddedToCart ? "Added to Cart" : "Cart"}
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                variant="contained"
                color="success"
                endIcon={<FavoriteIcon />}
                size="small"
                style={con}
                disabled={isAddedToWishlist}
                onClick={handleAddToWishlist}
              >
                {isAddedToWishlist ? "wishlisted" : "wishlist"}
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
