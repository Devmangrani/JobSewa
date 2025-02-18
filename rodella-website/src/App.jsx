import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import HomeBgVideo from "../src/assets/videos/video1.mp4";

const App = () => {

    return (
        <div className="h-screen w-screen overflow-hidden">
            <video className="absolute top-0 left-0 w-full h-full object-cover brightness-45 -z-50"
            src={HomeBgVideo}
            autoPlay
            muted
            ></video>
        <Navbar />
        <Homepage />
      </div>
    )
}

export default App;