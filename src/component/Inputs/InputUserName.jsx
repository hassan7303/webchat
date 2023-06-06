import '../../index.css'
import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import 'bootstrap/dist/css/bootstrap.min.css'
import { InputAdornment} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";

function InputUserName(){
    const [userName, setUserName] = useState()
    console.log(userName)
    return(
        <>

            <TextField onChange={(event)=>setUserName(event.target.value)}
                       id="input-with-icon-textField_UserName"
                       label="UserName"
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start" >
                                   <AccountCircle />
                               </InputAdornment>
                           ),
                       }}
                       variant="standard"
            />

        </>
    )
}
export default InputUserName;