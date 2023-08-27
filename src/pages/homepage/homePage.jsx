import React,{useEffect, useState} from "react";
import axios from "axios";
import Header from "../../Components/homepagecomponents/header";
import SideNav from "../../Components/homepagecomponents/sidenav";
import Curated from "../../Components/homepagecomponents/curated";
import TopCharts from "../../Components/homepagecomponents/topCharts";
import NewReleases from "../../Components/homepagecomponents/newreleases";
import Popular from "../../Components/homepagecomponents/popular";
import MusicPlayer from "../../Components/homepagecomponents/musicplayer";
import "./homepage.css"

export default function HomePage(props){

const [nav, setNav] =useState(false)
// const [playList, setPlayList]=useState([])

//   function fetchPlaylist(){
//     const apiKey= import.meta.env.VITE_API_KEY;
//     const endpoints =[
//       'https://deezerdevs-deezer.p.rapidapi.com/playlist/1059795261',
//       'https://deezerdevs-deezer.p.rapidapi.com/playlist/7708085642'
//     ]
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': `${apiKey}`,
//         'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//       }

//     }
//     const data = async () => {
//       try {
//         const responseData = await Promise.all(
//           endpoints.map(endpoint=> axios.get(endpoint, options))
//         );

//         const extractedData = responseData.map(response => response.data);



//         setPlayList(extractedData)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     data()
//   }

  // useEffect(()=>{
  //   fetchPlaylist()
  //   if(playList!==[]){
  //   console.log(playList)
  //   }
  // }, [])


    const handleClick=()=>{
        setNav(prev =>!prev)
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