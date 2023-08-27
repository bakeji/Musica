import React from "react"
export default function popular(props){
    console.log(props.isFetched)

    const album =props.isFetched? props.popular.tracks.data : ""

    return(
        <div className="popular">
            <h2>Popular</h2>
            <div className="albumcards-carousel">
                {props.isFetched? album.map((tracks)=>(
                <div key={tracks.id} className="albumcard">
                    <img src={tracks.album.cover_small} alt="albumcard" />
                    <p className="song-title">{tracks.album.title}</p>
                    <p className="artist-name">{tracks.artist.name}</p>
                </div>
                )):

                ""
                }

                


            </div>
        </div>
    )
}