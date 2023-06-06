import React, {useState} from "react";
import InputUserName from "../Inputs/InputUserName";
import '../../index.css'
import InputPassword from "../Inputs/InputPassword";
import {useNavigate} from "react-router-dom";
function SignUp (){
    const Navigate = useNavigate()

    return(
        <div className="login">
            <div className="bg"></div>
            <div className="input_login">
                <InputUserName/>
                <InputPassword/>
                <InputPassword/>
                <button className="btn btn-primary w-100 btn_signUp" onClick={()=>Navigate('/chatPage')}>ثبت نام </button>
            </div >
        </div>
    )
}
export default SignUp;