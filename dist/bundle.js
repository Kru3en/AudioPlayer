/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n\n// Possible improvements:\n// - Change timeline and volume slider into input sliders, reskinned\n// - Change into Vue or React component\n// - Be able to grab a custom title instead of \"Music Song\"\n// - Hover over sliders to see preview of timestamp/volume change\n\nconst audioPlayer = document.querySelector(\".audio-player\");\nconst trackName = audioPlayer.querySelector(\".text-container .name\");\nconst trackArtist = audioPlayer.querySelector(\".text-container .artist\");\n\nconst tracks = [\n    {\n        url: \"../file-storage-audio-player/assets/audio/A.V.G, MACAN – Спой.mp3\",\n        name: \"Спой\",\n        artist: \"A.V.G, MACAN\",\n        image: \"../file-storage-audio-player/assets/img/AVG.png\"\n    },\n    {\n        url: \"../file-storage-audio-player/assets/audio/Ицык Цыпер feat. Игорь цыба – Дымок.mp3\",\n        name: \"Дымок\",\n        artist: \"Ицык Цыпер feat. Игорь цыба\",\n        image: \"https://img02.rl0.ru/afisha/e1200x800i/daily.afisha.ru/uploads/images/5/71/571a72c3e9665140c805f6a6ae6fd272.jpg\"\n    }, {\n        url: \"../file-storage-audio-player/assets/audio/beyonce.mp3\",\n        name: \"Лимонад\",\n        artist: \"beyonce\",\n        image: \"../file-storage-audio-player/assets/img/lemonade.png\"\n    }\n    // Добавьте объекты дополнительных треков здесь\n];\n\nlet currentTrackIndex = 0;\nconst audio = new Audio(tracks[currentTrackIndex]);\n\nfunction loadTrack(index) {\n    if (index < 0) index = tracks.length - 1;\n    else if (index >= tracks.length) index = 0;\n    currentTrackIndex = index;\n    const track = tracks[currentTrackIndex];\n    audio.src = track.url; // Убедитесь, что здесь используется свойство 'url'\n    audio.load();\n    playTrack();\n    trackName.textContent = track.name; // Используйте свойство 'name'\n    trackArtist.textContent = track.artist; // Используйте свойство 'artist'\n    const backgroundContainer = document.querySelector(\".background-container\");\n    backgroundContainer.style.backgroundImage = `url(${track.image})`;\n    document.body.style.setProperty('--background-image', `url(${track.image})`);\n}\n\n\naudio.addEventListener(\n    \"loadeddata\",\n    () => {\n        audioPlayer.querySelector(\".time .length\").textContent = getTimeCodeFromNum(\n            audio.duration\n        );\n        audio.volume = .75;\n    },\n    false\n);\n\nconst playBtn = audioPlayer.querySelector(\".controls .toggle-play\");\n\n// Устанавливаем обработчик клика для playBtn\nplayBtn.addEventListener(\"click\", () => {\n    // При каждом клике переключаем состояние воспроизведения\n    playTrack();\n}, false);\n\n\n\nfunction playTrack() {\n    // Проверяем, находится ли аудио в паузе в момент клика\n    if (audio.paused) {\n        // Если да, то удаляем класс 'play', добавляем 'pause' и начинаем воспроизведение\n        playBtn.classList.remove(\"play\");\n        playBtn.classList.add(\"pause\");\n        audio.play();\n    } else {\n        // Если аудио уже играет, то удаляем класс 'pause', добавляем 'play' и ставим аудио на паузу\n        playBtn.classList.remove(\"pause\");\n        playBtn.classList.add(\"play\");\n        audio.pause();\n    }\n}\n\n\nconst prevBtn = audioPlayer.querySelector(\".prew\");\nconst nextBtn = audioPlayer.querySelector(\".next\");\n\nprevBtn.addEventListener(\"click\", () => {\n    loadTrack(currentTrackIndex - 1);\n});\n\nnextBtn.addEventListener(\"click\", () => {\n    loadTrack(currentTrackIndex + 1);\n});\n\n// Добавьте остальной ваш JavaScript код здесь, например, для управления временной шкалой, громкостью и т.д.\n\n//click on timeline to skip around\nconst timeline = audioPlayer.querySelector(\".timeline\");\ntimeline.addEventListener(\"click\", e => {\n    const timelineWidth = window.getComputedStyle(timeline).width;\n    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;\n    audio.currentTime = timeToSeek;\n}, false);\n\n//click volume slider to change volume\nconst volumeSlider = audioPlayer.querySelector(\".controls .volume-slider\");\nvolumeSlider.addEventListener('click', e => {\n    const sliderWidth = window.getComputedStyle(volumeSlider).width;\n    const newVolume = e.offsetX / parseInt(sliderWidth);\n    audio.volume = newVolume;\n    audioPlayer.querySelector(\".controls .volume-percentage\").style.width = newVolume * 100 + '%';\n}, false)\n\n//check audio percentage and update time accordingly\nsetInterval(() => {\n    const progressBar = audioPlayer.querySelector(\".progress\");\n    progressBar.style.width = audio.currentTime / audio.duration * 100 + \"%\";\n    audioPlayer.querySelector(\".time .current\").textContent = getTimeCodeFromNum(\n        audio.currentTime\n    );\n}, 500);\n\n\n\naudioPlayer.querySelector(\".volume-button\").addEventListener(\"click\", () => {\n    const volumeEl = audioPlayer.querySelector(\".volume-container .volume\");\n    audio.muted = !audio.muted;\n    if (audio.muted) {\n        volumeEl.classList.remove(\"icono-volumeMedium\");\n        volumeEl.classList.add(\"icono-volumeMute\");\n    } else {\n        volumeEl.classList.add(\"icono-volumeMedium\");\n        volumeEl.classList.remove(\"icono-volumeMute\");\n    }\n});\n\n//turn 128 seconds into 2:08\nfunction getTimeCodeFromNum(num) {\n    let seconds = parseInt(num);\n    let minutes = parseInt(seconds / 60);\n    seconds -= minutes * 60;\n    const hours = parseInt(minutes / 60);\n    minutes -= hours * 60;\n\n    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;\n    return `${String(hours).padStart(2, 0)}:${minutes}:${String(\n        seconds % 60\n    ).padStart(2, 0)}`;\n}\n\n// При загрузке страницы загружаем данные первого трека\nloadTrack(0);\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;