import React,{useContext, useState} from "react"
import { musicPlayerContext } from "../context/musicplayer"
export default function MusicPlayer(){

    const {trackSrc,isClicked, isPlaying, setIsPlaying,  trackId} =useContext(musicPlayerContext)

          // play and pause button

          const togglePlay=() =>{
            setIsPlaying(prev => !prev)
        }



    return(
        <div className="musicplayer">
             <audio autoPlay={isPlaying} src={isClicked? trackSrc: ""}></audio>
            <div className="song-info">
                <img src={isClicked? trackId.album.cover_small :  "" }alt="art cover" />
                <div className="info">
                    <p className="song-title">{isClicked? trackId.title: ""}</p>
                    <p className="artist">{isClicked? trackId.artist.name: ""}</p>
                </div>
            </div>

            <div className="nav-duration">
               

                <div className="music-nav">
                    <button className="shuffle"><img src="/shuffle.png" alt="shuffle" /></button>
                    <button className="previous"><img src="/previous.png" alt="previous" /></button>
                    <button onClick={togglePlay}
                     className="play">
                        <img className={isPlaying? "pause" : ""} src={isPlaying? "/pause-solid.svg" : "/play.png"} alt="play" />
                        </button>
                    <button className="next"><img src="/next.png" alt="next" /></button>
                 <button className="repeate"><img src="/repeate-one.png" alt="repeat" /></button>
                </div>

                <div className="duration">
                    <input
                     id="duration"
                     type="range" 
                     min=""
                     max="100"
                     value="0"
                     className="dur-slider"
                     />
                </div>
            </div>

            <div className="volume">
                <img src="/volume-high.png" alt="volume" />
                <input
                className="vol-slider"
                     id="duration"
                     type="range" 
                     min="1"
                     max="100"
                     
                     />
            </div>
        </div>
    )
}