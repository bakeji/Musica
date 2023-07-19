import React from "react";
import Header from "../components/Header";
import SideNav from "../components/Sidenav";
import Curated from "../components/Curated";
import TopCharts from "../components/TopCharts";
import NewReleases from "../components/NewReleases";
import Popular from "../components/popular";
import MusicPlayer from "../components/MusicPlayer";

export default function HomePage(){
    return(
        <div className="homepage">
            <Header />
            <div className="first-flex">
                <SideNav />
                <Curated />
                <TopCharts />
            </div>
            <div className="scroll">
            <NewReleases/>
            <Popular />
            </div>
            <MusicPlayer />
           
            

        </div>
    )
}