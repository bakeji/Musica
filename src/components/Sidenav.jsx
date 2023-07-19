import React from "react"
export default function SideNav(){
    return(
        <div className="sidenav">
            <div className="first-nav">
                <button><img src="/Home.png" alt="home" /></button>
                <button><img src="/playlist.png" alt="playlist" /></button>
                <button><img src="/radio.png" alt="radio" /></button>
                <button><img src="/videos.png" alt="video" /></button>
            </div>

            <div className="second-nav">
                <button><img src="/profile.png" alt="profile" /></button>
                <button><img src="/Logout.png" alt="logout" /></button>
            </div>
        </div>
    )
}