import React from "react"
export default function popular(props){


    const album =props.isFetched? props.popular.tracks.data : ""
        // console.log(album)
    return(
        <div className="popular">
            <h2>Popular</h2>
            <div className="albumcards-carousel">
                {props.isFetched? album.map((tracks)=>(
                <div key={tracks.id} className="albumcard">
                    <img src={tracks.album.cover_medium} alt="albumcard" />
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