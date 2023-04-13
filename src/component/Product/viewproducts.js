import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import "./all.css";
import ProductCard from "./productcard";
import ProductByCategory from "./productByCategory";
function ViewAllProducts() {
  const [prop, setProp] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    try {
      axios.get("http://localhost:8084/product/getallproducts").then((res) => {
        setProp(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);
  const products = selectedCategory
    ? prop.filter((a) => prop.category === selectedCategory)
    : prop;
  return (
    <div>
      <Nav />
      <div>
        <ProductByCategory setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="product-list">
        {products.map((a) => (
          <ProductCard key={a.productId} product={a} />
        ))}
      </div>
    </div>
  );
}
export default ViewAllProducts;



