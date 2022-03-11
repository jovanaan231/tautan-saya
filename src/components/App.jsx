import React from "react";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Header from "./Header.jsx"
import ParticlesBg from "particles-bg";

function App(){
    return (
    <div>
    <Header />
    <ParticlesBg type="cobweb" bg={true} />
    <div className="box">
        <div className="tautan">
            <Card name="Github" icon="github" url="https://github.com/jovanaan231"/>
            <Card name="Youtube" icon="youtube" url="https://www.youtube.com/channel/UCMe-vj7wCapOLWMp2DBkp9Q"/>
            <Card name="Instagram" icon="instagram" url="https://www.instagram.com/vanjov_/"/>
	    <Card name="Steam" icon="crosshair" url="https://steamcommunity.com/id/jovanaan12/"/>
            <Card name="Spotify" icon="music" url="https://open.spotify.com/user/m23do8o9z9mow147tsrbm519h?si=6ff60f4f6d274855"/>
        </div>
    </div>
    <Footer />
	</div>
   
    ) 
}

export default App;
