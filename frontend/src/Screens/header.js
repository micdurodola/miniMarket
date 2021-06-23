import React from "react";
import {Link} from "react-router-dom";



const header = () => {
    return(
        <div>
            <header>
                <nav className="navbar myNav">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand my_brand">MARKET</Link>
                    
                    </div>
                    <div className="collapse navbar-collapse myMenu" id="myNavbar">
                    <ul className="nav navbar-nav">                       
                      
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>                      
                    
                    </ul>
                    </div>
                </div>
                </nav>
            </header>
    
  </div>

    );
}

export default header;