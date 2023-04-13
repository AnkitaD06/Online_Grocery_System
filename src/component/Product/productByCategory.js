import React, { useState } from "react";
import "./all.css";
import axios from "axios";
import ProductCard from "./productcard";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { FormControl, Select, MenuItem, Button } from "@mui/material";
function ProductByCategory() {
  const [category, setCategory] = useState("");
  const [prop, setProp] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const cardStyle = {
    display: "flex",
    height: "550px",
  };
  const handleAddButton = () => {
    window.location.href = "/addproduct";
  };

  const handleCancel = () => {
    window.location.href = "/viewproducts";
  };
  const handleViewProduct = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8084/product/` + category)
      .then((res) => {
        if (res.data == null) {
          alert("no data");
        }
        setProp(res.data);
        setShowForm(true);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="m-auto">
      <br></br>
      <form id="product" className="m-auto">
        <FormControl
          label
          variant="standard"
          size="sm"
          style={{ marginLeft: "770px", width: "300px" }}
        >
          <Select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="">Select Category</MenuItem>
            <MenuItem value="VEGETABLES">VEGETABLES</MenuItem>
            <MenuItem value="FRUITS">FRUITS</MenuItem>
            <MenuItem value="GRAINS">GRAINS</MenuItem>
            <MenuItem value="OTHER">OTHER</MenuItem>
            <MenuItem value="DAIRY">DAIRY</MenuItem>
            <MenuItem value="MEAT">MEAT</MenuItem>
            <MenuItem value="SEAFOOD">SEA FOOD</MenuItem>
          </Select>
        </FormControl>
        <Button
          color="primary"
          startIcon={<SearchIcon />}
          onClick={handleViewProduct}
        ></Button>
        <Button
          color="error"
          startIcon={<CancelPresentationIcon />}
          onClick={handleCancel}
        ></Button>

        <Button
          className="text-center"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddButton}
        ></Button>
      </form>
      {showForm && (
        <div className="product-list" style={cardStyle}>
          {prop.map((a) => (
            <ProductCard key={a.productId} product={a} />
          ))}
        </div>
      )}
    </div>
  );
}
export default ProductByCategory;
