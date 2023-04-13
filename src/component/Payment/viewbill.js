import React from "react";




import Nav from "../Nav";

import Table from "@mui/material/Table";

import TableBody from "@mui/material/TableBody";

import TableContainer from "@mui/material/TableContainer";

import TableHead from "@mui/material/TableHead";

import { tableCellClasses } from "@mui/material/TableCell";

import Paper from "@mui/material/Paper";

import { Button } from "@mui/material";

import { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";

import { TableCell, TableRow } from "@mui/material";




const StyledTableCell = styled(TableCell)(({ theme }) => ({

  // ...

}));




const StyledTableRow = styled(TableRow)(({ theme }) => ({

  // ...

}));




function Viewbill() {

  const [payments, setPayments] = useState([]);




  useEffect(() => {
    
    fetch("http://localhost:8084/Payment/viewBill")

      .then((res) => res.json())

      .then((data) => setPayments(data))

      .catch((error) => console.error(error));

  }, []);

console.log("Payments",payments)


  return (

    <div>

      <Nav></Nav>

      <br />

      <TableContainer component={Paper}>

        <Table sx={{ maxWidth: 850 }} align="center">

          <TableHead>

            <StyledTableRow>
              <StyledTableCell align="center">Total Amount</StyledTableCell>

              <StyledTableCell align="center">Payment Type</StyledTableCell>

              <StyledTableCell align="center">Date</StyledTableCell>

            </StyledTableRow>

          </TableHead>

          <TableBody>

            {payments.map((payment) => (

              <StyledTableRow key={payment.id}>
    
                <StyledTableCell align="center">

                  {payment.amount}

                </StyledTableCell>

                <StyledTableCell align="center">

                  {payment.type}

                </StyledTableCell>

                <StyledTableCell align="center">

                  {payment.date}

{/*                   {payment.date ? payment.date : 'N/A'} */}




                </StyledTableCell>

              </StyledTableRow>

            ))}

          </TableBody>

        </Table>

        <br />

        <div className="text-center">

          <Button>

            <a href="/products" className="btn btn-danger">

              Cancel

            </a>

          </Button>

        </div>

      </TableContainer>

    </div>

  );

}




export default Viewbill;