/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/constants.js":
/*!*************************!*\
  !*** ./js/constants.js ***!
  \*************************/
/*! exports provided: COLORS_ARRAY, SHORT_ARCS_ARRAY, BLUE, RED, PURPLE, GREEN, ORANGE, shortArc, REVERSE, SPINNER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS_ARRAY", function() { return COLORS_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHORT_ARCS_ARRAY", function() { return SHORT_ARCS_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE", function() { return BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURPLE", function() { return PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREEN", function() { return GREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE", function() { return ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortArc", function() { return shortArc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REVERSE", function() { return REVERSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER", function() { return SPINNER; });
var COLORS_ARRAY = ['BLUE', 'RED'];
var SHORT_ARCS_ARRAY = ['bottomRight', 'bottomLeft', 'topLeft', 'topRight'];
var BLUE = {
  circleLight: function circleLight(grd, alpha) {
    return grd.addColorStop(1.000, 'rgba(78, 102, 150, ' + alpha + ')');
  },
  circleDark: function circleDark(grd, alpha) {
    return grd.addColorStop(0.000, 'rgba(24, 49, 73, ' + alpha + ')');
  },
  circleEdge: '#e9e9e9',
  timerLight: function timerLight(grd) {
    return grd.addColorStop(0, 'rgba(5, 160, 250, 0.5)');
  },
  timerDark: function timerDark(grd) {
    return grd.addColorStop(1, 'rgba(163, 247, 222, 0.5)');
  }
};
var RED = {
  circleLight: function circleLight(grd, alpha) {
    return grd.addColorStop(1.000, 'rgba(252, 153, 185, ' + alpha + ')');
  },
  circleDark: function circleDark(grd, alpha) {
    return grd.addColorStop(0.000, 'rgba(252, 50, 121, ' + alpha + ')');
  },
  circleEdge: '#e9e9e9',
  timerLight: function timerLight(grd) {
    return grd.addColorStop(0, 'rgba(250, 242, 170, 0.9)');
  },
  timerDark: function timerDark(grd) {
    return grd.addColorStop(1, 'rgba(250, 170, 246, 0.9)');
  }
};
var PURPLE = {
  circleLight: function circleLight(grd, alpha) {
    return grd.addColorStop(1.000, 'rgba(164, 154, 166, ' + alpha + ')');
  },
  circleDark: function circleDark(grd, alpha) {
    return grd.addColorStop(0.000, 'rgba(52, 31, 53, ' + alpha + ')');
  },
  circleEdge: '#e9e9e9',
  timerLight: function timerLight(grd) {
    return grd.addColorStop(0, 'rgba(5, 160, 250, 0.5)');
  },
  timerDark: function timerDark(grd) {
    return grd.addColorStop(1, 'rgba(163, 247, 222, 0.5)');
  }
};
var GREEN = {
  circleLight: function circleLight(grd, alpha) {
    return grd.addColorStop(0.000, 'rgba(204, 255, 204, ' + alpha + ')');
  },
  circleDark: function circleDark(grd, alpha) {
    return grd.addColorStop(0.000, 'rgba(52, 31, 53, ' + alpha + ')');
  },
  circleEdge: '#e9e9e9',
  timerLight: function timerLight(grd) {
    return grd.addColorStop(0, 'rgba(5, 160, 250, 0.5)');
  },
  timerDark: function timerDark(grd) {
    return grd.addColorStop(1, 'rgba(163, 247, 222, 0.5)');
  }
};
var ORANGE = {
  circleLight: '#4a370e',
  circleDark: '#e2723b',
  circleEdge: '#e9e9e9',
  timerLight: function timerLight(grd) {
    return grd.addColorStop(0, 'rgba(5, 160, 250, 0.5)');
  },
  timerDark: function timerDark(grd) {
    return grd.addColorStop(1, 'rgba(163, 247, 222, 0.5)');
  }
};
var shortArc = {
  bottomRight: {
    createArc: function createArc(ctx, centerX, centerY, length) {
      return ctx.arc(centerX, centerY, length, 0 * Math.PI, 0.5 * Math.PI);
    },
    translateTop: function translateTop(ctx, length) {
      return ctx.translate(-length, 0);
    },
    translateBottom: function translateBottom(ctx, length) {
      return ctx.translate(0, -length);
    }
  },
  bottomLeft: {
    createArc: function createArc(ctx, centerX, centerY, length) {
      return ctx.arc(centerX, centerY, length, 0.5 * Math.PI, 1 * Math.PI);
    },
    translateTop: function translateTop(ctx, length) {
      return ctx.translate(length, 0);
    },
    translateBottom: function translateBottom(ctx, length) {
      return ctx.translate(0, -length);
    }
  },
  topLeft: {
    createArc: function createArc(ctx, centerX, centerY, length) {
      return ctx.arc(centerX, centerY, length, 1 * Math.PI, 1.5 * Math.PI);
    },
    translateTop: function translateTop(ctx, length) {
      return ctx.translate(0, length);
    },
    translateBottom: function translateBottom(ctx, length) {
      return ctx.translate(length, 0);
    }
  },
  topRight: {
    createArc: function createArc(ctx, centerX, centerY, length) {
      return ctx.arc(centerX, centerY, length, 1.5 * Math.PI, 2 * Math.PI);
    },
    translateBottom: function translateBottom(ctx, length) {
      return ctx.translate(-length, 0);
    },
    translateTop: function translateTop(ctx, length) {
      return ctx.translate(0, length);
    }
  }
};
var REVERSE = '⬄';
var SPINNER = '⥁'; // export const rainbowRing = {
// ctx.beginPath();
// ctx.arc(this.centerX, this.centerY, this.timerSize(), 0, 2 * Math.PI);
// ctx.lineWidth = 5;
// ctx.strokeStyle = "hsla("+Math.random() * 360+", 100%, 80%, 0.9)";  
// ctx.stroke();
// ctx.closePath();
// }

/***/ }),

/***/ "./js/entry.js":
/*!*********************!*\
  !*** ./js/entry.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view.js */ "./js/game_view.js");
 // Create the canvas

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("game-canvas");
  var ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = 'destination-over';
  canvas.width = window.innerWidth * 0.9;
  canvas.height = window.innerHeight * 0.9;
  var welcomeSplash = document.getElementById('welcome-splash');
  var gameoverOverlay = document.getElementById('gameover');
  var playButton = document.getElementById('play-button');
  var retryButton = document.getElementById('retry');
  var countdown = new Audio();
  countdown.src = "assets/music/smash_countdown.mp3";
  var cursor = document.getElementById('cursor');
  var cursor2 = document.getElementById('cursor2');

  var handleMouseMove = function handleMouseMove(e) {
    cursor.setAttribute("style", "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;");
  };

  document.addEventListener('mousemove', handleMouseMove);

  var beginGame = function beginGame() {
    var mainMenuBGM = document.getElementById("mainMenuBGM");
    mainMenuBGM.pause();
    var game = new _game_view_js__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx);
    welcomeSplash.classList.add("hide");
    cursor.classList.add("hide");
    document.removeEventListener('mousemove', handleMouseMove);
    countdown.play();
    setTimeout(function () {
      return game.start();
    }, 5000);
    setTimeout(function () {
      return countdown.pause();
    }, 4500);
  };

  playButton.addEventListener('click', beginGame);
  retryButton.addEventListener('click', function () {
    var game = new _game_view_js__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx);
    gameoverOverlay.classList.add("hide");

    var handleMouseMove2 = function handleMouseMove2(e) {
      cursor2.setAttribute("style", "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;");
    };

    document.removeEventListener('mousemove', handleMouseMove2);
    cursor2.classList.add("hide");
    countdown.play();
    setTimeout(function () {
      return game.start();
    }, 5000);
    setTimeout(function () {
      return countdown.pause();
    }, 4500);
  });
});

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _orbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orbs */ "./js/orbs.js");
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./particle */ "./js/particle.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./js/constants.js");
/* harmony import */ var _health__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health */ "./js/health.js");
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stats */ "./js/stats.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Game =
/*#__PURE__*/
function () {
  function Game(canvas, ctx, gameView) {
    _classCallCheck(this, Game);

    //Game board
    this.canvas = canvas;
    this.ctx = ctx;
    this.playTime = 0;
    this.gameView = gameView; //Mousemove tracker

    this.mousePosX = 0;
    this.mousePosY = 0;
    this.clickable = true; //Dimensions

    this.maxWidth = this.canvas.width - 300;
    this.minWidth = 300;
    this.maxHeight = this.canvas.height - 300;
    this.minHeight = 300;
    this.safeWidth = Math.random() * (this.maxWidth - this.minWidth) + this.minWidth;
    this.safeHeight = Math.random() * (this.maxHeight - this.minHeight) + this.minHeight; // this.orb = new Orb((Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth, (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight, 50, 'BLUE' , 1, 150, 3);
    // this.orb = new Orb(300, 300, 50, 'BLUE' , 1, 150, 3);
    //Orb sizing

    this.orbSize = 75;
    this.ringSize = this.orbSize * 3; //Objects

    this.health = new _health__WEBPACK_IMPORTED_MODULE_3__["default"](1 / 13, 5, this, this.gameView);
    this.stats = new _stats__WEBPACK_IMPORTED_MODULE_5__["default"](this, this.gameView);
    this.objects = []; //Points

    this.points = 0; //bgm

    this.bgm = new Audio();
    this.bgm.src = "assets/music/bgm2.mp3";
    this.bgm.loop = false; //gameover sound

    this.gameOverSFX = new Audio();
    this.gameOverSFX.src = "assets/music/gameoversfx.wav";
    this.gameOverSFX.loop = false; //Hit and miss sound

    this.hitSound = new Audio();
    this.hitSound.src = "assets/music/taiko.wav";
    this.hitSound.loop = false;
    this.missSound = new Audio();
    this.missSound.src = "assets/music/whoosh.mp3";
    this.missSound.loop = false; //Function

    this.bindEventListener = this.bindEventListener.bind(this);
    this.draw = this.draw.bind(this);
    this.increasePlayTime = this.increasePlayTime.bind(this);
    this.removeObject = this.removeObject.bind(this);
    this.generateOrb = this.generateOrb.bind(this);
    this.makeClickable = this.makeClickable.bind(this);
    this.expireOrbPointsReduction = this.expireOrbPointsReduction.bind(this);
    this.playMusic = this.playMusic.bind(this);
    this.stopMusic = this.stopMusic.bind(this);
    this.handleGameInput = this.handleGameInput.bind(this);
    this.interactWithOrb = this.interactWithOrb.bind(this);
  }

  _createClass(Game, [{
    key: "playMusic",
    value: function playMusic() {
      this.bgm.play();
    }
  }, {
    key: "stopMusic",
    value: function stopMusic() {
      var _this = this;

      this.bgm.pause();
      setTimeout(function () {
        return _this.gameOverSFX.play();
      }, 1000);
    }
  }, {
    key: "increasePlayTime",
    value: function increasePlayTime(dt) {
      this.playTime += dt;

      if (this.playTime > 135) {
        this.gameView.stop();
      }
    }
  }, {
    key: "makeClickable",
    value: function makeClickable() {
      this.clickable = true;
    }
  }, {
    key: "removeObject",
    value: function removeObject() {
      this.objects.shift();
      this.makeClickable();
    }
  }, {
    key: "generateManyOrbs",
    value: function generateManyOrbs() {
      //Select random color
      var randomColorIndex = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_2__["COLORS_ARRAY"].length);
      var randomColor = _constants__WEBPACK_IMPORTED_MODULE_2__["COLORS_ARRAY"][randomColorIndex]; //Select random of numbers to display

      var randomRange = Math.floor(Math.random() * 7) + 1;
      var timer = 1;

      if (this.playTime < 27) {
        timer = 1.2;
      } else if (this.playTime > 26 && this.playTime < 40) {
        timer = 1.3;
      } else if (this.playTime > 39 && this.playTime < 60) {
        timer = 0.9;
      } else if (this.playTime > 59 && this.playTime < 80) {
        timer = 1;
      } else if (this.playTime > 79 && this.playTime < 110) {
        timer = 0.9;
      } else {
        timer = 0.8;
      }

      var callback;

      for (var i = 1; i < randomRange + 1; i++) {
        if (i === randomRange) {
          callback = true;
        } else {
          callback = false;
        }

        this.generateOrb(randomColor, i, timer, callback);
      }
    }
  }, {
    key: "generateOrb",
    value: function generateOrb(color, number, timer, callback) {
      var _this2 = this;

      //Select random Arc
      var randomShortArcIndex = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_2__["SHORT_ARCS_ARRAY"].length);
      var randomShortArc = _constants__WEBPACK_IMPORTED_MODULE_2__["SHORT_ARCS_ARRAY"][randomShortArcIndex]; //Create Orb

      var orb = new _orbs__WEBPACK_IMPORTED_MODULE_0__["default"](Math.random() * (this.maxWidth - this.minWidth) + this.minWidth, Math.random() * (this.maxHeight - this.minHeight) + this.minHeight, this.orbSize, color, number, this.ringSize, timer, this, callback);
      setTimeout(function () {
        return _this2.objects.push(orb);
      }, (number - 1) * (timer * 500));
    }
  }, {
    key: "expireOrbPointsReduction",
    value: function expireOrbPointsReduction() {
      this.health.miss();
      this.stats.updateMiss(1);
    }
  }, {
    key: "interactWithOrb",
    value: function interactWithOrb() {
      if (this.objects[0] instanceof _orbs__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        if (Math.sqrt((this.mousePosX - this.objects[0].centerX) * (this.mousePosX - this.objects[0].centerX) + (this.mousePosY - this.objects[0].centerY) * (this.mousePosY - this.objects[0].centerY)) < this.objects[0].circleRadius) {
          if (this.objects[0].ringRadius < this.objects[0].initialRingRadius * 0.2 && this.clickable) {
            this.clickable = false;
            this.objects[0].active = 'expire';
            this.health.perfect();
            this.hitSound.play();
            this.stats.updatePoints(1000);
            this.stats.updatePerfect(1); //perfect points
          } else if (this.objects[0].ringRadius < this.objects[0].initialRingRadius * 0.35 && this.clickable) {
            this.clickable = false;
            this.objects[0].active = 'expire';
            this.health.good();
            this.hitSound.play();
            this.stats.updatePoints(300);
            this.stats.updateGood(1); //Good points
          } else if (this.objects[0].ringRadius < this.objects[0].initialRingRadius * 0.5 && this.clickable) {
            this.clickable = false;
            this.objects[0].active = 'expire';
            this.health.poor();
            this.hitSound.play();
            this.stats.updatePoints(100);
            this.stats.updatePoor(1); //Poor points
          } else if (this.objects[0].ringRadius < this.objects[0].initialRingRadius * 1.6 && this.clickable) {
            this.clickable = false;
            this.missSound.play(); // this.stats.updateMiss(1)
            //No points
          } else {}
        }
      }
    }
  }, {
    key: "handleGameInput",
    value: function handleGameInput(event) {
      switch (event.keyCode) {
        //Mouse click
        //If key is z or x
        case 90:
        case 88:
          this.interactWithOrb(); // if (this.objects[0] instanceof Orb) {
          //     if (Math.sqrt((this.mousePosX-this.objects[0].centerX)*(this.mousePosX-this.objects[0].centerX) + (this.mousePosY-this.objects[0].centerY)*(this.mousePosY-this.objects[0].centerY)) < this.objects[0].circleRadius) {
          //         if ((this.objects[0].ringRadius < (this.objects[0].initialRingRadius * 0.1)) && this.clickable) {
          //             this.clickable = false;
          //             this.objects[0].active = 'expire';
          //             this.health.perfect();
          //             this.hitSound.play();
          //             this.stats.updatePoints(1000)
          //             this.stats.updatePerfect(1)
          //             //perfect points
          //         }
          //         else if ((this.objects[0].ringRadius < (this.objects[0].initialRingRadius * 0.2)) && this.clickable) {
          //             this.clickable = false;
          //             this.objects[0].active = 'expire';
          //             this.health.good();
          //             this.hitSound.play();
          //             this.stats.updatePoints(300)
          //             this.stats.updateGood(1)
          //             //Good points
          //         }
          //         else if ((this.objects[0].ringRadius < (this.objects[0].initialRingRadius * 0.4)) && this.clickable) {
          //             this.clickable = false;
          //             this.objects[0].active = 'expire';
          //             this.health.poor();
          //             this.hitSound.play();
          //             this.stats.updatePoints(100)
          //             this.stats.updatePoor(1)
          //             //Poor points
          //         }
          //         else if ((this.objects[0].ringRadius < (this.objects[0].initialRingRadius * 1.6)) && this.clickable) {
          //             this.clickable = false;
          //             this.missSound.play();
          //             this.stats.updateMiss(1)
          //             //No points
          //         }
          //         else {
          //         }
          //     }
          // }

          break;

        default:
          break;
      }
    }
  }, {
    key: "bindEventListener",
    value: function bindEventListener() {
      var _this3 = this;

      this.canvas.addEventListener('mousemove', function (event) {
        _this3.mousePosX = event.clientX;
        _this3.mousePosY = event.clientY;
      }); //Handle user pressing x or z

      window.addEventListener("keydown", this.handleGameInput);
      window.addEventListener("click", this.interactWithOrb); //touchscreens

      window.addEventListener("touchstart", function (event) {
        if (_this3.objects[0] instanceof _orbs__WEBPACK_IMPORTED_MODULE_0__["default"]) {
          if (Math.sqrt((event.touches[0].clientX - _this3.objects[0].centerX) * (event.touches[0].clientX - _this3.objects[0].centerX) + (event.touches[0].clientY - _this3.objects[0].centerY) * (event.touches[0].clientY - _this3.objects[0].centerY)) < _this3.objects[0].circleRadius) {
            if (_this3.objects[0].ringRadius < _this3.objects[0].initialRingRadius * 0.1 && _this3.clickable) {
              _this3.clickable = false;
              _this3.objects[0].active = 'expire';

              _this3.health.perfect();

              _this3.hitSound.play();

              _this3.stats.updatePoints(1000);

              _this3.stats.updatePerfect(1); //perfect points

            } else if (_this3.objects[0].ringRadius < _this3.objects[0].initialRingRadius * 0.2 && _this3.clickable) {
              _this3.clickable = false;
              _this3.objects[0].active = 'expire';

              _this3.health.good();

              _this3.hitSound.play();

              _this3.stats.updatePoints(300);

              _this3.stats.updateGood(1); //Good points

            } else if (_this3.objects[0].ringRadius < _this3.objects[0].initialRingRadius * 0.4 && _this3.clickable) {
              _this3.clickable = false;
              _this3.objects[0].active = 'expire';

              _this3.health.poor();

              _this3.hitSound.play();

              _this3.stats.updatePoints(100);

              _this3.stats.updatePoor(1); //Poor points

            } else if (_this3.objects[0].ringRadius < _this3.objects[0].initialRingRadius * 1.6 && _this3.clickable) {
              _this3.clickable = false;

              _this3.missSound.play(); // this.stats.updateMiss(1)
              //No points

            } else {}
          }
        }
      });
    }
  }, {
    key: "update",
    value: function update(ctx, dt) {}
  }, {
    key: "draw",
    value: function draw(ctx, dt) {
      //Test Ring Radius
      if (this.objects[0] instanceof _orbs__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        console.log(this.objects[0].ringRadius);
      } //Draw health


      this.health.draw(ctx); // particle1.update(ctx);

      this.objects.forEach(function (object) {
        object.draw(ctx, dt);
      }); //Draw line between groups of orbs

      if (this.objects[1]) {
        ctx.beginPath();
        var angle = Math.random() * 360;
        var angleDlt = 60;
        var step = 1;
        var grd = ctx.createLinearGradient(0, 0, 500, 0);
        grd.addColorStop(0, "hsl(" + angle % 360 + ",100%, 50%)");
        grd.addColorStop(0.5, "hsl(" + (angle + angleDlt / 2) % 360 + ",100%, 50%)");
        grd.addColorStop(1, "hsl(" + (angle + angleDlt) % 360 + ",100%, 50%)");
        ctx.moveTo(this.objects[0].centerX, this.objects[0].centerY);
        ctx.lineTo(this.objects[1].centerX, this.objects[1].centerY);
        ctx.lineWidth = 1;
        ctx.strokeStyle = grd;
        ctx.setLineDash([2, 5]);
        ctx.stroke();
        angle += step;
        ctx.closePath();
        ctx.setLineDash([]);
      } //Draw Points AND ADD POINTS


      this.stats.draw(this.ctx); //Draw Time

      ctx.beginPath();
      ctx.font = "120px Teko";
      ctx.fillStyle = 'white';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      ctx.fillText("".concat(Math.floor(this.playTime), "s"), 25, this.canvas.height - 25);
      ctx.closePath();
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./js/game_view.js":
/*!*************************!*\
  !*** ./js/game_view.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameView; });
/* harmony import */ var _orbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orbs */ "./js/orbs.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./js/game.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./js/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var GameView =
/*#__PURE__*/
function () {
  function GameView(canvas, ctx) {
    _classCallCheck(this, GameView);

    this.canvas = canvas;
    this.ctx = ctx;
    this.gameInstance = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, ctx, this);
    this.lastTime = new Date();
    this.requestId = undefined;
    this.gameOver = false;
    this.orb = new _orbs__WEBPACK_IMPORTED_MODULE_0__["default"](Math.random() * (this.maxWidth - this.minWidth) + this.minWidth, Math.random() * (this.maxHeight - this.minHeight) + this.minHeight, 50, _constants__WEBPACK_IMPORTED_MODULE_2__["BLUE"], 1, 150, 0.20); // this.orb = new Orb(500, 500, 50, 'RED', 2, 150, 0.5);

    this.orb2 = new _orbs__WEBPACK_IMPORTED_MODULE_0__["default"](Math.random() * (this.maxWidth - this.minWidth) + this.minWidth, Math.random() * (this.maxHeight - this.minHeight) + this.minHeight, 50, _constants__WEBPACK_IMPORTED_MODULE_2__["BLUE"], 2, 150, 0.2);
    this.orb3 = new _orbs__WEBPACK_IMPORTED_MODULE_0__["default"](Math.random() * (this.maxWidth - this.minWidth) + this.minWidth, Math.random() * (this.maxHeight - this.minHeight) + this.minHeight, 50, _constants__WEBPACK_IMPORTED_MODULE_2__["BLUE"], 3, 150, 0.2);
    this.frame = 0;
  }

  _createClass(GameView, [{
    key: "start",
    value: function start() {
      var _this = this;

      if (!this.requestId) {
        this.gameInstance.bindEventListener(); // this.gameInstance.beginTimer();
        // this.gameInstance.resetScene();

        this.gameInstance.playMusic();
        this.lastTime = new Date();
        this.requestId = requestAnimationFrame(this.animate.bind(this));
        setTimeout(function () {
          return _this.gameInstance.generateManyOrbs();
        }, 500);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.requestId) {
        this.gameOver = true; // this.gameInstance.bindEventListener(this.canvas);
        // this.gameInstance.beginTimer();
        // this.gameInstance.resetScene();

        this.gameInstance.stopMusic();
        cancelAnimationFrame(this.requestID);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // window.removeEventListener('keydown')
      }

      var gameoverOverlay = document.getElementById('gameover');
      gameoverOverlay.classList.remove('hide');
      var cursor2 = document.getElementById('cursor2');

      var handleMouseMove2 = function handleMouseMove2(e) {
        cursor2.setAttribute("style", "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;");
      };

      document.addEventListener('mousemove', handleMouseMove2);
      cursor2.classList.remove("hide"); // setTimeout(()=>gameoverOverlay.classList.remove('hide'), 3000)
    }
  }, {
    key: "animate",
    value: function animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      if (!this.gameOver) {
        var currentTime = Date.now();
        var dt = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        this.gameInstance.increasePlayTime(dt);
        this.gameInstance.draw(this.ctx, dt);
        requestAnimationFrame(this.animate.bind(this));
      }
    }
  }]);

  return GameView;
}();



/***/ }),

/***/ "./js/health.js":
/*!**********************!*\
  !*** ./js/health.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Health; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Health =
/*#__PURE__*/
function () {
  function Health(decay, gain, gameInstance, gameView) {
    _classCallCheck(this, Health);

    this.gameInstance = gameInstance;
    this.gameView = gameView;
    this.value = 100;
    this.decay = decay;
    this.gain = gain; //Functions

    this.miss = this.miss.bind(this);
    this.perfect = this.perfect.bind(this);
    this.good = this.good.bind(this);
    this.poor = this.poor.bind(this);
    this.update = this.update.bind(this);
    this.outlineHP = this.outlineHP.bind(this);
    this.draw = this.draw.bind(this);
  }

  _createClass(Health, [{
    key: "miss",
    value: function miss() {
      // if (this.cooldown = true) {
      //     this.cooldown = false;
      //     let that = this;
      //     setTimeout(() => that.cooldown = true, 1)
      // }
      this.value = this.value - 6;
    }
  }, {
    key: "perfect",
    value: function perfect() {
      this.value = this.value + 10;
    }
  }, {
    key: "good",
    value: function good() {
      this.value = this.value + 5;
    }
  }, {
    key: "poor",
    value: function poor() {
      this.value = this.value + 2;
    }
  }, {
    key: "update",
    value: function update() {
      this.value -= this.decay;

      if (this.value <= 0) {
        this.gameView.stop();
      }

      if (this.value > 100) {
        this.value = 100;
      }
    }
  }, {
    key: "outlineHP",
    value: function outlineHP(ctx) {
      ctx.beginPath();

      if (this.value > 100) {
        this.value = 100;
      }

      var calcCurrentHP = this.gameInstance.canvas.width * 0.5 * (this.value / 100);
      var currentHP;

      if (calcCurrentHP <= 0) {
        currentHP = 0;
      } else {
        currentHP = calcCurrentHP;
      }

      ctx.rect(20, 20, currentHP, 20);
      ctx.closePath();
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.update();
      this.outlineHP(ctx); //Color the damn thing

      var grd = ctx.createLinearGradient(0, 0, this.gameInstance.canvas.width * 0.5, 0);
      grd.addColorStop(0.000, 'rgba(238, 181, 255, 1.000)');
      grd.addColorStop(0.495, 'rgba(191, 241, 255, 1.000)');
      grd.addColorStop(1.000, 'rgba(247, 252, 184, 1.000)');
      ctx.fillStyle = grd;
      ctx.fill();
    }
  }]);

  return Health;
}();



/***/ }),

/***/ "./js/orbs.js":
/*!********************!*\
  !*** ./js/orbs.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Orb; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./js/constants.js");
/* harmony import */ var _health__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health */ "./js/health.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Orb =
/*#__PURE__*/
function () {
  function Orb(centerX, centerY, circleRadius, color, label, ringRadius, timer, game, callback) {
    _classCallCheck(this, Orb);

    //Variables
    this.centerX = centerX;
    this.centerY = centerY;
    this.circleRadius = circleRadius;
    this.initialRingRadius = circleRadius;
    this.testRadius = circleRadius;
    this.color = color;
    this.label = label;
    this.ringRadius = ringRadius;
    this.timer = timer;
    this.alpha = 0.7;
    this.alphaPerFrame = timer > 1 ? 0.04 : 0.08;
    this.growthPerFrame = circleRadius * 3 / circleRadius;
    this.active = 'active';
    this.frame = 0;
    this.time = 0;
    this.game = game;
    this.path;
    this.callback = callback;
    this.expiring = false; //Functions

    this.timerSize = this.timerSize.bind(this);
    this.activeOrb = this.activeOrb.bind(this);
    this.expireOrb = this.expireOrb.bind(this);
    this.draw = this.draw.bind(this);
    this.expandRadiusFadeOut = this.expandRadiusFadeOut.bind(this);
    this.checkActive = this.checkActive.bind(this);
  } //Timer Ring: Shows time remaining before orb expires. Decreases in size closer to expiration.
  //IMPORTANT: ringRadius is the ADDITIONAL radius added on to circle radius. newRingRadius is circleRadius + ringRadius


  _createClass(Orb, [{
    key: "timerSize",
    value: function timerSize(dt) {
      this.ringRadius = this.ringRadius - this.initialRingRadius / this.timer * dt * 3;

      if (this.ringRadius < 0) {
        this.ringRadius = 0;
      }

      var newRingRadius = this.circleRadius + this.ringRadius;
      return newRingRadius;
    }
  }, {
    key: "expandRadiusFadeOut",
    value: function expandRadiusFadeOut() {
      this.circleRadius = this.circleRadius + this.growthPerFrame;
      this.alpha = this.alpha - this.alphaPerFrame;

      if (this.alpha < 0) {
        this.alpha = 0;
      }
    }
  }, {
    key: "checkActive",
    value: function checkActive() {
      if (this.ringRadius < 1 && !this.expiring) {
        this.expiring = true;
        this.active = 'expire';
        this.game.makeClickable();
        this.game.expireOrbPointsReduction();
      }
    }
  }, {
    key: "expireOrb",
    value: function expireOrb(ctx, dt) {
      //Circle
      ctx.beginPath();
      this.expandRadiusFadeOut();
      var grd = ctx.createRadialGradient(this.centerX, this.centerY, this.circleRadius, this.centerX, this.centerY, 30);
      _constants_js__WEBPACK_IMPORTED_MODULE_0__[this.color].circleLight(grd, this.alpha);
      _constants_js__WEBPACK_IMPORTED_MODULE_0__[this.color].circleDark(grd, this.alpha);
      ctx.arc(this.centerX, this.centerY, this.circleRadius, 0, 2 * Math.PI);
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'rgba(233, 233, 233, ' + this.alpha + ')';
      ctx.stroke();
      ctx.save();
      ctx.closePath();
    }
  }, {
    key: "activeOrb",
    value: function activeOrb(ctx, dt) {
      //Test Code
      // this.frame += 1;
      // this.time += dt;
      //Timer Animation
      ctx.beginPath();
      ctx.arc(this.centerX, this.centerY, this.timerSize(dt), 0, 2 * Math.PI);
      ctx.lineWidth = 5;
      var grd2 = ctx.createLinearGradient(50, 0, 0, 220);
      _constants_js__WEBPACK_IMPORTED_MODULE_0__[this.color].timerLight(grd2);
      _constants_js__WEBPACK_IMPORTED_MODULE_0__[this.color].timerDark(grd2);
      ctx.strokeStyle = grd2;
      ctx.stroke();
      ctx.closePath(); // //Circle

      ctx.beginPath();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.arc(this.centerX, this.centerY, this.circleRadius, 0, 2 * Math.PI);
      var grd = ctx.createRadialGradient(this.centerX, this.centerY, this.circleRadius, this.centerX, this.centerY, 20);
      _constants_js__WEBPACK_IMPORTED_MODULE_0__[this.color].circleLight(grd, this.alpha);
      _constants_js__WEBPACK_IMPORTED_MODULE_0__[this.color].circleDark(grd, this.alpha);
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.lineWidth = 10;
      ctx.strokeStyle = _constants_js__WEBPACK_IMPORTED_MODULE_0__[this.color].circleEdge;
      ctx.stroke();
      ctx.save();
      ctx.closePath(); //Testing
      //Text font, color, and positioning

      ctx.font = "30px Sans-Serif";
      ctx.fillStyle = 'white';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillText(this.label, this.centerX, this.centerY);
    }
  }, {
    key: "draw",
    value: function draw(ctx, dt) {
      this.checkActive(); //It never reahes zero since it subtracts a percentage of its current radius

      if (this.active != 'expire') {
        this.activeOrb(ctx, dt); //TESTING TOP
        //TESTING BOTTOM
      } else {
        // alert(`${this.frame} in ${this.time}s`)
        this.expireOrb(ctx);
      }

      if (this.alpha === 0) {
        this.game.removeObject();

        if (this.callback === true) {
          this.game.generateManyOrbs();
        }
      }
    } // draw (ctx, dt, canvas) {
    //     //Create Arc
    //     ctx.beginPath();
    //     const length = this.circleRadius * 2
    //     const lineThickness = length + 5
    //     ctx.lineWidth = lineThickness;
    //     ctx.lineCap = "round";
    //     CONSTANT.shortArc.bottomRight.translateBottom(ctx, length);
    //     CONSTANT.shortArc.bottomRight.createArc(ctx, this.centerX, this.centerY, length)
    //     ctx.strokeStyle = '#e9e9e9';
    //     ctx.stroke();
    //     ctx.lineWidth = 95;
    //     ctx.strokeStyle = '#16151f';
    //     ctx.stroke();
    //     ctx.setTransform(1, 0, 0, 1, 0, 0);
    //     ctx.closePath();
    // }

  }]);

  return Orb;
}();



/***/ }),

/***/ "./js/particle.js":
/*!************************!*\
  !*** ./js/particle.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Particle; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Particle =
/*#__PURE__*/
function () {
  function Particle(mouseX, mouseY, radius, color) {
    _classCallCheck(this, Particle);

    this.mouseX = mouseX;
    this.mouseY = mouseY;
    this.radius = radius;
    this.color = color;
    this.radians = 0;
    this.velocity = 0.5; //Functions

    this.update = this.update.bind(this);
    this.draw = this.draw.bind(this);
  }

  _createClass(Particle, [{
    key: "update",
    value: function update(ctx) {
      this.radians += this.velocity;
      this.x = Math.cos(this.radians) * this.radius;
      this.y = Math.sin(this.radians) * this.radius;
      this.draw(ctx);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.fillstyle = 'white';
      ctx.arc(this.x, this.y, 50, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();
    }
  }]);

  return Particle;
}();



/***/ }),

/***/ "./js/stats.js":
/*!*********************!*\
  !*** ./js/stats.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stats =
/*#__PURE__*/
function () {
  function Stats(gameInstance, gameView) {
    _classCallCheck(this, Stats);

    this.gameInstance = gameInstance;
    this.gameView = gameView;
    this.numPerfect = 0;
    this.numGood = 0;
    this.numPoor = 0;
    this.numMiss = 0;
    this.points = 0; //Functions

    this.updateHitPercentage = this.updateHitPercentage.bind(this);
    this.updatePoints = this.updatePoints.bind(this);
    this.updatePerfect = this.updatePerfect.bind(this);
    this.updateGood = this.updateGood.bind(this);
    this.updatePoor = this.updatePoor.bind(this);
    this.updateMiss = this.updateMiss.bind(this);
    this.outlinePoints = this.outlinePoints.bind(this);
    this.outlineStats = this.outlineStats.bind(this);
    this.outlineHitPercentage = this.outlineHitPercentage.bind(this);
    this.draw = this.draw.bind(this);
  }

  _createClass(Stats, [{
    key: "updateHitPercentage",
    value: function updateHitPercentage() {
      var hitPercentage = 100 * ((this.numPerfect + this.numGood + this.numPoor + 0) / (this.numPerfect + this.numGood + this.numPoor + this.numMiss + 0));
      var rounded = Math.floor(hitPercentage * 100) / 100;
      return rounded;
    }
  }, {
    key: "updatePoints",
    value: function updatePoints(points) {
      this.points += points;
    }
  }, {
    key: "updatePerfect",
    value: function updatePerfect(number) {
      this.numPerfect += number;
    }
  }, {
    key: "updateGood",
    value: function updateGood(number) {
      this.numGood += number;
    }
  }, {
    key: "updatePoor",
    value: function updatePoor(number) {
      this.numPoor += number;
    }
  }, {
    key: "updateMiss",
    value: function updateMiss(number) {
      this.numMiss += number;
    }
  }, {
    key: "outlinePoints",
    value: function outlinePoints(ctx) {
      ctx.beginPath();
      ctx.font = "120px Teko";
      ctx.fillStyle = 'white';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'right';
      ctx.fillText("000".concat(this.points), this.gameInstance.canvas.width, 75);
      ctx.closePath();
    }
  }, {
    key: "outlineStats",
    value: function outlineStats(ctx) {
      ctx.beginPath();
      ctx.font = "90px Open Sans";
      ctx.fillStyle = 'white';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillText("".concat(this.numPerfects, " Perfects"), this.gameInstance.canvas.width - 200, 0);
      ctx.closePath();
    }
  }, {
    key: "outlineHitPercentage",
    value: function outlineHitPercentage(ctx) {
      ctx.beginPath();
      ctx.font = "50px Teko";
      ctx.fillStyle = 'white';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'right';
      var accuracy = this.updateHitPercentage() >= 0 ? this.updateHitPercentage() : 0;
      ctx.fillText("".concat(accuracy, "%"), this.gameInstance.canvas.width, 135);
      ctx.fillText("Perfect: ".concat(this.numPerfect), this.gameInstance.canvas.width, 205);
      ctx.fillText("Good: ".concat(this.numGood), this.gameInstance.canvas.width, 255);
      ctx.fillText("Poor: ".concat(this.numPoor), this.gameInstance.canvas.width, 305);
      ctx.fillText("Miss: ".concat(this.numMiss), this.gameInstance.canvas.width, 355);
      ctx.closePath();
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.updatePoints(1);
      this.outlinePoints(ctx);
      this.outlineHitPercentage(ctx);
    }
  }]);

  return Stats;
}();



/***/ }),

/***/ "./node_modules/animejs/lib/anime.es.js":
/*!**********************************************!*\
  !*** ./node_modules/animejs/lib/anime.es.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * anime.js v3.1.0
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; }
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.round(t * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
    Bounce: function () { return function (t) {
      var pow2, b = 4;
      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void 0 ) amplitude = 1;
      if ( period === void 0 ) period = .5;

      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return (t === 0 || t === 1) ? t : 
          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width / viewBox[2],
    h: height / viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  switch (path.property) {
    case 'x': return (p.x - svg.x) * svg.w;
    case 'y': return (p.y - svg.y) * svg.h;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];
var pausedInstances = [];
var raf;

var engine = (function () {
  function play() { 
    raf = requestAnimationFrame(step);
  }
  function step(t) {
    var activeInstancesLength = activeInstances.length;
    if (activeInstancesLength) {
      var i = 0;
      while (i < activeInstancesLength) {
        var activeInstance = activeInstances[i];
        if (!activeInstance.paused) {
          activeInstance.tick(t);
        } else {
          var instanceIndex = activeInstances.indexOf(activeInstance);
          if (instanceIndex > -1) {
            activeInstances.splice(instanceIndex, 1);
            activeInstancesLength = activeInstances.length;
          }
        }
        i++;
      }
      play();
    } else {
      raf = cancelAnimationFrame(raf);
    }
  }
  return play;
})();

function handleVisibilityChange() {
  if (document.hidden) {
    activeInstances.forEach(function (ins) { return ins.pause(); });
    pausedInstances = activeInstances.slice(0);
    anime.running = activeInstances = [];
  } else {
    pausedInstances.forEach(function (ins) { return ins.play(); });
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    if (!raf) { engine(); }
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargets(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for (var c = children.length; c--;) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);
      if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
    }
    if (!animations.length && !children.length) { instance.pause(); }
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.1.0';
anime.speed = 1;
anime.running = activeInstances;
anime.remove = removeTargets;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

/* harmony default export */ __webpack_exports__["default"] = (anime);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map