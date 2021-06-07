import React, {useState, useRef} from 'react';
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({url ,channel, description, song, likes, messages, shares}) {
     const [playing, setPlaying] = useState(false);
     const ref = useRef(false);

     const handleVideo = () => {
         //if video playing 
         if(playing){
             ref.current.pause();
             setPlaying(false);
         } else {
            ref.current.play();
            setPlaying(true);
         }
         //stop it

         //if not playing 
         //start it 
    }
    
    return (
        <div className="video">
            <video ref={ref} 
            onClick = {handleVideo}
            loop className="video_player" src={url} /> 
            <VideoFooter channel={channel} description={description} song ={song} />
            <VideoSidebar likes={likes} messages ={messages} shares={shares} />
        
        </div>
  )
}

export default Video
