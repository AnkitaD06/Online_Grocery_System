import React from "react";
import Nav from "../Nav";
import "./order.css"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";

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
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function ViewOrderByStatus() {
    return(
        <div>
            <Nav></Nav>
            <br></br>
            <div className="con">
            <h5 style={{ color: "rgb(15, 30, 74)" }}>STATUS</h5>
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
            label="Category"
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="2023">PLACED</MenuItem>
            <MenuItem value="2024">SHIPPED</MenuItem>
            <MenuItem value="2025">PICKED UP</MenuItem>
            <MenuItem value="2025">ON THE WAY</MenuItem>
            <MenuItem value="2026">DELIVERED</MenuItem>
            </Select>
            
            </FormControl>
            <Button variant="contained">Search</Button>
            </div>
      <TableContainer>
        <Table sx={{ maxWidth: 850 }} align="center">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">OrderId</StyledTableCell>
              <StyledTableCell align="center">User Name</StyledTableCell>
              <StyledTableCell align="center">Total Amount</StyledTableCell>
              <StyledTableCell align="center">Order Date</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">
                1
              </StyledTableCell>
              <StyledTableCell align="center">
                Cash
              </StyledTableCell>
              <StyledTableCell align="center">
              Bangalore,Karnataka,785768
              </StyledTableCell>
              <StyledTableCell align="center">
                02-03-2023
              </StyledTableCell>
              <StyledTableCell align="center">
                ON THE WAY
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button  variant="contained" > <a href="/updatestatus" style={{textDecoration:'none',color:'white'}}>Update</a></Button>
              
              </StyledTableCell>
              </StyledTableRow>
              </TableBody>
              </Table>
              </TableContainer>
            {/* <div className="card mx-auto mt-3" id="placeorder">
               
                <div className="card-body"></div>
           <div className="maincontainer">
            <form>
            <h3>View By Status</h3>
            <label for="status">Status </label>
                        <select name="status" id="status" required>
                        <option value="/">Select</option>
                            <option value="placed">Placed</option>
                            <option value="shipped">Shipped</option>
                            <option value="ontheway">On The Way</option>
                            <option value="pickedup">Picked Up</option>
                            <option value="delivered">Delivered</option>
                        </select>&nbsp;
                        <button type="submit"> Search </button><br></br><br></br>

                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>User Name &nbsp;</th>
                                    <th>Mobile Number &nbsp;</th>
                                    <th>Order Name &nbsp;</th>
                                    <th>Order Quantity &nbsp;</th>
                                    <th>Total Amount &nbsp;</th>
                                    <th>Date &nbsp;</th>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>
                                </tr>
                            </thead>
                        </table><br></br>

                        <button><a href="/" class="btn btn-danger">Cancel</a></button>&nbsp;&nbsp;
                        <button type="submit">Submit</button>&nbsp;&nbsp;
            </form>
            </div>
        </div> */}
        </div>
    );
}

export default ViewOrderByStatus;

