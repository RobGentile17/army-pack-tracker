import React from "react";

function Home() {
    return (
        <div className="home-text" id="home">
             <h1>
                Time To Pack!
            </h1>
            <div className="app">
                <video className="video"
                    autoPlay 
                    loop
                    muted
                >
                    <source src="https://ak.picdn.net/shutterstock/videos/28917097/preview/stock-footage-soldiers-feet-walking.webm" type="video/mp4" />
                </video>
            </div>
            
           
        </div>
    )
}

export default Home;
