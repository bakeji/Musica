import React from "react";
import Header from "../../Components/homepagecomponents/header";
import SideNav from "../../Components/homepagecomponents/sidenav";
import MusicPlayer from "../../Components/homepagecomponents/musicplayer";
import AlbumDetails from "../../Components/albumComponents/albumDetails";
import TrackList from "../../Components/albumComponents/trackList";
import "./album.css"
import { useParams } from "react-router";


export default function Album(props){

    const {chartTitle}= useParams()
    const selectedChart =props.chartsArray.find((chart)=>(chart.title)===chartTitle)
    
      return(
        <div className="albumpage">
            <Header />
            <div className="first-flex">
            <SideNav />

            <div className="in-flex">
            <AlbumDetails 
                selectedChart={props.isFetched && selectedChart}
            />
            <TrackList />
            </div>
            
            </div>
            <MusicPlayer />
        </div>
    )
}