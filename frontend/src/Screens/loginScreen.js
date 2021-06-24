import React from "react";
import '../App.css';
import {Link} from "react-router-dom";

const Login = () =>{

    return(
        <div>
            <div className="wrapper fadeInDown">
            <div id="formContent">            
                <div className="fadeIn first">
                
                </div>
            
                <form className="login-form">
                <input type="text" id="login" className="fadeIn second" name="email" placeholder="email" />
                <input type="text" id="password" className="fadeIn third" name="pasword" placeholder="password" />
                <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>

            
                <div id="formFooter">
                <p>Don't have an account? <Link to ="/register">Sign Up</Link></p>

                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
            </div>
        </div>

    );
}

export default Login;
