import MediaPlayer from "../MediaPlayer";

class AutoPause{
    private threshold: number;
    player: MediaPlayer;
    constructor()
    {
        this.threshold = 0.25;
        this.handlerInter = this.handlerInter.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }
    run(player){
        this.player = player;

        const observer = new IntersectionObserver(this.handlerInter, {
            threshold: this.threshold,//este numero que es del tamaño de la pantalla  va entre 0 y 1 siendo el 0.25 el 25%
        });
        observer.observe(this.player.media);
        document.addEventListener("visibilitychange",this.handleVisibilityChange)
    }
    private handlerInter(entries: IntersectionObserverEntry[]){
        const entry = entries[0];
      
        
      const isVisible =  entry.intersectionRatio >= this.threshold;

      if(isVisible){
            this.player.play()
    
      }else
      {
         this.player.pause();
      }           
    }
    private handleVisibilityChange()
    {
        const isVisibility = document.visibilityState ==   "visible";
        if(isVisibility){
       
            this.player.play();
        }else{
            this.player.pause();
        }
    
    }
}
export default AutoPause;