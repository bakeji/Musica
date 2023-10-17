import React from "react"
import { Link } from "react-router-dom"
export default function SideNav(props){
    return(
        <div className={`sidenav ${props.nav? "side-open" : ""}`}>
            <div className="first-nav">
            <Link to={"/"} >
                <button className="sn-btn">
                <img src="/Home.png" alt="home" />
                       <a href="#">home</a>
                </button>
                </Link>
                <button className="sn-btn">
                    <img src="/playlist.png" alt="playlist" />
                    <a href="#">My collections</a>
                </button>
                <button className="sn-btn">
                    <img src="/radio.png" alt="radio" />
                    <a href="#">Radio</a>
                </button >
                <button className="sn-btn">
                    <img src="/videos.png" alt="video" />
                    <a href="#">Videos</a>
                </button>
            </div>

            <div className="second-nav">
                <button className="sn-btn">
                    <img src="/profile.png" alt="profile" />
                    <a href="#">Profile</a>
                </button>
                <button className="sn-btn">
                    <img src="/Logout.png" alt="logout" />
                    <a href="#">Log out</a>
                </button>
            </div>
        </div>
    )
}