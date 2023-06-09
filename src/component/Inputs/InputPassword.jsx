import '../../index.css'
import {FormControl, IconButton, Input, InputAdornment, InputLabel} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import React, {useState} from "react";


function InputPassword(){
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [password, setPassword] = useState()
    console.log(password)
    return(
        <>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" >
                <InputLabel htmlFor="standard-adornment-password" >رمز خود را وارد کنید</InputLabel>
                <Input
                    id="standard-adornment-password" onChange={(event)=>setPassword(event.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end" >
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
        </>
    )
}
export default InputPassword;