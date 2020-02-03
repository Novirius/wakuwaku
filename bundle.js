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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./js/constants.js");
/* harmony import */ var _orbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orbs */ "./js/orbs.js");
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_view.js */ "./js/game_view.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./js/game.js");



 // Create the canvas

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("game-canvas");
  var ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = 'destination-over';
  canvas.width = window.innerWidth * 0.85;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  var game = new _game_view_js__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, ctx); // game.start();

  var welcomeSplash = document.getElementById('welcome-splash');
  var playButton = document.getElementById('play-button');
  playButton.addEventListener('click', function () {
    welcomeSplash.classList.add("hide");
    setTimeout(function () {
      return game.start();
    }, 3000);
  });
}); // addEventListener('mousedown', e => console.log(e))
// addEventListener('mousemove', e => console.log(e))
// addEventListener('mousedown', e => console.log(e))

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Game =
/*#__PURE__*/
function () {
  function Game(canvas, ctx) {
    _classCallCheck(this, Game);

    //Game board
    this.canvas = canvas;
    this.ctx = ctx;
    this.playTime = 0; //Mousemove tracker

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

    this.health = new _health__WEBPACK_IMPORTED_MODULE_3__["default"](1 / 600, 5, this);
    this.objects = []; //Function

    this.bindEventListener = this.bindEventListener.bind(this);
    this.draw = this.draw.bind(this);
    this.increasePlayTime = this.increasePlayTime.bind(this);
    this.removeObject = this.removeObject.bind(this);
    this.generateOrb = this.generateOrb.bind(this);
  }

  _createClass(Game, [{
    key: "increasePlayTime",
    value: function increasePlayTime(dt) {
      // console.log(dt)
      this.playTime += dt;
    }
  }, {
    key: "removeObject",
    value: function removeObject() {
      this.objects.shift();
      this.clickable = true;
    }
  }, {
    key: "generateManyOrbs",
    value: function generateManyOrbs() {
      //Select random color
      var randomColorIndex = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_2__["COLORS_ARRAY"].length);
      var randomColor = _constants__WEBPACK_IMPORTED_MODULE_2__["COLORS_ARRAY"][randomColorIndex]; //Select random of numbers to display

      var randomRange = Math.floor(Math.random() * 7) + 1;
      var timer = 5;
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
      var _this = this;

      //Select random Arc
      var randomShortArcIndex = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_2__["SHORT_ARCS_ARRAY"].length);
      var randomShortArc = _constants__WEBPACK_IMPORTED_MODULE_2__["SHORT_ARCS_ARRAY"][randomShortArcIndex]; //Create Orb

      var orb = new _orbs__WEBPACK_IMPORTED_MODULE_0__["default"](Math.random() * (this.maxWidth - this.minWidth) + this.minWidth, Math.random() * (this.maxHeight - this.minHeight) + this.minHeight, this.orbSize, color, number, this.ringSize, timer, this, callback);
      setTimeout(function () {
        return _this.objects.push(orb);
      }, (number - 1) * (timer * 500));
    }
  }, {
    key: "bindEventListener",
    value: function bindEventListener() {
      var _this2 = this;

      this.canvas.addEventListener('mousemove', function (event) {
        _this2.mousePosX = event.clientX;
        _this2.mousePosY = event.clientY;
      });
      window.addEventListener("keydown", function (event) {
        var hitSound = new Audio();
        hitSound.src = "assets/music/taiko.wav";
        hitSound.loop = false;
        var missSound = new Audio();
        missSound.src = "assets/music/whoosh.mp3";
        missSound.loop = false;

        switch (event.keyCode) {
          case 88:
            if (_this2.objects[0] instanceof _orbs__WEBPACK_IMPORTED_MODULE_0__["default"]) {
              if (Math.sqrt((_this2.mousePosX - _this2.objects[0].centerX) * (_this2.mousePosX - _this2.objects[0].centerX) + (_this2.mousePosY - _this2.objects[0].centerY) * (_this2.mousePosY - _this2.objects[0].centerY)) < _this2.objects[0].circleRadius) {
                if (_this2.objects[0].ringRadius < _this2.objects[0].initialRingRadius * 0.1 && _this2.clickable) {
                  _this2.clickable = false;
                  _this2.objects[0].active = 'expire';
                  hitSound.play(); //perfect points
                } else if (_this2.objects[0].ringRadius < _this2.objects[0].initialRingRadius * 0.4 && _this2.clickable) {
                  _this2.clickable = false;
                  _this2.objects[0].active = 'expire';
                  hitSound.play(); //Good points
                } else if (_this2.objects[0].ringRadius < _this2.objects[0].initialRingRadius * 0.6 && _this2.clickable) {
                  _this2.clickable = false;
                  _this2.objects[0].active = 'expire';
                  hitSound.play(); //Poor points
                } else if (_this2.objects[0].ringRadius < _this2.objects[0].initialRingRadius * 1.6 && _this2.clickable) {
                  _this2.clickable = false;
                  missSound.play(); //No points
                } else {}
              }
            } // alert(`${this.mousePosX} is x, ${this.mousePosY} is y`)


            break;

          case 82:
            _this2.generateOrb();

            console.log('testtop');
            console.log("".concat(_this2.playTime));
            console.log('testbottom');

          default:
            break;
        }
      });
    }
  }, {
    key: "update",
    value: function update(ctx, dt) {}
  }, {
    key: "draw",
    value: function draw(ctx, dt) {
      // let particle1 = new Particle(this.mousePosX, this.mousePosY, 5, 'yellow')
      // particle1.update(ctx);
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
      } //Draw cursor

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
    this.gameInstance = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, ctx);
    this.lastTime = new Date();
    this.requestId = undefined;
    this.orb = new _orbs__WEBPACK_IMPORTED_MODULE_0__["default"](Math.random() * (this.maxWidth - this.minWidth) + this.minWidth, Math.random() * (this.maxHeight - this.minHeight) + this.minHeight, 50, _constants__WEBPACK_IMPORTED_MODULE_2__["BLUE"], 1, 150, 0.20); // this.orb = new Orb(500, 500, 50, 'RED', 2, 150, 0.5);

    this.orb2 = new _orbs__WEBPACK_IMPORTED_MODULE_0__["default"](Math.random() * (this.maxWidth - this.minWidth) + this.minWidth, Math.random() * (this.maxHeight - this.minHeight) + this.minHeight, 50, _constants__WEBPACK_IMPORTED_MODULE_2__["BLUE"], 2, 150, 0.2);
    this.orb3 = new _orbs__WEBPACK_IMPORTED_MODULE_0__["default"](Math.random() * (this.maxWidth - this.minWidth) + this.minWidth, Math.random() * (this.maxHeight - this.minHeight) + this.minHeight, 50, _constants__WEBPACK_IMPORTED_MODULE_2__["BLUE"], 3, 150, 0.2);
    this.frame = 0;
  }

  _createClass(GameView, [{
    key: "start",
    value: function start() {
      if (!this.requestId) {
        this.gameInstance.bindEventListener();
        this.gameInstance.generateManyOrbs(); // this.gameInstance.beginTimer();
        // this.gameInstance.resetScene();
        // this.gameInstance.playMusic();

        this.requestId = requestAnimationFrame(this.animate.bind(this));
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.requestId) {
        // this.gameInstance.bindEventListener(this.canvas);
        // this.gameInstance.beginTimer();
        // this.gameInstance.resetScene();
        // this.gameInstance.stopMusic();
        cancelAnimationFrame(this.requestID);
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var currentTime = Date.now();
      var dt = (currentTime - this.lastTime) / 1000;
      this.lastTime = currentTime;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.gameInstance.increasePlayTime(dt);
      this.gameInstance.draw(this.ctx, dt); // this.game.mouseStep(delta);

      requestAnimationFrame(this.animate.bind(this));
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
  function Health(decay, gain, gameInstance) {
    _classCallCheck(this, Health);

    this.gameInstance = gameInstance;
    this.gameView = this.gameView;
    this.value = 100;
    this.decay = decay;
    this.gain = gain;
  }

  _createClass(Health, [{
    key: "miss",
    value: function miss() {
      this.value = this.value - 5;
    }
  }, {
    key: "gain",
    value: function gain() {
      this.value = this.value + 5;
    }
  }, {
    key: "update",
    value: function update() {
      this.value -= this.decay;
    }
  }, {
    key: "outline",
    value: function outline() {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.rect(20, 20, 150, 100);
      ctx.closePath();
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.outline();
      ctx.fillStyle = 'red';
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
    this.alphaPerFrame = 0.04;
    this.growthPerFrame = circleRadius * 3 / circleRadius;
    this.active = 'active';
    this.frame = 0;
    this.time = 0;
    this.game = game;
    this.path;
    this.callback = callback; //Functions

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
      if (this.ringRadius === 0) {
        this.active = 'expire';
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



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map