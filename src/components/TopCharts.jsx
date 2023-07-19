import React from "react"

export default function TopCharts(props){
    return(
        <div className={`topcharts ${props.nav? "hide": ""}`}>
            <h2>Top charts</h2>
            <div className="tc">
            <div className="chartsmusic">
                <div className="track">
                    <img src="/art.png" alt="art cover" />
                    <div className="title">
                        <p className="song-title ">Golden age of 80s</p>
                        <p className="artist">Sean swadder</p>
                        <p className="duration">2:34:45</p>
                    </div>
                </div>
                <button><img src="/orangeheart.png" alt="" /></button>
            </div>

            <div className="chartsmusic">
                <div className="track">
                    <img src="/art.png" alt="art cover" />
                    <div className="title">
                        <p className="song-title ">Golden age of 80s</p>
                        <p className="artist">Sean swadder</p>
                        <p className="duration">2:34:45</p>
                    </div>
                </div>
                <button><img src="/orangeheart.png" alt="" /></button>
            </div>

            <div className="chartsmusic">
                <div className="track">
                    <img src="/art.png" alt="art cover" />
                    <div className="title">
                        <p className="song-title ">Golden age of 80s</p>
                        <p className="artist">Sean swadder</p>
                        <p className="duration">2:34:45</p>
                    </div>
                </div>
                <button><img src="/orangeheart.png" alt="" /></button>
            </div>
            </div>

            

        </div>
    )
}