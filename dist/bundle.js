/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.js */ \"./src/test.js\");\n/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ (() => {

eval("\r\n// Possible improvements:\r\n// - Change timeline and volume slider into input sliders, reskinned\r\n// - Change into Vue or React component\r\n// - Be able to grab a custom title instead of \"Music Song\"\r\n// - Hover over sliders to see preview of timestamp/volume change\r\n\r\nconst audioPlayer = document.querySelector(\".audio-player\");\r\nconst trackName = audioPlayer.querySelector(\".text-container .name\");\r\nconst trackArtist = audioPlayer.querySelector(\".text-container .artist\");\r\n\r\nconst tracks = [\r\n    {\r\n        url: \"./src/file-storage-audio-player/assets/audio/avg.mp3\",\r\n        name: \"Спой\",\r\n        artist: \"A.V.G, MACAN\",\r\n        image: \"./src/file-storage-audio-player/assets/img/AVG.png\"\r\n    },\r\n    {\r\n        url: \"./src/file-storage-audio-player/assets/audio/dimok.mp3\",\r\n        name: \"Дымок\",\r\n        artist: \"Ицык Цыпер feat. Игорь цыба\",\r\n        image: \"https://img.gazeta.ru/files3/175/18165175/1111222333-pic_32ratio_1200x800-1200x800-64721.jpg\"\r\n    }, {\r\n        url: \"./src/file-storage-audio-player/assets/audio/beyonce.mp3\",\r\n        name: \"Лимонад\",\r\n        artist: \"beyonce\",\r\n        image: \"./src/file-storage-audio-player/assets/img/lemonade.png\"\r\n    }\r\n    // Добавьте объекты дополнительных треков здесь\r\n];\r\n\r\nlet currentTrackIndex = 0;\r\nconst audio = new Audio(tracks[currentTrackIndex]);\r\n\r\nfunction loadTrack(index) {\r\n    if (index < 0) index = tracks.length - 1;\r\n    else if (index >= tracks.length) index = 0;\r\n    currentTrackIndex = index;\r\n    const track = tracks[currentTrackIndex];\r\n    audio.src = track.url; // Убедитесь, что здесь используется свойство 'url'\r\n    audio.load();\r\n    playTrack();\r\n    trackName.textContent = track.name; // Используйте свойство 'name'\r\n    trackArtist.textContent = track.artist; // Используйте свойство 'artist'\r\n    const backgroundContainer = document.querySelector(\".background-container\");\r\n    backgroundContainer.style.backgroundImage = `url(${track.image})`;\r\n    document.body.style.setProperty('--background-image', `url(${track.image})`);\r\n}\r\n\r\n\r\naudio.addEventListener(\r\n    \"loadeddata\",\r\n    () => {\r\n        audioPlayer.querySelector(\".time .length\").textContent = getTimeCodeFromNum(\r\n            audio.duration\r\n        );\r\n        audio.volume = .75;\r\n    },\r\n    false\r\n);\r\n\r\nconst playBtn = audioPlayer.querySelector(\".controls .toggle-play\");\r\n\r\n// Устанавливаем обработчик клика для playBtn\r\nplayBtn.addEventListener(\"click\", () => {\r\n    // При каждом клике переключаем состояние воспроизведения\r\n    playTrack();\r\n}, false);\r\n\r\n\r\n\r\nfunction playTrack() {\r\n    // Проверяем, находится ли аудио в паузе в момент клика\r\n    if (audio.paused) {\r\n        // Если да, то удаляем класс 'play', добавляем 'pause' и начинаем воспроизведение\r\n        playBtn.classList.remove(\"play\");\r\n        playBtn.classList.add(\"pause\");\r\n        audio.play();\r\n    } else {\r\n        // Если аудио уже играет, то удаляем класс 'pause', добавляем 'play' и ставим аудио на паузу\r\n        playBtn.classList.remove(\"pause\");\r\n        playBtn.classList.add(\"play\");\r\n        audio.pause();\r\n    }\r\n}\r\n\r\n\r\nconst prevBtn = audioPlayer.querySelector(\".prew\");\r\nconst nextBtn = audioPlayer.querySelector(\".next\");\r\n\r\nprevBtn.addEventListener(\"click\", () => {\r\n    loadTrack(currentTrackIndex - 1);\r\n});\r\n\r\nnextBtn.addEventListener(\"click\", () => {\r\n    loadTrack(currentTrackIndex + 1);\r\n});\r\n\r\n// Добавьте остальной ваш JavaScript код здесь, например, для управления временной шкалой, громкостью и т.д.\r\n\r\n//click on timeline to skip around\r\nconst timeline = audioPlayer.querySelector(\".timeline\");\r\ntimeline.addEventListener(\"click\", e => {\r\n    const timelineWidth = window.getComputedStyle(timeline).width;\r\n    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;\r\n    audio.currentTime = timeToSeek;\r\n}, false);\r\n\r\n//click volume slider to change volume\r\nconst volumeSlider = audioPlayer.querySelector(\".controls .volume-slider\");\r\nvolumeSlider.addEventListener('click', e => {\r\n    const sliderWidth = window.getComputedStyle(volumeSlider).width;\r\n    const newVolume = e.offsetX / parseInt(sliderWidth);\r\n    audio.volume = newVolume;\r\n    audioPlayer.querySelector(\".controls .volume-percentage\").style.width = newVolume * 100 + '%';\r\n}, false)\r\n\r\n//check audio percentage and update time accordingly\r\nsetInterval(() => {\r\n    const progressBar = audioPlayer.querySelector(\".progress\");\r\n    progressBar.style.width = audio.currentTime / audio.duration * 100 + \"%\";\r\n    audioPlayer.querySelector(\".time .current\").textContent = getTimeCodeFromNum(\r\n        audio.currentTime\r\n    );\r\n}, 500);\r\n\r\n\r\n\r\naudioPlayer.querySelector(\".volume-button\").addEventListener(\"click\", () => {\r\n    const volumeEl = audioPlayer.querySelector(\".volume-container .volume\");\r\n    audio.muted = !audio.muted;\r\n    if (audio.muted) {\r\n        volumeEl.classList.remove(\"icono-volumeMedium\");\r\n        volumeEl.classList.add(\"icono-volumeMute\");\r\n    } else {\r\n        volumeEl.classList.add(\"icono-volumeMedium\");\r\n        volumeEl.classList.remove(\"icono-volumeMute\");\r\n    }\r\n});\r\n\r\n//turn 128 seconds into 2:08\r\nfunction getTimeCodeFromNum(num) {\r\n    let seconds = parseInt(num);\r\n    let minutes = parseInt(seconds / 60);\r\n    seconds -= minutes * 60;\r\n    const hours = parseInt(minutes / 60);\r\n    minutes -= hours * 60;\r\n\r\n    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;\r\n    return `${String(hours).padStart(2, 0)}:${minutes}:${String(\r\n        seconds % 60\r\n    ).padStart(2, 0)}`;\r\n}\r\n\r\n// При загрузке страницы загружаем данные первого трека\r\nloadTrack(0);\n\n//# sourceURL=webpack:///./src/test.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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