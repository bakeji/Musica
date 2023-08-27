import React from "react";

export default function MyCollection(){
    return(
        <div className="my-collection">
            <div className="buttons">
                <button>My collections</button>
                <button> Likes</button>
            </div>


            <div className="collections">
                <div className="songs-cover">
                    <div className="artist-title">
                        <p className="p1">Limits</p>
                        <p className="artist">John legend</p>

                        <span>
                            <p>2.3m likes</p>
                        </span>
                    </div>

                    <div className="play-btn">
                        <button><img src="./play.png" alt="play button" /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}