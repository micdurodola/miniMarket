import React from "react";
import {Link} from "react-router-dom";

const Register = () =>{

    return(
        <div>
            <div className="wrapper fadeInDown">
            <div id="formContent">
            
                <div className="fadeIn first">
                
                </div>

            
                <form>
                <input type="text" id="login" className="fadeIn second" name="first_name" placeholder="First Name" />                
                <input type="text" id="login" className="fadeIn second" name="last_name" placeholder="Last Name" />  
                <input type="text" id="login" className="fadeIn second" name="email" placeholder="email" />
                <input type="text" id="password" className="fadeIn third" name="pasword" placeholder="password" />
                <input type="text" id="password" className="fadeIn third" name="pasword2" placeholder="Confirm password" />
                <input type="submit" className="fadeIn fourth" value="Register" />
                </form>

            
                <div id="formFooter">
                    <p className="underlineHover">Already have an account?<Link to="/login"> Login</Link></p>
                
                </div>

            </div>
            </div>
        </div>

    );
}

export default Register;
