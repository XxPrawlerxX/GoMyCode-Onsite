import "../component-styles/sign.css"
import SignUp from "./sign-up"
import Home from "./home"


export default function SignIn(){
    return(
        <div className="sign_div">
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
                    Do not have an account? <span className="signUpLink" id="signUpLink" >Click here to sign up.</span>
                </p>
            </div>
        </div>
    );
}