import MediaPlayer from'../MediaPlayer'
class AutoPlay {
    constructor() { }
    //plugin recibe function player player = objeto nuevo de la clase
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    }
}
export default AutoPlay;