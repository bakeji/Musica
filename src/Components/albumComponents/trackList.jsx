import React from "react";

export default function TrackList(props){
    return(
        <div className="track-list">
             <div className="track-list-details">
                <div className="art-like">
                    <img src="./Rectangle 25.png" alt="" />
                    <button><img src="./Heart (2).png" alt="like" /></button>
                </div>

                    <div className="deets">
                        
                        <div className="deets1">
                <div className="title-artist">
                    <p> stand strong - Davido</p>
                </div>

                <div className="album">
                    <p> African Giant</p>
                </div>
                </div>

                <div className="deets2">

                <div className="song-duration">
                    <p>4:17</p>
                </div>

                <div className="more-btn">
                   <button> <img src="./more-vertical.png" alt="more-btn" /></button>
                </div>
                </div>


                </div>
            </div>
            

        </div>
    )
}