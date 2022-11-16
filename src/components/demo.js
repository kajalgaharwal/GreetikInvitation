<audio src='./song.mp3' id='my_audio' loop='loop' autoplay muted></audio>;
const audio = document.getElementById('my_audio');
const songBtn = document.getElementById('songBtn');
songBtn.addEventListener('click', () => audio.play());
