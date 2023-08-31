import React from "react";
import LikeBtn from "../button";

export default function TrackList(props){

    const tracks =props.selectedChart.tracks.data
        // console.log(tracks)            
    return(
        <div  className="track-list">
            {props.isFetched? tracks.map((tracks, index)=>(

             <div key={index} 
             onClick={() =>props.handleTracks(index)} 
              className="track-list-details">
                <div className="art-like">
                    <img className="track-img" src={tracks.album.cover_small} alt="" />
                    <LikeBtn />
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
                   <button> <img src="/more-vertical.png" alt="more-btn" /></button>
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