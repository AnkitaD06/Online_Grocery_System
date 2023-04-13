// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Snackbar from "@mui/material/Snackbar";
// import Nav from "../Nav";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { FormControl, Stack } from "@mui/material";
// const StyledForm = styled("form")({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   gap: "1rem",
// });

// function Login() {
//   const [user, setUser] = useState({ userName: "", password: "" });
//   const [loginErrorMessage, setLoginErrorMessage] = useState();
//   const [open, setOpen] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [disErr, setDisErr] = useState(false);
//   const con = {
//     margin: "10px",
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validateEmail(userName);
//     validatePassword(password);
//     if (emailError === "" && passwordError === "") {
//       axios
//         .post(
//           "http://localhost:8084/users/login",
//           {},
//           {
//             params: user,
//           }
//         )

//         .then((response) => {
//           if (response.data.message === "Login Successfull") {
//             localStorage.setItem("status", "true");
//             console.log(response.data.message);
//             localStorage.setItem("role", response.data.role);
//             localStorage.setItem("username", response.data.userName);
//             console.log(response.data);
//             navigate("/");
//             alert("Login successful");
//             setOpen(true);
//           } else {
//             setLoginErrorMessage(response.data.message);
//           }
//         })
//         .catch((error) => {
//           alert(error.message);
//         });
//     } else {
//       console.log("hello");
//     }
//   };

//   const validateEmail = (userName) => {
//     // email validation regex
//     const re = /\S+@\S+\.\S+/;
//     if (!userName) {
//       setEmailError("email is required");
//     } else if (!re.test(userName)) {
//       setEmailError("Invalid email format");
//     } else {
//       setEmailError("");
//     }
//   };

//   const handleEmailChange = (e) => {
//     setUserName(e.target.value);
//     validateEmail(e.target.value);
//   };

//   const validatePassword = (password) => {
//     if (!password) {
//       setPasswordError("password is required");
//     } else {
//       setPasswordError("");
//     }
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     validatePassword(e.target.value);
//   };

//   return (
//     <div>
//       <Nav />

//       <div className="con">
//         <h5 style={{ color: "rgb(15, 30, 74)" }}>LOGIN</h5>
//         <FormControl
//           className="form-control"
//           variant="outlined"
//           size="sl"
//           margin="normal"
//         >
//           <TextField
//             id="userName"
//             label="Email"
//             type="text"
//             value={userName}
//             onChange={handleEmailChange}
//             error={!!emailError}
//             helperText={emailError}
//             autoComplete="off"
//           />
//         </FormControl>
//         <FormControl
//           className="form-control"
//           variant="outlined"
//           size="sl"
//           margin="normal"
//         >
//           <TextField
//             id="password"
//             label="Password"
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             error={!!passwordError}
//             helperText={passwordError}
//           />
//         </FormControl>
//         <div className="text-center">
//           <Stack direction="row" spacing={7}>
//             <Button variant="contained" size="small" color="error" style={con}>
//               Cancel
//             </Button>

//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               style={con}
//               onClick={handleSubmit}
//             >
//               Login
//             </Button>
//           </Stack>
//         </div>
//         <br></br>

//         <div className="text-center">
//           <h6>
//             New User? <a href="Register" style={{textDecoration:'none'}}> SignUp </a> here!
//           </h6>
//           <div className="text-center">
//           <Stack direction="row" spacing={7}>
//             <Button variant="contained" size="small" color="primary" style={con}>
//             <a href="ForgotPassword" style={{textDecoration:'none',color:"white"}}>Forgot Password </a>
//             </Button>

//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               style={con}
             
//             >
//               <a href="ResetPassword" style={{textDecoration:'none',color:"white"}}>reset password</a>
//             </Button>
//           </Stack>
//         </div>
//           {/* <h6>
//             <a href="ForgotPassword" style={{textDecoration:'none'}}>Forgot Password </a>
//           </h6>
//           <h6>
//             <a href="ResetPassword" style={{textDecoration:'none'}}>reset password</a>
//           </h6> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Nav from "../Nav";
import { Button, Stack } from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Snackbar
} from "@mui/material";

function Login() {
  const [user, setUser] = useState({ userName: "", password: "" });
  const [loginErrorMessage, setLoginErrorMessage] = useState();
  const [open,setOpen] = useState(false);
  const navigate = useNavigate();
  const[isOpen,setIsOpen]=useState(false)
  const [isLoginSuccess,setIsLoginSuccess]=useState(false)

  const formDataChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //const {name,value} = e.target
  };
  
  const con = {
    margin: "10px",
  };

  const handleClose = () =>{
    setIsOpen(false)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    axios
      .post(
        "http://localhost:8084/users/login",
        {},
        {
          params: user,
        }
      )

      .then((response) => {
        if (response.data.message === "Login Successfull") {
          localStorage.setItem("status", "true");
          console.log(response.data.message);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("username", response.data.userName);
          console.log(response.data);
          navigate("/")
          setIsLoginSuccess(true)
          setIsOpen(true)
        //  alert("Login successful");
        //   setOpen(true)
        } else {
          setLoginErrorMessage(response.data.message);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  

  return (
    <div>
      <Nav />
      <div>
        <div className="card mx-auto mt-5" id="login">
          <div className="card-header text-center">
            <h3 className="card-title">SignIn</h3>
          </div>
          <div className="card-body">
            <p>{loginErrorMessage} </p>

            <form >
              <div className="registers">
                <div className="row mb-4">
                  <label className="col-3 col-form-label">UserName</label>
                  <div className="col-8 " >
                    <input
                      type="text"
                      name="userName"
                      value={user.userName}
                      onChange={formDataChangeHandler}
                      placeholder="Enter username"
                      required
                      className="form-control"
                    />
                    {/* <div className="invalid-feedback">Please enter username</div> */}
                  </div>
                </div>

                <div className="row mb-4">
                  <label className="col-3 col-form-label">Password</label>
                  <div className="col-8 ">
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={formDataChangeHandler}
                      placeholder="Enter password"
                      required
                      className="form-control"
                    />
                    {/* <div className="invalid-feedback">Please enter password</div> */}
                  </div>
                </div>
                <Stack direction="row" spacing={7}>
                  <Button
                    variant="contained"
                    size="small"
                    color="error"
                    style={con}

                  >
                    Cancel
                  </Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    style={con}
                    onClick={handleFormSubmit}
                  >
                    Login
                  </Button>

                </Stack>
                <br></br>
                <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>{isLoginSuccess ? 'Login Successfull' : 'Login Failed'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isLoginSuccess ? 'Welcome back!' : 'Invalid username or password.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
                <p className="text-center">
                  Not Yet Registered ?{" "}
                  <Link
                    to={"/register"}
                    className="login"
                    style={{ textDecoration: "none" }}
                  >
                    SignUp
                  </Link>{" "}
                  here{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Snackbar from '@mui/material/Snackbar';
// import Nav from "../Nav";

// import axios from "axios";

// const StyledForm = styled('form')({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   gap: '1rem',
// });

// function Login() {
//   const [ user,setUser]=useState({userName:"",password:""})
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [disErr,setDisErr]=useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validateEmail(email);
//     validatePassword(password);
//     if (emailError === '' && passwordError === '') {
//       axios

//       .post(

//         "http://localhost:8084/users/login",

//         {},

//         {

//           params: user,

//         }

//       )
//       .then((response) => {
//         console.log(response.data);
//         localStorage.setItem('status', 'true');
//         localStorage.setItem('role', response.data.role);
//         localStorage.setItem('userName', response.data.userName);
//         localStorage.setItem('name', response.data.name);
//         localStorage.getItem('mobileNumber', response.data.mobileNumber);
//         if (response.data.Message !==  "" ) {
//           alert(response.data.Message);
//         } else {
//           alert('login successful');
//         }
//       })
//       .catch((err) => {
//        alert(err.Message)
//       });
//     }
//     else{
//       console.log("hello")
//     }
   
//   };
 

//   const validateEmail = (email) => {
//     // email validation regex
//     const re = /\S+@\S+\.\S+/;
//     if (!email) {
//       setEmailError('email is required');
//     } else if (!re.test(email)) {
//       setEmailError('Invalid email format');
//     } else {
//       setEmailError('');
//     }
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     validateEmail(e.target.value);
//   };

//   const validatePassword = (password) => {
//     if (!password) {
//       setPasswordError('password is required');
//     } else {
//       setPasswordError('');
//     }
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     validatePassword(e.target.value);
//   };

//   return (
//     <div>
//     <Nav />

//     <div className="card mx-auto mt-5" id="register">
//       <div className="card-header text-center">
//         <h3 className="card-title">SignUp</h3>
//       </div>
//       <div className="card-body">
       
//           <div className="registers">
//             <div className="row mb-4">
//     <div className='box'>
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}/>
//       <StyledForm onSubmit={handleSubmit}>
       
//         <TextField
//           id="email"
//           label="Email"
//           type="email"
//           value={email}
//           onChange={handleEmailChange}
//           error={!!emailError}
//           helperText={emailError}
//           autoComplete="off"
//         />
//         <TextField
//           id="password"
//           label="Password"
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//           error={!!passwordError}
//           helperText={passwordError}
       
//         />
//         <Button type="submit" variant="contained" disabled={emailError || passwordError}>
//           Login
//         </Button>
//       </StyledForm>
//       <div className='text-center'>
//       <h6>
//         New User? <a href="Register"> SignUp </a> here!
//       </h6>
//       <h6>
//       <a href="ForgotPassword">Forgot Password </a>
//       </h6>
//       <h6>
//       <a href="ResetPassword">reset password</a>

//       </h6>
//       </div>
//       {/* <Snackbar
//         open={disErr}
//         autoHideDuration={3000}
//         onClose={()=>setDisErr(!disErr)}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//         >
//        <MuiAlert elevation={6} variant="filled" onClose={()=>setDisErr(!disErr)} severity="error">{dispError}</MuiAlert>
//      </Snackbar> */}
     
   
//       </div>
//       </div>
//       </div>
//       </div>
//       </div>
//       </div>
//   );
// }

// export default Login;

