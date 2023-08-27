import React, { useEffect, useState } from "react";
import axios from "axios";
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from "./pages/homepage/HomePage";
import Collections from "./pages/collections page/Collections";
import Album from "./pages/album page/Album";

export default function App(){
    const [chartsArray, setChartsArray]= useState([])
    const [isFetched, setIsFetched]= useState(false)

  // fetch API
  function fetchApi(){
    const apiKey= import.meta.env.VITE_API_KEY;
    const urls =[
      'https://deezerdevs-deezer.p.rapidapi.com/playlist/1440614715',
      'https://deezerdevs-deezer.p.rapidapi.com/playlist/10454428582',
      'https://deezerdevs-deezer.p.rapidapi.com/playlist/1362516565'
    ]
    const options = {
      	method: 'GET',
      	headers: {
      		'X-RapidAPI-Key': `${apiKey}`,
      		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      	}

      }

      const fetchData = async () => {
        try {
          const responseData = await Promise.all(
            urls.map(url => axios.get(url, options))
          );

          const extractedData = responseData.map(response => response.data);
        

          setChartsArray(extractedData);
          setIsFetched(true)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData()
    }
    useEffect(()=>{
         fetchApi()
        
        console.log(chartsArray)
        
    }, [])
    console.log(isFetched)

      

  return(
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage
        chartsArray={chartsArray}
        isFetched ={isFetched}
        />} />
        <Route path="/tracks/:chartTitle"  element={<Album
        chartsArray={chartsArray}
        isFetched ={isFetched}
         />} />
        <Route path="/collections" element={<Collections />} />
        
        </Routes>
        </BrowserRouter>
    </div>
  )
}