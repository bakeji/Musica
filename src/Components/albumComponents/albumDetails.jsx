import React from "react";
import LikeBtn from "../button";
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
                    <button  onClick={props.playAll} ><img src="/Play (2).png" alt="play-icon" /> play all </button>
                    <button> <img src="/music-square-add.png" alt="add-icon" /> Add to collection</button>
                   <LikeBtn />
                </div>
            </div>

        </div>
    )
}