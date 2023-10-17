import React from "react"
import { Link } from "react-router-dom"
import LikeBtn from "../button";


export default function TopCharts(props){
//   const seconds=props.topCharts.duration: ""
//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds = seconds % 60;
//   const duration=`${hours} : ${minutes} : ${remainingSeconds}`
// console.log(seconds)  
    

    return(
        <div className="topcharts1">
        <h2 className="h2">Top charts</h2>
      
        <div className={`topcharts ${props.nav? "hide": ""}`}>
            {props.topCharts.map((chart)=>(
            <div key={chart.id}  className="tc">
            <div className="chartsmusic">
                <div className="track">
    
                    <img src={chart.picture_small} alt="art cover" />
                    <div className="title">
                      <Link style={{textDecoration:"none"}} to={`./tracks/${chart.title}`}>
                        <p className="song-title ">{chart.title}</p>
                        </Link>
                        <p className="artist">{chart.creator.name}</p>
                        <p className="duration">{chart.duration}</p>
                    </div>
                </div>   
                                                                         
                

    
                <LikeBtn />
            </div>  
        </div>
        

           )) 
           }
          
         
           
        </div>
        </div>
    )
}