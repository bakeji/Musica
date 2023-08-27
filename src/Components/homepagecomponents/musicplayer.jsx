import React from "react"
export default function MusicPlayer(){
    return(
        <div className="musicplayer">
            <div className="song-info">
                <img src="/coverart.png" alt="art cover" />
                <div className="info">
                    <p className="song-title">Seasons in</p>
                    <p className="artist">James</p>
                </div>
            </div>

            <div className="nav-duration">

                <div className="music-nav">
                    <button className="shuffle"><img src="/shuffle.png" alt="shuffle" /></button>
                    <button className="previous"><img src="/previous.png" alt="previous" /></button>
                    <button className="play"><img src="/play.png" alt="play" /></button>
                    <button className="next"><img src="/next.png" alt="next" /></button>
                 <button className="repeate"><img src="/repeate-one.png" alt="repeat" /></button>
                </div>

                <div className="duration">
                    <input
                     id="duration"
                     type="range" 
                     min=""
                     max=""
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