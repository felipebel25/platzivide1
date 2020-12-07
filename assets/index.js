import  MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video")
const button = document.querySelector(".button")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")



const  player = new  MediaPlayer({ el:  video, plugins: [new AutoPlay()
] });
button.onclick = () =>  player.togglePlay();
btn2.onclick = () => 
{
  if(player.media.muted === true)
  {
    player.unmute();
  }else{
    player.muted();
  }
}


