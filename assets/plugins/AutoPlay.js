function AutoPlay(){}
//plugin recibe function player player = objeto nuevo de la clase
AutoPlay.prototype.run= function(player)
{
    if(!player.muted){
        player.muted= true;
    }
    player.play();
}
export default AutoPlay;