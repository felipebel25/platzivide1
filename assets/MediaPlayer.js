
function MediaPlayer(config)
{
  this.media = config.el
  this.plugins = config.plugins || [];
  this.initPlugins()
 }

 MediaPlayer.prototype.initPlugins = function()
{
  const player = {
    play:() => this.play(),
    pause:() => this.pause(),
    media: this.media,
    get muted(){
      return this.media.muted;
    },
    set muted(value){
      this.media.muted = value;
      },
    
  };

  
  this.plugins.forEach(plugin=>{
   plugin.run(player);
  });
};
MediaPlayer.prototype.play = function ()
{
  this.media.play();
}
MediaPlayer.prototype.pause = function ()
{
  this.media.pause();
}
MediaPlayer.prototype.muted = function ()
{
  this.media.muted = true;
}
MediaPlayer.prototype.unmute = function ()
{
  this.media.muted = false;
}

MediaPlayer.prototype.togglePlay = function ()
{
  (this.media.paused)?(this.media.play()):(this.media.pause())
}




export default MediaPlayer;