"use client"

import SignIn from "./sign-in"
import SignUp from "./sign-up"
import { useState } from "react";

export default function Home(){
    const [show, setShow] = useState(true);
    return(
        <div className="" id="">
            {show == true ? <div className="sign_div">
            <div className="containerSign">
                <p className="Sign">
                    Sign In
                </p>
                <div className="userNameDiv formDiv">
                    <span className="labelTag">Username: </span>
                    <input type="text" name="" id="userName" className="userNameInput" placeholder="Enter your username..."/>
                </div>
                <div className="passwordDiv formDiv">
                    <span className="labelTag">Password: </span>
                    <input type="password" name="" id="" className="passwordInput" placeholder="Enter your password..."/>
                </div>
                <button className="signButton" id="sign_in">
                    Sign In
                </button>
                <p className="signUpPrompt" id="">
                    Do not have an account? <span className="signUpLink" id="signUpLink" onClick={()=>setShow(false)}>Click here to sign up.</span>
                </p>
            </div>
        </div> : <SignUp />}
        </div>
    );
}