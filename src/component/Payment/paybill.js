import React, { useState } from "react";
import axios from "axios";
import Nav from "../Nav";
import './paybill.css';

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

import { Snackbar, SnackbarContent } from "@mui/material";

import { green } from "@mui/material/colors";

const Paybill = () => {
  const [id, setId] = useState("");
  const [pin, setPin] = useState("");
  const [name, setName] = useState("");
  const [cno, setCno] = useState("");
  const [cvv, setCvv] = useState("");
  const [exp_month, setExpMonth] = useState("");
  const [exp_year, setExpYear] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [type, setType] = useState("");

  const [idError, setIdError] = useState("");
  const [pinError, setPinError] = useState("");
  const [nameError, setNameError] = useState("");
  const [cnoError, setCnoError] = useState("");
  const [cvvError, setCvvError] = useState("");
  const [expMonthError, setExpMonthError] = useState("");
  const [expYearError, setExpYearError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errors, setErrors] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleInput = (e, setState, setErrorState) => {
    setState(e.target.value);
    setErrorState("");
  };

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];

    if (!id) {
      setIdError("Please Enter UPI ID");
    } else {
      setIdError("");
    }
    if (!amount) {
      setAmountError("Please Enter Amount");
    } else {
      setAmountError("");
    }
    if (!pin) {
      setPinError("Please Enter UPI PIN");
    } else {
      setPinError("");
    }
    if (!name) {
      setNameError("Please Enter Name");
      } else {
      setNameError("");
    }
    if (!cno) {
      setCnoError("Please Enter Card No");
    } else {
      setCnoError("");
    }
    if (!cvv) {
      setCvvError("Please Enter CVV");
    } else {
      setCvvError("");
    }
    
    if (!exp_month) {
      setExpMonthError("Please Enter Exp Month");
    } else {
      setExpMonthError("");
    }
    if (!exp_year) {
      setExpYearError("Please Select Exp Year");
    } else {
      setExpYearError("");
    }

    const user = {
      amount:amount,
      paymentId,
      date:new Date(),
      type:paymentType
    };

 //console.log("Payment Details",user);
//  console.log("id: ",id)

  //  if(id==null && pin==null && amount==null){
    axios
      .post("http://localhost:8084/Payment/payBill", user)
      .then((resp) => {
        // console.log(resp,"payment response");
        setOpenSnackbar(true);
        alert("Payment Successfull")
        window.location.href = "/viewbill";
      })
      .catch((error) => {
        //console.log(error);
        //alert("error occured");
      });
// else{
//   console.log("Error");
// }
  };

  console.log(openSnackbar);
  const renderPaymentForm = () => {
    switch (paymentType) {
      case "1":
        return (
          <div>
            <div className="con">
              <h5 style={{ color: "rgb(15, 30, 74)" }}> Pay Using Cash</h5>
              <FormControl
                variant="outlined"
                value="0"
                size="sm"
                margin="normal"
                className="form-control"
              >
                <TextField
                  label="Amount"
                  value={amount}
                  fullWidth
                  onChange={(e) => handleInput(e, setAmount, setAmountError)}
                  error={Boolean(amountError)}
                  helperText={amountError}
                  // onChange={handleAmountChange}
                />
              </FormControl>
              <br></br>

              <div className="text-center"> {" "}
                <Button>{" "}
                  <a href="/paybill" className="btn btn-danger"> Cancel{" "}
                  </a>{" "}
                </Button>&nbsp;&nbsp;{" "}
                <Button
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit}
                >Pay {" "}</Button>
               {" "}
              </div>
            </div>
          </div>
        );

      case "2":
        return (
          <div>
            <div className="con">
              <h5 style={{ color: "rgb(15, 30, 74)" }}> Pay Using UPI</h5>
              <FormControl
                variant="outlined"
                value="1"
                size="sm"
                margin="normal"
                className="form-control"
              >
                <TextField
                  label="Amount"
                  value={amount}
                  onChange={(e) => handleInput(e, setAmount, setAmountError)}
                  error={Boolean(amountError)}
                  helperText={amountError}
                  fullWidth
                 //onChange={handleAmountChange}
                />
              </FormControl>
              <br></br>
              <FormControl
                variant="outlined"
                size="sm"
                margin="normal"
                className="form-control"
              >{" "}
                <TextField
                  id="product-street-textfield"
                  label="Upi_Id"
                  value={id}
                  onChange={(e) => handleInput(e, setId, setIdError)}
                  error={Boolean(idError)}
                  helperText={idError}
                  fullWidth
                />{" "}
              </FormControl>
           <br></br>
              <FormControl
                variant="outlined"
                size="sm"
                margin="normal"
                className="form-control"
              >
            {" "}
                <TextField
                  id="product-street-textfield"
                  label="Upi_Pin"
                  value={pin}
                  onChange={(e) => handleInput(e, setPin, setPinError)}
                  error={Boolean(pinError)}
                  helperText={pinError}
                />
              {" "}
              </FormControl>
            <br></br>
              <div className="text-center">{" "}
                <Button>{" "}
                  <a href="/paybill" className="btn btn-danger">Cancel{" "}
                  </a>{" "}
                </Button> &nbsp;&nbsp;{" "}
                <Button
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit}
                >Pay {" "}
                </Button>{" "}
              </div>
            </div>
          </div>
        );
      case "3":
        return (
          <div>
            <div className="con">
              <h5 style={{ color: "rgb(15, 30, 74)" }}> Pay Using Card</h5>
              <FormControl
                variant="outlined"
                value="2"
                size="sm"
                margin="normal"
                className="form-control"
              >
                <TextField
                  label="Amount"
                  value={amount}
                  onChange={(e) => handleInput(e, setAmount, setAmountError)}
                  error={Boolean(amountError)}
                  helperText={amountError}
                  fullWidth
                  //  onChange={handleAmountChange}
                />
              </FormControl>
              <br></br>
              <FormControl
                variant="outlined"
                size="sm"
                margin="normal"
                className="form-control"
              >
              {" "}
                <TextField
                  id="product-street-textfield"
                  label="Card Holder Name"
                  value={name}
                  onChange={(e) => handleInput(e, setName, setNameError)}
                  error={Boolean(nameError)}
                  helperText={nameError}
                  fullWidth
                />
            {" "}
              </FormControl>
               <br></br>
              <FormControl
                variant="outlined"
                size="sm"
                margin="normal"
                className="form-control"
              >
              {" "}
                <TextField
                  id="product-street-textfield"
                  label="Card Number"
                  value={cno}
                  onChange={(e) => handleInput(e, setCno, setCnoError)}
                  error={Boolean(cnoError)}
                  helperText={cnoError}
                  fullWidth
                />
               {" "}
              </FormControl>
              <br></br>
              <FormControl
                variant="outlined"
                size="sm"
                margin="normal"
                className="form-control"
              >
              {" "}
                <TextField
                  id="product-street-textfield"
                  label="Enter CVV"
                  value={cvv}
                  onChange={(e) => handleInput(e, setCvv, setCvvError)}
                  error={Boolean(cvvError)}
                  helperText={cvvError}
                  fullWidth
                />
               {" "}
              </FormControl>
               <br></br>
              <FormControl
                className="form-control"
                variant="outlined"
                size="sl"
                margin="normal"
              >
                {" "}
                <InputLabel id="category-select-label">Exp_month</InputLabel>
                <Select
                  className="select-control"
                  labelId="category-select-label"
                  id="category-select"
                  label="Category"
                  value={exp_month}
                  onChange={(e) =>
                    handleInput(e, setExpMonth, setExpMonthError)
                  }
                  error={Boolean(expMonthError)}
                  helperText={expMonthError}
                  fullWidth
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="7">7</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                  <MenuItem value="9">9</MenuItem>
                  <MenuItem value="10">10</MenuItem>
                  <MenuItem value="11">11</MenuItem>
                  <MenuItem value="12">12</MenuItem>
                </Select>
              </FormControl>
              <br></br>
                <FormControl
                className="form-control"
                variant="outlined"
                size="sl"
                margin="normal"
              >
                {" "}
                <InputLabel id="category-select-label">Exp_year</InputLabel>
                <Select
                  className="select-control"
                  labelId="category-select-label"
                  id="category-select"
                  label="Category"
                  value={exp_year}
                  onChange={(e) => handleInput(e, setExpYear, setExpYearError)}
                  error={Boolean(expYearError)}
                  helperText={expYearError}
                  fullWidth
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2024">2024</MenuItem>
                  <MenuItem value="2025">2025</MenuItem>
                  <MenuItem value="2026">2026</MenuItem>
                  <MenuItem value="2027">2027</MenuItem>
                  <MenuItem value="2028">2028</MenuItem>
                  <MenuItem value="2029">2029</MenuItem>
                  <MenuItem value="2030">2030</MenuItem>
                  <MenuItem value="2031">2031</MenuItem>
                  <MenuItem value="2032">2032</MenuItem>
                  <MenuItem value="2033">2033</MenuItem>
                  <MenuItem value="2034">2034</MenuItem>
                  <MenuItem value="2035">2035</MenuItem>
                  <MenuItem value="2036">2036</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <div className="text-center">
            {" "}
                <Button>
                {" "}
                  <a href="/paybill" className="btn btn-danger">
                                          Cancel                    {" "}
                  </a>
                                   {" "}
                </Button>
                                  &nbsp;&nbsp;                  {" "}
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                >
                                      Pay                  {" "}
                </Button>
                               {" "}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    
    <div className="option_class">
      <Nav></Nav>
      <br></br>
      <h2>Payment</h2>
      <label>
        <input
          type="radio"
          value="1"
          checked={paymentType === "1"}
          onChange={handlePaymentTypeChange}
        />
        Cash
      </label>
      &nbsp;&nbsp;
      <label>
        <input
          type="radio"
          value="2"
          checked={paymentType === "2"}
          onChange={handlePaymentTypeChange}
        />
        UPI
      </label>
      &nbsp;&nbsp;
      <label>
        <input
          type="radio"
          value="3"
          checked={paymentType === "3"}
          onChange={handlePaymentTypeChange}
        />
        Card
      </label>
      &nbsp;&nbsp;
      <br></br>
      <br></br>
      <div>{renderPaymentForm()}</div>
    </div>
  );
};
export default Paybill;

