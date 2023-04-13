import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import "./order.css";
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
import axios from "axios";

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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function ViewOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/viewOrder")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Nav></Nav>
      <br></br>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 850 }} align="center">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">OrderId</StyledTableCell>
              <StyledTableCell align="center">Payment</StyledTableCell>
              <StyledTableCell align="center">Deliver To</StyledTableCell>
              <StyledTableCell align="center">Order Date</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <StyledTableRow key={order.orderId}>
                <StyledTableCell align="center">
                  {order.orderId}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {order.payment}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {order.deliverTo}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {order.orderDate}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {order.status}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button>View Details</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <br></br>
        <div className="text-center">
          <Button>
            <a href="/products" class="btn btn-danger">
              Cancel
            </a>
          </Button>
        </div>
      </TableContainer>
    </div>
  );
}

export default ViewOrder;
