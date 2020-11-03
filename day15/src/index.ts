import { simpleTv } from './simpleTv';

class MusicPlayer extends simpleTv {

    constructor() {
        super();
    }

}


(async () => {
    let play = new MusicPlayer();
    await play.fetchVideoData();
    await play.createRemote();
    await play.createPlaylist();
})()