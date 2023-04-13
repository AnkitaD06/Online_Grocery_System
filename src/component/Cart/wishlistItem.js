import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./WishlistItem.css";

const WishlistItem = ({ items, products, handleRemoveWishlist, handleAddToCart }) => {
  const handleRemoveClick = () => {
    handleRemoveWishlist(items);
  };

  const handleAddClick = (product) => {
    handleAddToCart(product);
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {products.map((product, index) => (
          <div className="cart-item" key={index}>
            <div className="item-image">
              <img
                src={product.imageUrl}
                alt="product"
              />
            </div>
            <div className="item-details">
              <h5 className="item-name">{product.productName}</h5>
              <p className="item-price">Price: ₹{product.price}</p>
              <p className="item-description">{product.description}</p>
              <div className="button-group">
                <button
                  className="btn btn-danger remove-button"
                  onClick={handleRemoveClick}
                >
                  Remove
                </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="btn btn-primary add-to-cart-button"
                  onClick={() => handleAddClick(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistItem;
