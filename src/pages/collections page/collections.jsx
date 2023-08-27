import React from "react";
import Header from "../../Components/homepagecomponents/header";
import SideNav from "../../Components/homepagecomponents/sidenav";
import MusicPlayer from "../../Components/homepagecomponents/musicplayer";
import MyCollection from "../../Components/collection components/myCollection";
import "./collection.css"

export default function Collections(){
    return(
        <div>
            <Header />
            <div className="first-flex">
            <SideNav />
            <MyCollection />
            </div>
            
            <MusicPlayer />
        </div>
    )
}