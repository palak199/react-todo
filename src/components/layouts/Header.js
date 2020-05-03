import React from "react";
import{ Link} from 'react-router-dom'
function Header(){
    return(
        
        <header style={headerStyle}>
            <h1>to do list</h1>
            <Link to="/" style={styleLink}>home</Link>  <Link to="/about" style={styleLink}>About</Link>
            </header>
    )
}
const styleLink={
    color:"#fff"
}
const headerStyle={
    textAlign:'center',
    background:"#333",
    color:"#fff",
    padding:"10px"
}
export default Header