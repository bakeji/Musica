import React from "react"

export default function Header (props){
    return(
        <header>
                <button onClick={props.handleClick} className="ham">
                    <img src="/hamburger.png" alt=""  /></button>
            
            <img src="/logo.png" alt="Logo" />
           
            <div className="search-box">
                
                <button><img src="/search.png" alt="Search" /></button>
                <input
                placeholder="search artists..."
                type="text" />
            </div>
        </header>
    )
}