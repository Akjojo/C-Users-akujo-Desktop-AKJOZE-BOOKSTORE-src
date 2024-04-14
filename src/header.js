import React from "react";
import "./App.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
 

function Header({showing}) {
  //host this in butter
//   burron state
    const [show, setShow] = React.useState(false);
  return (
    <div>
      <div className="d">
        <h1 className="header" style={{fontFamily: "castellar", fontSize: 50, color: "white", border: "black"}}>WELCOME TO AKJOZE BOOKSTORE</h1>
        {/* view cart button */}
        <nav>
      

        <Link to='SignIn'>
        <Button variant="contained" style={{marginLeft: 150, fontSize: 20, width: 150, marginRight: 100}}>Log In</Button>
        </Link>

        </nav>
        <button href="/cart" className="cart-btn" onClick={()=>{setShow(!show)
        showing(!show)
        }}>
          
          {show? "SignOut": "View Cart"}
        </button>
        
        
      </div>
      <div id="uppweH"></div>
      
      
    </div>
  );
}

export default Header;