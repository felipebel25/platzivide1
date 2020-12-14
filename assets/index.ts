import  MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video")
const  player  = new  MediaPlayer({ el:  video, plugins: [new AutoPlay(),new AutoPause()],});

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




if('serviceWorker' in navigator)
{
  navigator.serviceWorker.register('/sw.js').catch(error=>{console.log(error.message)})
}