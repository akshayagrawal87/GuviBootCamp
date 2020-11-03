type statusInfo = 'PLAY' | 'PAUSE';

const API_KEY = "AIzaSyDUmUBBEeI994iJ2o_eFF1dEk6GmWVbctY";
const playlistId = "PLzEfK9A1-zA8YVnCmfCUPGOXBUB97-Z9U";

export abstract class simpleTv {

    videoId: string[] = [];
    songList: string[] = [];
    currentSongNumber: number = 0;
    player: any;

    constructor() {

        let tag = <HTMLElement>document.createElement('script');

        tag.setAttribute('src', "https://www.youtube.com/iframe_api");
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);


        const onYouTubeIframeAPIReady = () => {
            this.player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: 'M7lc1UVf-VE',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event: YT.PlayerEvent) {
            event.target.playVideo();
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event: YT.OnStateChangeEvent) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                setTimeout(stopVideo, 6000);
                done = true;
            }
        }
        const stopVideo = () => {
            this.player.stopVideo();
        }


    }

    async fetchVideoData() {

        let response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=${playlistId}&key=${API_KEY}`
        );

        let data = await response.json();

        for (let i = 0; i < data.items.length; i++) {
            this.videoId.push(data.items[i].snippet.resourceId.videoId);
            this.songList.push(data.items[i].snippet.title);
        }
        console.log(data);

    }

    createRemote() {

        let pl = document.querySelector("#play");

        pl?.addEventListener("click", (e) => {
            e.preventDefault();
            if (this.player.getPlayerState() !== 1) this.player.playVideo();
            else {
                this.player.pauseVideo();
            }
        });

        let prev = document.querySelector("#prev");

        prev?.addEventListener("click", async (e) => {
            e.preventDefault();

            if (this.currentSongNumber !== 0) {
                let lastEle = document.querySelector(`.listElement${this.currentSongNumber}`);
                lastEle?.classList.remove("active", "list-group-item-dark");

                this.currentSongNumber -= 1;

                await this.player.loadVideoById(this.videoId[this.currentSongNumber]);

                let listEle = document.querySelector(`.listElement${this.currentSongNumber}`);
                listEle?.classList.add("active", "list-group-item-dark");
            }
        });

        let next = document.querySelector("#next");

        next?.addEventListener("click", async (e) => {
            e.preventDefault();

            let lastEle = document.querySelector(`.listElement${this.currentSongNumber}`);
            lastEle?.classList.remove("active", "list-group-item-dark");

            this.currentSongNumber += 1;

            if (this.currentSongNumber === this.songList.length) {
                this.currentSongNumber = 0;
            }

            await this.player.loadVideoById(this.videoId[this.currentSongNumber]);

            let listEle = document.querySelector(`.listElement${this.currentSongNumber}`);
            listEle?.classList.add("active", "list-group-item-dark");
        });

        let mute = document.querySelector("#mute-btn");

        mute?.addEventListener("click", async (e) => {
            e.preventDefault();

            if (this.player.isMuted()) {
                await this.player.unMute();
            } else {
                await this.player.mute();
            }
        });

        let volUp = document.querySelector("#volUp");

        volUp?.addEventListener("click", async (e) => {
            e.preventDefault();

            if (this.player.getVolume() < 100) this.player.setVolume(this.player.getVolume() + 5);
        });

        let volDown = document.querySelector("#volDown");

        volDown?.addEventListener("click", async (e) => {
            e.preventDefault();

            if (this.player.getVolume() !== 0) this.player.setVolume(this.player.getVolume() - 5);
        });



    }

    createPlaylist() {

        let playlist = document.querySelector(".playlist");
        console.log(playlist);

        for (let i = 0; i < this.songList.length; i++) {
            let a = document.createElement("a");
            a.setAttribute("href", "#");
            a.classList.add(
                "list-group-item",
                "list-group-item-action",
                `listElement${i}`
            );
            a.setAttribute("data-value", this.videoId[i]);
            a.innerHTML = this.songList[i];
            playlist?.appendChild(a);
        }

        let listEle = document.querySelector(`.listElement${this.currentSongNumber}`);

        listEle?.classList.add("active", "list-group-item-dark");



    }

}