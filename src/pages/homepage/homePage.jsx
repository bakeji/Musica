import React,{useState} from "react";
import Header from "../../Components/homepagecomponents/header";
import SideNav from "../../Components/homepagecomponents/sidenav";
import Curated from "../../Components/homepagecomponents/curated";
import TopCharts from "../../Components/homepagecomponents/TopCharts";
import NewReleases from "../../Components/homepagecomponents/newreleases";
import Popular from "../../Components/homepagecomponents/popular";
import MusicPlayer from "../../Components/homepagecomponents/musicplayer";
import "./homepage.css"

export default function HomePage(props){

const [nav, setNav] =useState(false)


    const handleClick=()=>{
        setNav(prev =>!prev)
    }
        const onMuseDown=(e)=>{
            e.preventDefault()
        }
        const mouseMove=(e)=>{
            if(e.buttons ===1){

            }

        }
        
    return(
        <div className="homepage">
            <Header 
            handleClick={handleClick}/>

            <div className="first-flex">
                <SideNav 
                nav = {nav}
                />
                <Curated
                nav={nav} 
               />
               
                <TopCharts
                topCharts={props.chartsArray}
                nav={nav}
                isFetched ={props.isFetched}
                />
            
            </div>
           


            <div className={`scroll ${nav? "hide": ""}`}>
            
      
            <NewReleases 
             newRelease ={props.isFetched && props.chartsArray[0]}
             isFetched={props.isFetched}

            />
           
        


        
             
            <Popular
            popular={props.isFetched && props.chartsArray[1]}
            isFetched ={props.isFetched}
            />
            </div>



            <MusicPlayer   />
           
            

        </div>
    )
}