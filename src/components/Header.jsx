import React from "react";
function Header(){
    return(
    <div>
    <div className="container">
    <img className="me" src={require('../images/me.png')}  alt="profile" />
</div>
<div className="text">
    <p>Jovan Haliem</p>
</div>
</div>)
}
export default Header;