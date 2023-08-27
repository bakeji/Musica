import React from "react";
export default function AlbumDetails(props){
    
    return(
        
        <div className="album-details">
            <div className="cover-art">
                <img src={props.selectedChart.picture_medium} alt="" />
            </div>
            <div className="more-info">
                <div className="info-text">
                    <h2>{props.selectedChart.title}</h2>
                    <p> {props.selectedChart.description} </p>
                    <p>{props.selectedChart.nb_tracks} ~ {props.selectedChart.duration} seconds </p>
                </div>

                <div className="play-add-btns">
                    <button><img src="public\Play (2).png" alt="play-icon" /> <span>play all</span> </button>
                    <button> <img src="./music-square-add.png" alt="add-icon" /> <span>Add to collection</span></button>
                    <button><img src="./Heart (3).png" alt="like icon" /></button>
                </div>
            </div>

        </div>
    )
}