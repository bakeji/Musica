import React from "react"
export default function Curated(){
    return(
        <div className="curated">
            <div className="playlist-info">
                <p className="title">Curated playlist</p>
                <div className="playlist-name">
                    <h2>R & B Hits</h2>
                    <p>All mine, Lie again, Petty call me everyday,Out of time, No love, Bad habit, and so much more</p>
                </div>
                <div className="playlist-likes">
                    <img src="/users.png" alt="users" />
                    <button><img src="/Heart.png" alt="like button" /></button>
                    <p>32k likes</p>
                </div>
            </div>
            <div className="artist-img">
                <img src="./artist img.png" alt="artist image" />
            </div>
        </div>
    )
}