import React from "react";
import { useState, useEffect } from "react";
import Nav from "../Nav";
// import "./order.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
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

function PlaceOrder() {
  return (
    <div>
      <Nav />
      <br></br>
      <TableContainer>
        <Table sx={{ maxWidth: 850 }} align="center">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">
                Hyderabad,Telangana,785768
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button> <a href="/deliveryslots" style={{textDecoration:'none'}}>Use</a></Button>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">
                Bnagalore,Karnataka,785768
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button> <a href="/deliveryslots" style={{textDecoration:'none'}}>Use</a></Button>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">
                Navimumbai,Mumbai,785768
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button> <a href="/deliveryslots" style={{textDecoration:'none'}}>Use</a></Button>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
        <br></br>
        <div className="text-center">
        <Button>
                <a href="/cart" class="btn btn-danger">
                  Cancel
                </a>
              </Button>
              &nbsp;&nbsp;
              <Button variant="contained">
                <a href="/orderform" style={{ textDecoration: "none",color:'white' }} >
                  New Address
                </a>
              </Button>
              </div>
      </TableContainer>
      {/* <div className="card mx-auto mt-3" id="placeorder">
        <div className="card-body">
          <div className="maincontainer">
            <form>
              <h3>View Address</h3>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Address&nbsp;</th>
                    <th>Action &nbsp;</th>
                  </tr>
                </thead>
                <tr>
                  <td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </td>
                  <td>
                    <button>
                      <a href="/payment">Use</a>
                    </button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </td>
                  <td>
                    <button>
                      <a href="/payment">Use</a>
                    </button>{" "}
                  </td>
                </tr>
              </table>
              <br></br>
              <button>
                <a href="/products" class="btn btn-danger">
                  Cancel
                </a>
              </button>
              &nbsp;&nbsp;
              <button>
                <a href="/orderform" style={{ textDecoration: "none" }}>
                  New Address
                </a>
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default PlaceOrder;
