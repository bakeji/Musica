import React,{useContext, useEffect, useRef, useState} from "react"
import { musicPlayerContext } from "../context/musicplayer"
export default function MusicPlayer(){
    const [seekBarValue, setSeekBarValue]= useState(0)
    const [seekBarMax, setSeekBarMax] = useState(0)
    const [isShuffle, setIsShuffle]= useState(false)
    const audio =useRef("")
    const {setCurrentTrackSrc, currentTrackSrc, songIndex, setSongIndex, currentTrackId,  setCurrentTrackId, tracks, isClicked, isPlaying, setIsPlaying} =useContext(musicPlayerContext)
          // Autoplay the next song
            useEffect(()=>{
              const handleEnded =()=>{
                setSongIndex(prev => prev +1)
                setCurrentTrackId(tracks[songIndex +1])
                setCurrentTrackSrc(tracks[songIndex+1].preview)
              }
              
              audio.current.addEventListener('ended', handleEnded)

              return () => {
                audio.current.removeEventListener('ended', handleEnded);
              };
            }, [])

          // play and pause button
          const togglePlay=() =>{
            if(isPlaying){
            setIsPlaying(false)
            audio.current.pause()
            }
            else{
                setIsPlaying(true)
                audio.current.play()
            }
         }
        

        // next button

        const nextBtn=()=>{
            if(songIndex === tracks.length-1){
                setCurrentTrackId(tracks[0])
                setCurrentTrackSrc(tracks[0].preview)
                setSongIndex(0)
            }
            else{
              setSongIndex(prev => prev +1)
               setCurrentTrackId(tracks[songIndex +1])
               setCurrentTrackSrc(tracks[songIndex + 1].preview)
            }
        }

        // previous button

        const prevBtn =()=>{
          if(songIndex===0){
            const lastTrackId = tracks.length-1
            setCurrentTrackId(tracks[lastTrackId])
            setCurrentTrackSrc(tracks[lastTrackId].preview)
            setSongIndex(tracks.length-1)
          }
          else{
            setSongIndex(prev =>prev-1)
            setCurrentTrackId(tracks[songIndex-1])
            setCurrentTrackSrc(tracks[songIndex-1].preview)
          }
        }

        // Shuffle tracks
         const shuffle=()=>{
          setIsShuffle(!isShuffle)
          if(shuffle){
          const randomTrack= Math.floor(Math.random() * tracks.length)
          setSongIndex(randomTrack)
          setCurrentTrackId(tracks[randomTrack])
          setCurrentTrackSrc(tracks[randomTrack].preview)
          console.log(randomTrack)
        }
         }
    // shuffle button
         

        

    // progress bar
    useEffect(() => {
        if (audio.current) {
          // Update the seek bar when the audio's time updates
          audio.current.addEventListener("timeupdate", () => {
            setSeekBarValue(audio.current.currentTime);
          });

          // Set initial values when metadata is loaded
          audio.current.addEventListener("loadedmetadata", () => {
            setSeekBarValue(0); // Set initial value to 0
            setSeekBarMax(audio.current.duration); // Set max value to audio duration
          });
        }
      }, []);

      const handleChange = (e) => {
        if (audio.current) {
          audio.current.currentTime = e.target.value;
        }
      };

    return(
        <div className="musicplayer">
             <audio ref={audio} autoPlay={isPlaying} can src={isClicked? currentTrackSrc: ""}/>
            <div className="song-info">
                <img src={isClicked? currentTrackId.album.cover_small :  "" }alt="art cover" />
                <div className="info">
                    <p className="song-title">{isClicked? currentTrackId.title: ""}</p>
                    <p className="artist">{isClicked? currentTrackId.artist.name: ""}</p>
                </div>
            </div>

            <div className="nav-duration">
               

                <div className="music-nav">
                    <button onClick={shuffle} className={`shuffle ${isShuffle? "onshuffle": ""}`}><img src="/shuffle.png" alt="shuffle" /></button>
                    <button onClick={prevBtn} className="previous"><img src="/previous.png" alt="previous" /></button>
                    <button onClick={togglePlay}
                     className="play">
                        <img className={isPlaying? "pause" : ""} src={isPlaying? "/pause-solid.svg" : "/play.png"} alt="play" />
                        </button>
                    <button onClick={nextBtn} className="next"><img src="/next.png" alt="next" /></button>
                 <button className="repeate"><img src="/repeate-one.png" alt="repeat" /></button>
                </div>

                <div className="duration">
                    <input
                     id="duration"
                     type="range"
                     min="0"
                     max={seekBarMax}
                     value={seekBarValue}
                     onChange={handleChange}
                     step={0.01}                
                     className="dur-slider"
                     />
                </div>
            </div>
            <div className="volume">
                <img src="/volume-high.png" alt="volume" />
                <input
                    className="vol-slider"
                     id="duration"
                     type="range" 
                     min="0"
                     max="1"
                     step="0.01"
                     value={audio.current? audio.current.volume : 1}
                     onChange={(e) => {
                        if (audio.current) {
                          audio.current.volume = e.target.value;
                        }
                    }}
                />                  
            </div>
        </div>
    )
}