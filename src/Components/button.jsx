import React, {useEffect, useState} from "react";
export default function LikeBtn (){
    const [isClicked, setIsClicked]= useState(false)
    
    function toggleLikedBtn(){
        setIsClicked(!isClicked)
       
        }

        useEffect(()=>{
            console.log(isClicked)
        }, [isClicked])
    return(
        <button onClick={()=>toggleLikedBtn()} >
            <img  src={ isClicked ? "/Heart (3).png" :"/orangeheart.png"}alt="like icon" />
        </button>
        
    )
}