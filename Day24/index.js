const player = document.getElementById('player');
const youTubeURL = 'https://www.youtube.com/embed/';

function playSong(id, e) {
	player.src = `${youTubeURL}${id}?autoplay=1`;
}
