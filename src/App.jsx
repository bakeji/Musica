import React from "react";
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Collections from "./pages/Collections"
import Album from "./pages/Album"

export default function App(){
  return(
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/collectionS" element={<Collections />} />
        <Route path="/" element={<Album />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}