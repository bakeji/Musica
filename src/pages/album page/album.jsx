import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/homepagecomponents/header";
import SideNav from "../../Components/homepagecomponents/sidenav";
import MusicPlayer from "../../Components/homepagecomponents/musicplayer";
import AlbumDetails from "../../Components/albumComponents/albumDetails";
import TrackList from "../../Components/albumComponents/trackList";
import "./album.css";
import { useParams } from "react-router";
import { musicPlayerContext } from "../../Components/context/musicplayer";

export default function Album(props) {
  const {
    setIsClicked,
    setIsPlaying,
    currentTrackId, 
    setTracks,
    setCurrentTrackId,
    setCurrentTrackSrc,
    setSongIndex,
    nav
  } = useContext(musicPlayerContext);

 
  const { chartTitle } = useParams();
  const selectedChart = props.chartsArray.find(
    (chart) => chart.title === chartTitle
  );

  const tracks = selectedChart.tracks.data;

  const handleTracks = (id) => {
    setCurrentTrackId(tracks[id]);
    setCurrentTrackSrc(tracks[id].preview);
    setIsPlaying(true);
    setIsClicked(true);
    setTracks(tracks);
    setSongIndex(id)
  };

  const playAll=()=>{
    setCurrentTrackId(tracks[0]);
    setCurrentTrackSrc(tracks[0].preview)
    setIsPlaying(true);
    setIsClicked(true);
    setTracks(tracks);
    setSongIndex(0)

  }

  useEffect( () =>{}, [currentTrackId]);

  return (
    <div className="albumpage">
      <Header 
      handleClick = {props.handleClick}/>
      <div className="first-flex">
        <SideNav 
        nav ={nav} />

        <div className="in-flex">
          <AlbumDetails
            selectedChart={props.isFetched && selectedChart}
            isFetched={props.isFetched}
            playAll ={playAll}
            nav={nav}
          />
          {props.isFetched? 
          <TrackList
            selectedChart={props.isFetched && selectedChart}
            isFetched={props.isFetched}
            handleTracks={handleTracks}
            nav ={nav}
          />
          :
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
}
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
}
