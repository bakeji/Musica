import React,{useState} from "react";
import Header from "../components/Header";
import SideNav from "../components/Sidenav";
import Curated from "../components/Curated";
import TopCharts from "../components/TopCharts";
import NewReleases from "../components/NewReleases";
import Popular from "../components/popular";
import MusicPlayer from "../components/MusicPlayer";

export default function HomePage(){

    const [nav, setNav] =useState(false)

    const handleClick=()=>{
        setNav(prev =>!prev)
    }
    const hide = nav? "hide": ""

    return(
        <div className="homepage">
            <Header 
            handleClick={handleClick}/>

            <div className="first-flex">
                <SideNav 
                nav = {nav}
                />
                <Curated
                nav={nav} 
               />
                <TopCharts
                nav={nav}
                />
            </div>


            <div className={`scroll ${nav? "hide": ""}`}>
            <NewReleases/>
            <Popular />
            </div>



            <MusicPlayer   />
           
            

        </div>
    )
}