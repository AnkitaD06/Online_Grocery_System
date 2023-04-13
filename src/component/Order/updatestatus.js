import React, { useState } from "react";
import Nav from "../Nav";
import "./order.css"
import axios from "axios";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
function UpdateStatus() {
    const [orderId, setOrderId] = useState("");
    const [status, setStatus] = useState("");
   
    const[formErrors, setFormErrors] = useState({});

    const addStatus = () => {
        let errors ={};
        if(!orderId){
            errors['orderIdError'] = " Please Enter Order Id";
        }
        if(!status){
            errors['statusError'] = "Please Select Status";
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if(noErrors){
            const payload = {
                orderId: orderId,
                status: status
            }
            axios.post("http://localhost:9191/delivery/add",payload).then(resp => alert("Delivery Slot Added"));
        }
      }

    return(
            <div>
      <Nav />
      <div className="con">
        <h5 style={{ color: "rgb(15, 30, 74)" }}>UPDATE STATUS</h5>
        <FormControl
          variant="outlined"
          size="sm"
          margin="normal"
          className="form-control"
        >
          <TextField id="product-imageurl-textfield" label="Order Id" />
        </FormControl>
        <FormControl
          className="form-control"
          variant="outlined"
          size="sl"
          margin="normal"
        >
          <InputLabel id="category-select-label">Status</InputLabel>
          <Select
            className="select-control"
            labelId="category-select-label"
            id="category-select"
            // value={category}
            // onChange={handleCategoryChange}
            label="Status"
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="2023">PLACED</MenuItem>
            <MenuItem value="2024">SHIPPED</MenuItem>
            <MenuItem value="2025">ON THE WAY</MenuItem>
            <MenuItem value="2026">PICKED UP</MenuItem>
            <MenuItem value="2027">DELIVERED</MenuItem>
            
            </Select>
            </FormControl>
            <div className="text-center">
            <Button
              variant="contained"
              style={{ textDecoration: "none", color: "white" }}
            >
              Update
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="error">
              <a
                href="/allorders"
                style={{ textDecoration: "none", color: "white" }}
              >
                Cancel
              </a>
            </Button>
            </div>
        </div>
      {/* <div className=""></div>
      <div className="card mx-auto mt-3" id="placeorder">

       
        <div className="card-body">  <div className="maincontainer">
          <form onSubmit={UpdateStatus} >
          <h3>Update Status</h3>
            <div className="row mb-4">
              <label className="col-3 col-form-label">Order Id</label>
              <div className="col-8">
                <input
                  type="number"
                  name="orderId"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="form-control"
                  placeholder="Enter Order Id" required
                />
               
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-3 col-form-label">Status </label>
              <div className="col-8">
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control" required
                >
                  <option value="">Select</option>
                  <option value="0">Placed</option>
                            <option value="1">Shipped</option>
                            <option value="2">On The Way</option>
                            <option value="3">Picked Up</option>
                            <option value="4">Delivered</option>
                </select>
              </div>
            </div><br></br>

            <button><a href="/" class="btn btn-danger">Cancel</a></button>&nbsp;&nbsp;
            <button className="btn btn-primary mr 2" type="submit">
              Update
            </button>

            </form>
            </div>
            </div>
            </div> */}
            </div>

    );
}

export default UpdateStatus;

