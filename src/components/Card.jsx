import React from "react";
function Card(props){
    return (
    
    <div >
        <a className="button" target="_blank" href={props.url}>
            <div className="link1  tautan_profile">
                <i className={`icons uil uil-${props.icon}`}></i>
                <p className="info">{props.name}</p>
            </div>
        </a>
    </div>
   )
}
export default Card;