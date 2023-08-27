import React from "react"

export default function NewReleases(props){

    const album =props.isFetched? props.newRelease.tracks.data : ""
  
   

    return(
        
        <div className="new-releases">
            <h2>New Releases</h2>

            <div className="albumcards-carousel"> 
            {props.isFetched? album.map((tracks)=>(
                <div key={tracks.id} className="albumcard">
                    <img src={tracks.album.cover_small} alt="albumcard" />
                    <p className="song-title"> {tracks.album.title}</p>
                    <p className="artist-name">{tracks.artist.name}</p>
                </div>
            )) : 

            ""
}


                

                
                
            </div>

        </div>
    )
}