import  MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from "./plugins/AutoPause";
import Ads from './plugins/Ads';
const video:HTMLVideoElement = document.querySelector("video")
const  player  = new  MediaPlayer({ el:  video, plugins: [new AutoPlay(),new AutoPause(),new Ads()],});

const button:HTMLElement = document.querySelector(".button")
button.onclick = () =>  player.togglePlay();

const btn2: HTMLElement = document.querySelector(".btn2")
btn2.onclick = () => {
  if(player.media.muted === true)
  {
    player.unmute();
  }else{
    player.muted();
  }  
}  



const btn3 = document.querySelector(".btn3")



