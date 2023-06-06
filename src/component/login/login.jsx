import '../../index.css';
import InputUserName from "../Inputs/InputUserName";
import React from "react";
import {useNavigate} from "react-router-dom";
import InputPassword from "../Inputs/InputPassword";

function Login(){
    const navigate =useNavigate()

    return(
        <div className="login">
            <div className="bg"></div>
            <div className="input_login">
                <InputUserName/>
                <InputPassword/>
                <div className="btns" >
                    <button className="btn btn-primary" onClick={()=>navigate('/signup')}>ثبت نام</button>
                    <button className="btn btn-primary btn_login" onClick={()=>navigate('/chatPage')}>ورود</button>
                </div>
           </div >
        </div>
    )
}
export default Login;