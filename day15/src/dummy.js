let videoId = [];

let songList = [];

let currentSongNumber = 0;

async function fetchYoutubeData() {
	let API_KEY = "AIzaSyDUmUBBEeI994iJ2o_eFF1dEk6GmWVbctY";
	let playlistId = "PLzEfK9A1-zA8YVnCmfCUPGOXBUB97-Z9U";

	let response = await fetch(
		`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=${playlistId}&key=${API_KEY}`
	);

	let data = await response.json();

	for (let i = 0; i < data.items.length; i++) {
		videoId.push(data.items[i].snippet.resourceId.videoId);
		songList.push(data.items[i].snippet.title);
	}

	let pl = document.querySelector("#play");

	pl.addEventListener("click", (e) => {
		e.preventDefault();
		if (player.getPlayerState() !== 1) player.playVideo();
		else {
			player.pauseVideo();
		}
	});

	let prev = document.querySelector("#prev");

	prev.addEventListener("click", async (e) => {
		e.preventDefault();

		if (currentSongNumber !== 0) {
			let lastEle = document.querySelector(`.listElement${currentSongNumber}`);
			lastEle.classList.remove("active", "list-group-item-dark");

			currentSongNumber -= 1;

			await player.loadVideoById(videoId[currentSongNumber]);

			let listEle = document.querySelector(`.listElement${currentSongNumber}`);
			listEle.classList.add("active", "list-group-item-dark");
		}
	});

	let next = document.querySelector("#next");

	next.addEventListener("click", async (e) => {
		e.preventDefault();

		let lastEle = document.querySelector(`.listElement${currentSongNumber}`);
		lastEle.classList.remove("active", "list-group-item-dark");

		currentSongNumber += 1;

		if (currentSongNumber === songList.length) {
			currentSongNumber = 0;
		}

		await player.loadVideoById(videoId[currentSongNumber]);

		let listEle = document.querySelector(`.listElement${currentSongNumber}`);
		listEle.classList.add("active", "list-group-item-dark");
	});

	let mute = document.querySelector("#mute-btn");

	mute.addEventListener("click", async (e) => {
		e.preventDefault();

		if (player.isMuted()) {
			await player.unMute();
		} else {
			await player.mute();
		}
	});

	let volUp = document.querySelector("#volUp");

	volUp.addEventListener("click", async (e) => {
		e.preventDefault();

		if (player.getVolume() < 100) player.setVolume(player.getVolume() + 5);
	});

	let volDown = document.querySelector("#volDown");

	volDown.addEventListener("click", async (e) => {
		e.preventDefault();

		if (player.getVolume() !== 0) player.setVolume(player.getVolume() - 5);
	});

	let loadPlayList = function () {
		let playlist = document.querySelector(".playlist");

		for (let i = 0; i < songList.length; i++) {
			let a = document.createElement("a");
			a.setAttribute("href", "#");
			a.classList.add(
				"list-group-item",
				"list-group-item-action",
				`listElement${i}`
			);
			a.addEventListener("click", (e) => {
				playSelectedSong(songList[i]);
			});
			a.innerHTML = songList[i];
			playlist.appendChild(a);
		}
	};

	function playSelectedSong(song) {
		let num = songList.indexOf(song);
		console.log(num);

		let lastEle = document.querySelector(`.listElement${currentSongNumber}`);
		lastEle.classList.remove("active", "list-group-item-dark");
		currentSongNumber = num;

		player.loadVideoById(videoId[num]);

		let listEle = document.querySelector(`.listElement${currentSongNumber}`);
		listEle.classList.add("active", "list-group-item-dark");
	}

	loadPlayList();

	let listEle = document.querySelector(`.listElement${currentSongNumber}`);

	listEle.classList.add("active", "list-group-item-dark");
}

fetchYoutubeData();

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player("player", {
		height: "490",
		width: "100%",
		videoId: "1G4isv_Fylg",
		playerVars: { autoplay: 0, controls: 0 },
		events: {
			onReady: onPlayerReady,
			onStateChange: onPlayerStateChange,
		},
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 1000);
		done = true;
	}
}
function stopVideo() {
	player.stopVideo();
}
