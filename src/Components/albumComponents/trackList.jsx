import React from "react";

export default function TrackList(props){

    const tracks =props.selectedChart.tracks.data
            
    return(
        <div className="track-list">
            {props.isFetched? tracks.map((tracks)=>(

             <div className="track-list-details">
                <div className="art-like">
                    <img src={tracks.album.cover_small} alt="" />
                    <button><img src="./Heart (2).png" alt="like" /></button>
                </div>

                    <div className="deets">
                        
                        <div className="deets1">
                <div className="title-artist">
                    <p> {tracks.title} - {tracks.artist.name}</p>
                </div>

                <div className="album">
                    <p>{tracks.album.title}</p>
                </div>
                </div>

                <div className="deets2">

                <div className="song-duration">
                    <p>{tracks.duration}</p>
                </div>

                <div className="more-btn">
                   <button> <img src="./more-vertical.png" alt="more-btn" /></button>
                </div>
                </div>


                </div>
            </div>
            
            ))
        :
        ""
        }
        </div>
    )
}