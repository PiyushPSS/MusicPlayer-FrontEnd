var progress = document.getElementById('progress');
var song = document.getElementById('song');
var playIcon = document.getElementById("play");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPauseFunction() {
    if (playIcon.className == "fa-solid fa-play") {
        song.play();
        playIcon.className = "fa-solid fa-pause";
    } else {
        song.pause();
        playIcon.className = "fa-solid fa-play";
    }
}
function tenSecondsBefore() {
    if (song.currentTime <= 10) {
        progress.value = 0;
        song.currentTime = 0;
    } else {
        song.currentTime -= 10;
        progress.value = song.currentTime;
    }
}

function tenSecondsAfter() {
    var nextTime = song.currentTime + 10;
    if (nextTime > song.duration) {
        progress.value = song.duration;
        song.currentTime = song.duration;
    } else {
        song.currentTime += 10;
        progress.value = song.currentTime;
    }
}

progress.addEventListener('input', function () {
    song.currentTime = progress.value;
});

song.addEventListener('timeupdate', function () {
    progress.value = song.currentTime;
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'Space') {
        playPauseFunction();
    }

    if (event.code == 'ArrowLeft') {
        tenSecondsBefore();
    }

    if (event.code == 'ArrowRight') {
        tenSecondsAfter();
    }
});

progress.addEventListener('click', function (event) {
    song.currentTime = event.target.value;
});