import React from "react";
import Nav from "../Nav";
import "./order.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { tableCellClasses } from "@mui/material/TableCell";
import UpgradeSharpIcon from "@mui/icons-material/UpgradeSharp";
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
const handleCancel = () => {
  window.location.href = "/allorders";
};
function ViewOrder() {
  const handleUpdate = () => {
    window.location.href = "/updatestatus";
  };
  return (
    <div>
      <Nav></Nav>
      <br></br>
      <form id="product" className="m-auto">
        <FormControl
          label
          variant="standard"
          size="sm"
          style={{ marginLeft: "450px", width: "300px" }}
        >
          <Select name="category" id="category">
            <MenuItem value="">Select Status</MenuItem>
            <MenuItem value="VEGETABLES">PLACED</MenuItem>
            <MenuItem value="FRUITS">SHIPPED</MenuItem>
            <MenuItem value="GRAINS">PICKEDUP</MenuItem>
            <MenuItem value="OTHER">ON THE WAY</MenuItem>
            <MenuItem value="DAIRY">DELIVERED</MenuItem>
          </Select>
        </FormControl>
        <Button
          color="primary"
          startIcon={<SearchIcon />}
          
        ></Button>
        <Button
          color="error"
          startIcon={<CancelPresentationIcon />}
          onClick={handleCancel}
        ></Button>
      </form>
      <br></br>
      <TableContainer>
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
            <StyledTableRow>
              <StyledTableCell align="center">1</StyledTableCell>
              <StyledTableCell align="center">Cash</StyledTableCell>
              <StyledTableCell align="center">
                Bangalore,Karnataka,785768
              </StyledTableCell>
              <StyledTableCell align="center">02-03-2023</StyledTableCell>
              <StyledTableCell align="center">ON THE WAY</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  startIcon={<UpgradeSharpIcon />}
                  centerRipple={true}
                  alignItems="center"
                  onClick={handleUpdate}
                >Update</Button>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">2</StyledTableCell>
              <StyledTableCell align="center">Card</StyledTableCell>
              <StyledTableCell align="center">
                Bangalore,Karnataka,785768
              </StyledTableCell>
              <StyledTableCell align="center">02-04-2023</StyledTableCell>
              <StyledTableCell align="center">PICKEDUP</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  startIcon={<UpgradeSharpIcon />}
                  centerRipple={true}
                  alignItems="center"
                  onClick={handleUpdate}
                >Update</Button>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">3</StyledTableCell>
              <StyledTableCell align="center">UPI</StyledTableCell>
              <StyledTableCell align="center">
                Bangalore,Karnataka,785768
              </StyledTableCell>
              <StyledTableCell align="center">28-03-2023</StyledTableCell>
              <StyledTableCell align="center">DELIVERED</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  startIcon={<UpgradeSharpIcon />}
                  centerRipple={true}
                  alignItems="center"
                  onClick={handleUpdate}
                  disabled
                >Update</Button>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">4</StyledTableCell>
              <StyledTableCell align="center">UPI</StyledTableCell>
              <StyledTableCell align="center">
                Bangalore,Karnataka,785768
              </StyledTableCell>
              <StyledTableCell align="center">28-03-2023</StyledTableCell>
              <StyledTableCell align="center">SHIPPED</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  startIcon={<UpgradeSharpIcon />}
                  centerRipple={true}
                  alignItems="center"
                  onClick={handleUpdate}
                >Update</Button>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">5</StyledTableCell>
              <StyledTableCell align="center">UPI</StyledTableCell>
              <StyledTableCell align="center">
                Bangalore,Karnataka,785768
              </StyledTableCell>
              <StyledTableCell align="center">28-03-2023</StyledTableCell>
              <StyledTableCell align="center">PLACED</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  startIcon={<UpgradeSharpIcon />}
                  centerRipple={true}
                  alignItems="center"
                  onClick={handleUpdate}
                >Update</Button>
              </StyledTableCell>
            </StyledTableRow>
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
      {/* <div className="card mx-auto mt-3" id="placeorder">

            </div>
                <div className="card-body">
                <div className="maincontainer">
                    <form>
                <h3>View Order</h3>
            <table class="table table-bordered">
         
<thead>
<tr>
<th>Order Id &nbsp;</th>
<th>Order Name &nbsp;</th>
<th>Order Quantity &nbsp;</th>
<th>Total Amount &nbsp;</th>
<th>Date &nbsp;</th>
<th>Action &nbsp;</th>
</tr>
</thead>
<tr>
<td> </td> <td></td><td></td><td></td><td></td><td>&nbsp;&nbsp;<button><a href="/cancelorder" class="btn btn-danger">Cancel Order </a></button>&nbsp;&nbsp;</td>
</tr>
<tr>
<td> </td> <td></td><td></td><td></td><td></td><td>&nbsp;&nbsp;<button><a href="/cancelorder" class="btn btn-danger">Cancel Order </a></button>&nbsp;&nbsp;</td>
</tr>
<tr>
<td> </td> <td></td><td></td><td></td><td></td><td>&nbsp;&nbsp;<button><a href="/cancelorder" class="btn btn-danger">Cancel Order </a></button>&nbsp;&nbsp;</td>
</tr>
</table><br></br>
<button><a href="/" class="btn btn-danger">Cancel</a></button>
</form>
        </div></div> */}
    </div>
  );
}

export default ViewOrder;
