import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import WishlistItem from "./wishlistItem";
//import { Button } from "@mui/material";
import axios from "axios";


const Wishlist = ({ wishlistItems }) => {
  const [wishlist, setWishlist] = useState([]);


  const handleAddToWishlist = () => {
    const productIds = wishlistItems.map((item) => item.id);
    const cartDTO = {
      productId: productIds,
      //productCount: productCount,
      //totalPrice: totalPrice,
    };
  };

  const handleRemoveWishlist = (item) => {
    const newCart = wishlist.filter((cartItem) => cartItem.id !== item.id);
    setWishlist(newCart);
  };

  const getWishList = async () => {
    try {
      const response = await axios.get(`http://localhost:8084/wishlist/getAllWishlist`);
      console.log(response.data[0].products.imageUrl);
      setWishlist(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWishList();
  }, []);

  return (
    <div>
        <Nav/>
       
    <div className="container mt-4">
      <h3 className="mb-3 text-center"></h3>
      <div className="row">
        {wishlist.length === 0 ? (
          <div className="col-sm-12 empty-cart-cls text-center">
          <img src="https://thumbs.dreamstime.com/b/wishlist-icon-comic-style-like-document-cartoon-vector-illustration-white-isolated-background-favorite-list-splash-effect-218065056.jpg" alt="img" style={{ width: "100px", height: "100px" }} className="img-fluid mb-4 mr-3" />
          <h3><strong>Your wishlist is Empty</strong></h3>
          <h4>Add something to make me happy :)</h4>
          <a href="/products" className="btn btn-primary cart-btn-transform m-3" data-abc="true" style={{ color: "black" }}>continue shopping</a>
        </div>
      
        ) : (
          wishlist.map((item) => (
            <WishlistItem
              key={item.id}
              item={item}
              products={item.products}
              handleRemoveWishlist={handleRemoveWishlist}
            />
          ))
        )}
      </div>
    </div>
    </div>
   
  );
};

export default Wishlist;


// import React, { useEffect, useState } from "react";
// import wishlistService from "./wishlist-service";
// import Product from "./product-service";


// const Wishlist = ({ wishlist, setWishlist }) => {
//   const [loading, setLoading] = useState(true);

//   const handleRemoveFromWishlist = (id) => {
//     const arr = wishlist?.filter((item) => item?.productId !== id);
//     wishlistService.deleteByWishList(id).then((resp) => {
//       console.log(resp, "Removed Successfully")
//     })
//     setWishlist(arr);
//   };

//   useEffect(() => {
//     async function fetchWishlist() {
//       const wishlistData = await wishlistService.getWishList();
//       setWishlist(wishlistData?.data);
//       setLoading(false);
//     }
//     fetchWishlist();
//   }, []);

//   useEffect(() => {
//     async function fetchProducts() {
//       const updatedList = await Promise.all(
//         wishlist.map((item) =>
//           Product.getProductById(item?.wishlistId).then((resp) => resp.data)
//         )
//       );
//       setWishlist(updatedList);
//     }
//     if (!loading) {
//       fetchProducts();
//     }
//   }, [wishlist, loading]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <section className="wishlist_box">
//       <div className="row justify-content-center">
//         <div className="col-12">
//           <table className="table table-light table-hover m-5 w-100">
//             <tbody>
//               {wishlist?.map((item) => {
//                 return (
//                   <tr>
//                     <td>
//                       <img
//                         src={item.imageUrl}
//                         style={{ height: "8rem", width: "8rem" }}
//                         alt="img"
//                       ></img>
//                     </td>
//                     <td>{item.productName}</td>
//                     <td>₹{item.productPrice}</td>
//                     <td>
//                       <button
//                         className="btn btn-danger ms-2"
//                         onClick={() => handleRemoveFromWishlist(item.productId)}
//                       >
//                         Remove Item
//                       </button>
//                       {/* <button
//                         className="btn btn-dark ms-2"
//                         onClick={() => handleAddToCart(item)}
//                       >
//                         Add to cart
//                       </button> */}
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* <div>
//         <span>Total Wishlist Items: </span>
//         <span>{wishlist.length}</span>
//       </div> */}
//     </section>
//   );
// };

// export default Wishlist;
