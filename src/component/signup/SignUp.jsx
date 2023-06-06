import React, {useState} from "react";
import InputUserName from "../Inpots/InputUserName";
import '../../index.css'
import InputPassword from "../Inpots/InputPassword";
function SignUp (){


    return(
        <div className="login">
            <div className="bg"></div>
            <div className="input_login">
                <InputUserName/>
                <InputPassword/>
                <InputPassword/>
                <button className="btn btn-primary w-100 btn_signUp">ثبت نام </button>
            </div >
        </div>
    )
}
export default SignUp;