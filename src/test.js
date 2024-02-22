
// Possible improvements:
// - Change timeline and volume slider into input sliders, reskinned
// - Change into Vue or React component
// - Be able to grab a custom title instead of "Music Song"
// - Hover over sliders to see preview of timestamp/volume change

const audioPlayer = document.querySelector(".audio-player");
const trackName = audioPlayer.querySelector(".text-container .name");
const trackArtist = audioPlayer.querySelector(".text-container .artist");

const tracks = [
    {
        url: "./src/file-storage-audio-player/assets/audio/avg.mp3",
        name: "Спой",
        artist: "A.V.G, MACAN",
        image: "./src/file-storage-audio-player/assets/img/AVG.png"
    },
    {
        url: "./src/file-storage-audio-player/assets/audio/dimok.mp3",
        name: "Дымок",
        artist: "Ицык Цыпер feat. Игорь цыба",
        image: "https://img.gazeta.ru/files3/175/18165175/1111222333-pic_32ratio_1200x800-1200x800-64721.jpg"
    }, {
        url: "./src/file-storage-audio-player/assets/audio/beyonce.mp3",
        name: "Лимонад",
        artist: "beyonce",
        image: "./src/file-storage-audio-player/assets/img/lemonade.png"
    }
    // Добавьте объекты дополнительных треков здесь
];

let currentTrackIndex = 0;
const audio = new Audio(tracks[currentTrackIndex]);

function loadTrack(index) {
    if (index < 0) index = tracks.length - 1;
    else if (index >= tracks.length) index = 0;
    currentTrackIndex = index;
    const track = tracks[currentTrackIndex];
    audio.src = track.url; // Убедитесь, что здесь используется свойство 'url'
    audio.load();
    playTrack();
    trackName.textContent = track.name; // Используйте свойство 'name'
    trackArtist.textContent = track.artist; // Используйте свойство 'artist'
    const backgroundContainer = document.querySelector(".background-container");
    backgroundContainer.style.backgroundImage = `url(${track.image})`;
    document.body.style.setProperty('--background-image', `url(.${track.image})`);
}


audio.addEventListener(
    "loadeddata",
    () => {
        audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
            audio.duration
        );
        audio.volume = .75;
    },
    false
);

const playBtn = audioPlayer.querySelector(".controls .toggle-play");

// Устанавливаем обработчик клика для playBtn
playBtn.addEventListener("click", () => {
    // При каждом клике переключаем состояние воспроизведения
    playTrack();
}, false);



function playTrack() {
    // Проверяем, находится ли аудио в паузе в момент клика
    if (audio.paused) {
        // Если да, то удаляем класс 'play', добавляем 'pause' и начинаем воспроизведение
        playBtn.classList.remove("play");
        playBtn.classList.add("pause");
        audio.play();
    } else {
        // Если аудио уже играет, то удаляем класс 'pause', добавляем 'play' и ставим аудио на паузу
        playBtn.classList.remove("pause");
        playBtn.classList.add("play");
        audio.pause();
    }
}


const prevBtn = audioPlayer.querySelector(".prew");
const nextBtn = audioPlayer.querySelector(".next");

prevBtn.addEventListener("click", () => {
    loadTrack(currentTrackIndex - 1);
});

nextBtn.addEventListener("click", () => {
    loadTrack(currentTrackIndex + 1);
});

// Добавьте остальной ваш JavaScript код здесь, например, для управления временной шкалой, громкостью и т.д.

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
        audio.currentTime
    );
}, 500);



audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = audioPlayer.querySelector(".volume-container .volume");
    audio.muted = !audio.muted;
    if (audio.muted) {
        volumeEl.classList.remove("icono-volumeMedium");
        volumeEl.classList.add("icono-volumeMute");
    } else {
        volumeEl.classList.add("icono-volumeMedium");
        volumeEl.classList.remove("icono-volumeMute");
    }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}

// При загрузке страницы загружаем данные первого трека
loadTrack(0);