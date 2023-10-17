import React,{useContext} from "react";
import Header from "../../Components/homepagecomponents/header";
import SideNav from "../../Components/homepagecomponents/sidenav";
import Curated from "../../Components/homepagecomponents/curated";
import TopCharts from "../../Components/homepagecomponents/topCharts";
import NewReleases from "../../Components/homepagecomponents/newreleases";
import Popular from "../../Components/homepagecomponents/popular";
import { musicPlayerContext } from "../../Components/context/musicplayer";
import MusicPlayer from "../../Components/homepagecomponents/musicplayer";
import "./homepage.css"

export default function HomePage(props){
    const {nav} = useContext(musicPlayerContext)

    return(
        <div className="homepage">
            <Header 
            handleClick={props.handleClick}/>

            <div className="first-flex">
                <SideNav 
                nav = {nav}
                />
                <Curated
                nav={nav} 
               />
               
               <>
               {props.isFetched?
                <TopCharts
                topCharts={props.chartsArray}
                nav={nav}
                isFetched ={props.isFetched}
                />

                :
                (
                <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
                )
               }
               
                </>
            
            </div>
           


            <div className={`scroll ${nav? "hide": ""}`}>
                {props.isFetched?
            
            <>
      
            <NewReleases 
             newRelease ={props.isFetched && props.chartsArray[0]}
             isFetched={props.isFetched}

            />
  
            <Popular
            popular={props.isFetched && props.chartsArray[1]}
            isFetched ={props.isFetched}
            />
            </>

            :
            <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
                }
            </div>



            <MusicPlayer   />
        </div>
    )
}