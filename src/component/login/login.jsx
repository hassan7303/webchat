import "../../index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { userName, password, messageSend } from "../Store/Store";
import { AccountCircle } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectorUserName = useSelector((state)=>state.userName)
  const selectorPassword = useSelector((state)=>state.password)
  //   password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [password, setPassword] = useState();
  console.log(password);
  // user Name
  const [userName, setUserName] = useState();
  console.log(userName);
  return (
    <div className="login">
      <div className="bg"></div>
      <div className="input_login" dir="ltr">
        {/* user Name */}
        <TextField
          onChange={(event) => setUserName(event.target.value)}
          id="input-with-icon-textField_UserName"
          label="ایمیل خپود را وارد کنید"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        {/* password */}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            رمز خود را وارد کنید
          </InputLabel>
          <Input
            id="standard-adornment-password"
            onChange={(event) => setPassword(event.target.value)}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className="btns">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/signup")}
          >
            ثبت نام
          </button>

          <button
            className="btn btn-primary btn_login"
            onClick={() => navigate("/chatPage")}
          >
            ورود
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
