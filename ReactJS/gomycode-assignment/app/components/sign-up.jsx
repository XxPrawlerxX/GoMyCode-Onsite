import "../component-styles/sign.css"


export default function SignUp(){
    return(
        <div className="sign_div">
            <div className="containerSign">
                <p className="Sign">
                    Sign Up
                </p>
                <div className="userNameDiv formDiv">
                    <span className="labelTag">Username: </span>
                    <input type="text" name="" id="userName" className="userNameInput inputContainer" placeholder="Enter your username..."/>
                </div>
                <div className="UserEmailDiv formDiv" id="">
                    <span className="labelTag" id="">
                        Email:
                    </span>
                    <input type="email" name="" id="userEmail" className="userEmailInput inputContainer" placeholder="Enter your E-mail..." />
                </div>
                <div className="passwordDiv formDiv">
                    <span className="labelTag">Password: </span>
                    <input type="password" name="" id="" className="passwordInput inputContainer" placeholder="Enter your password..."/>
                </div>
                <div className="confirmDiv formDiv">
                    <span className="labelTag">Confirm password: </span>
                    <input type="password" name="" id="" className="passwordInput inputContainer" placeholder="Re-enter your password..."/>
                </div>
                <div className="agreeDiv">
                    <input type="checkbox" name="" id="" className="agreeBox" />
                    <span className="agreement">
                        I agree to the <span className="highlightedText">Terms and Conditions</span> and the <span className="highlightedText">Privacy Policy</span>
                    </span>
                </div>
                <button className="signButton" id="sign_up">
                    Sign Up
                </button>
            </div>
        </div>
    );
}