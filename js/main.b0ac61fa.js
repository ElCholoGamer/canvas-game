/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 894:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var vertical_bone_1 = __importDefault(__webpack_require__(907));

var attack_1 = __importDefault(__webpack_require__(453));

var game_mode_1 = __importDefault(__webpack_require__(468));

var BoneCurve = function (_super) {
  __extends(BoneCurve, _super);

  function BoneCurve(game) {
    var _this = _super.call(this, game, {
      duration: 300,
      mode: game_mode_1["default"].RED
    }) || this;

    _this.GAP_SIZE = 75;
    _this.BONE_SPEED = 6;
    _this.ATTACKS = [0, 0, 20, 40, 60, 70, 80, 80, 80, 80, 70, 50, 30, 10, -10, -10, 0, 20, 40, 50, 30, 10, -10, -30, -40, -50, -50, -50, -40, -60, -60, -60];
    _this.timer = null;
    _this.boneIndex = 0;
    return _this;
  }

  BoneCurve.prototype.start = function () {
    var _this = this;

    this.timer = this.game.scheduler.scheduleInterval(function () {
      return _this.nextBone();
    }, 8);
  };

  BoneCurve.prototype.nextBone = function () {
    var center = this.game.canvas.height / 2 - this.ATTACKS[this.boneIndex];
    var x = this.game.canvas.width;
    var bottomBone = this.game.instantiate(vertical_bone_1["default"], x, center + this.GAP_SIZE / 2);
    bottomBone.speed = -this.BONE_SPEED;
    var topBone = this.game.instantiate(vertical_bone_1["default"], x, center - bottomBone.HEIGHT - this.GAP_SIZE / 2);
    topBone.speed = -this.BONE_SPEED;
    this.boneIndex++;
  };

  BoneCurve.prototype.stop = function () {
    if (this.timer) {
      this.game.scheduler.cancelInterval(this.timer);
    }
  };

  return BoneCurve;
}(attack_1["default"]);

exports.default = BoneCurve;

/***/ }),

/***/ 309:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var horizontal_bone_1 = __importDefault(__webpack_require__(161));

var attack_1 = __importDefault(__webpack_require__(453));

var game_mode_1 = __importDefault(__webpack_require__(468));

var BoneElevator = function (_super) {
  __extends(BoneElevator, _super);

  function BoneElevator(game) {
    var _this = _super.call(this, game, {
      duration: 600,
      mode: game_mode_1["default"].RED
    }) || this;

    _this.BONE_SPEED = 3.5;
    _this.timer = null;
    return _this;
  }

  BoneElevator.prototype.start = function () {
    var _this = this;

    this.timer = this.game.scheduler.scheduleInterval(function () {
      return _this.createBones();
    }, 40);
  };

  BoneElevator.prototype.createBones = function () {
    var _a = this.game.canvas,
        width = _a.width,
        height = _a.height;
    var bottomBone = this.game.instantiate(horizontal_bone_1["default"], 0, height);
    bottomBone.x = width / 2 - bottomBone.WIDTH;
    bottomBone.speed = -this.BONE_SPEED;
    var topBone = this.game.instantiate(horizontal_bone_1["default"], width / 2, -bottomBone.HEIGHT);
    topBone.speed = this.BONE_SPEED;
  };

  BoneElevator.prototype.stop = function () {
    if (this.timer) {
      this.game.scheduler.cancelInterval(this.timer);
    }
  };

  return BoneElevator;
}(attack_1["default"]);

exports.default = BoneElevator;

/***/ }),

/***/ 358:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var vertical_bone_1 = __importDefault(__webpack_require__(907));

var attack_1 = __importDefault(__webpack_require__(453));

var game_mode_1 = __importDefault(__webpack_require__(468));

var BoneGap = function (_super) {
  __extends(BoneGap, _super);

  function BoneGap(game) {
    var _this = _super.call(this, game, {
      duration: 300,
      mode: game_mode_1["default"].BLUE
    }) || this;

    _this.BONE_SPEED = 5;
    _this.timer = null;
    return _this;
  }

  BoneGap.prototype.start = function () {
    var _this = this;

    this.timer = this.game.scheduler.scheduleInterval(function () {
      return _this.createBones();
    }, 45);
  };

  BoneGap.prototype.createBones = function () {
    var topPosition = 0;
    var bottomPosition = this.game.canvas.height - 40;
    var topLeft = this.game.instantiate(vertical_bone_1["default"], 0, topPosition);
    topLeft.speed = this.BONE_SPEED;
    topLeft.x = -topLeft.WIDTH;
    var bottomLeft = this.game.instantiate(vertical_bone_1["default"], topLeft.x, bottomPosition);
    bottomLeft.speed = this.BONE_SPEED;
    var leftSide = this.game.canvas.width;
    var rightTop = this.game.instantiate(vertical_bone_1["default"], leftSide, topPosition);
    rightTop.speed = -this.BONE_SPEED;
    var bottomRight = this.game.instantiate(vertical_bone_1["default"], leftSide, bottomPosition);
    bottomRight.speed = -this.BONE_SPEED;
  };

  BoneGap.prototype.stop = function () {
    if (this.timer) {
      this.game.scheduler.cancelInterval(this.timer);
    }
  };

  return BoneGap;
}(attack_1["default"]);

exports.default = BoneGap;

/***/ }),

/***/ 56:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var game_1 = __importDefault(__webpack_require__(953));

var bone_elevator_1 = __importDefault(__webpack_require__(309));

var horizontal_bone_png_1 = __importDefault(__webpack_require__(340));

var vertical_bone_png_1 = __importDefault(__webpack_require__(567));

var heart_png_1 = __importDefault(__webpack_require__(334));

var bone_gap_1 = __importDefault(__webpack_require__(358));

var bone_curve_1 = __importDefault(__webpack_require__(894));

__webpack_require__(985);

Math.clamp = function (n, min, max) {
  return Math.max(min, Math.min(n, max));
};

var canvas = document.getElementById('game');

canvas.oncontextmenu = function (e) {
  e.preventDefault();
  e.stopPropagation();
};

var game = new game_1["default"](canvas);
game.addAttack(bone_elevator_1["default"]);
game.addAttack(bone_gap_1["default"]);
game.addAttack(bone_curve_1["default"]);

(function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, game.sprites.load('heart', heart_png_1["default"])];

        case 1:
          _a.sent();

          return [4, game.sprites.load('horizontalBone', horizontal_bone_png_1["default"])];

        case 2:
          _a.sent();

          return [4, game.sprites.load('verticalBone', vertical_bone_png_1["default"])];

        case 3:
          _a.sent();

          game.start();
          return [2];
      }
    });
  });
})();

/***/ }),

/***/ 140:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var game_object_1 = __importDefault(__webpack_require__(975));

var tag_1 = __importDefault(__webpack_require__(233));

var Bone = function (_super) {
  __extends(Bone, _super);

  function Bone(game) {
    var _this = _super.call(this, game, {
      tag: tag_1["default"].ENEMY
    }) || this;

    _this.speed = 0;
    return _this;
  }

  Bone.prototype.tick = function () {
    this.move();
    var bounds = this.getBounds();
    var p = this.game.player;

    if (p === null || p === void 0 ? void 0 : p.getBounds().collide(bounds, 3)) {
      p.hit();
    }
  };

  return Bone;
}(game_object_1["default"]);

exports.default = Bone;

/***/ }),

/***/ 161:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var rect_bounds_1 = __importDefault(__webpack_require__(31));

var bone_1 = __importDefault(__webpack_require__(140));

var HorizontalBone = function (_super) {
  __extends(HorizontalBone, _super);

  function HorizontalBone(game) {
    var _this = _super.call(this, game) || this;

    _this.WIDTH = 200;
    var sprite = game.sprites.get('horizontalBone');
    if (!sprite) throw new Error('Horizontal bone sprite missing');
    _this.sprite = sprite;
    _this.HEIGHT = sprite.height * (_this.WIDTH / sprite.width);
    return _this;
  }

  HorizontalBone.prototype.move = function () {
    this.y += this.speed;

    if (this.y < -this.HEIGHT && this.speed < 0 || this.y > this.game.canvas.height && this.speed > 0) {
      this.destroy();
    }
  };

  HorizontalBone.prototype.render = function (ctx) {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.sprite, this.x, this.y, this.WIDTH, this.HEIGHT);
  };

  HorizontalBone.prototype.getBounds = function () {
    return new rect_bounds_1["default"](this.x, this.y, this.WIDTH, this.HEIGHT);
  };

  return HorizontalBone;
}(bone_1["default"]);

exports.default = HorizontalBone;

/***/ }),

/***/ 176:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var game_object_1 = __importDefault(__webpack_require__(975));

var hurt_mp3_1 = __importDefault(__webpack_require__(699));

var rect_bounds_1 = __importDefault(__webpack_require__(31));

var game_mode_1 = __importDefault(__webpack_require__(468));

var Player = function (_super) {
  __extends(Player, _super);

  function Player(game) {
    var _this = _super.call(this, game, {
      layer: 10
    }) || this;

    _this.SPEED = 4;
    _this.SIZE = 25;
    _this.hurtAudio = new Audio(hurt_mp3_1["default"]);
    _this.vulnerable = true;
    _this.transparent = false;
    _this.mode = game_mode_1["default"].RED;
    var _a = game.canvas,
        width = _a.width,
        height = _a.height;
    _this.x = width / 2 - _this.SIZE / 2;
    _this.y = height / 2 - _this.SIZE / 2;
    var heart = game.sprites.get('heart');
    if (!heart) throw new Error('Heart sprite missing');
    _this.sprite = heart;
    return _this;
  }

  Player.prototype.tick = function () {
    this.mode.controller.tick(this);
  };

  Player.prototype.hit = function () {
    var _this = this;

    if (!this.vulnerable) return;
    this.vulnerable = false;
    this.transparent = true;
    this.hurtAudio.play();
    var scheduler = this.game.scheduler;
    var id = scheduler.scheduleInterval(function () {
      _this.transparent = !_this.transparent;
    }, 10);
    scheduler.schedule(function () {
      scheduler.cancelInterval(id);
      _this.vulnerable = true;
      _this.transparent = false;
    }, 60);
  };

  Player.prototype.render = function (ctx) {
    ctx.imageSmoothingEnabled = false;
    ctx.filter = "hue-rotate(" + this.mode.hue + "deg)";
    if (this.transparent) ctx.globalAlpha = 0.5;
    ctx.drawImage(this.sprite, this.x, this.y, this.SIZE, this.SIZE);
    ctx.filter = 'none';
    ctx.globalAlpha = 1;
  };

  Player.prototype.getBounds = function () {
    return new rect_bounds_1["default"](this.x, this.y, this.SIZE, this.SIZE);
  };

  return Player;
}(game_object_1["default"]);

exports.default = Player;

/***/ }),

/***/ 907:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var rect_bounds_1 = __importDefault(__webpack_require__(31));

var bone_1 = __importDefault(__webpack_require__(140));

var VerticalBone = function (_super) {
  __extends(VerticalBone, _super);

  function VerticalBone(game) {
    var _this = _super.call(this, game) || this;

    _this.HEIGHT = 200;
    var sprite = game.sprites.get('verticalBone');
    if (!sprite) throw new Error('Vertical bone sprite missing');
    _this.WIDTH = sprite.width * (_this.HEIGHT / sprite.height);
    _this.sprite = sprite;
    return _this;
  }

  VerticalBone.prototype.move = function () {
    this.x += this.speed;

    if (this.x < -this.WIDTH && this.speed < 0 || this.x > this.game.canvas.width && this.speed > 0) {
      this.destroy();
    }
  };

  VerticalBone.prototype.render = function (ctx) {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.sprite, this.x, this.y, this.WIDTH, this.HEIGHT);
  };

  VerticalBone.prototype.getBounds = function () {
    return new rect_bounds_1["default"](this.x, this.y, this.WIDTH, this.HEIGHT);
  };

  return VerticalBone;
}(bone_1["default"]);

exports.default = VerticalBone;

/***/ }),

/***/ 453:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Attack = function () {
  function Attack(game, options) {
    this.game = game;
    this.duration = options.duration;
    this.mode = options.mode;
  }

  return Attack;
}();

exports.default = Attack;

/***/ }),

/***/ 953:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var player_1 = __importDefault(__webpack_require__(176));

var control_manager_1 = __importDefault(__webpack_require__(312));

var scheduler_1 = __importDefault(__webpack_require__(12));

var sprite_manager_1 = __importDefault(__webpack_require__(574));

var Game = function () {
  function Game(canvas) {
    this.canvas = canvas;
    this._player = null;
    this.controls = new control_manager_1["default"]();
    this.scheduler = new scheduler_1["default"]();
    this.sprites = new sprite_manager_1["default"]();
    this.attacks = [];
    this._objects = [];
    this.update = this.update.bind(this);
  }

  Game.prototype.start = function () {
    var _this = this;

    var _a = this.canvas,
        width = _a.width,
        height = _a.height;
    this._player = this.instantiate(player_1["default"], width / 2, height / 2);
    var offset = this._player.SIZE / 2;
    this._player.x -= offset;
    this._player.y -= offset;
    requestAnimationFrame(this.update);
    this.scheduler.schedule(function () {
      return _this.nextAttack();
    }, 60);
  };

  Game.prototype.update = function () {
    this.scheduler.tick();

    for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
      var obj = _a[_i];
      obj.tick();
    }

    var _b = this.canvas,
        width = _b.width,
        height = _b.height;
    var ctx = this.canvas.getContext('2d');

    var sorted = this._objects.sort(function (a, b) {
      return (a.options.layer || 0) - (b.options.layer || 0);
    });

    ctx.clearRect(0, 0, width, height);

    for (var _c = 0, sorted_1 = sorted; _c < sorted_1.length; _c++) {
      var obj = sorted_1[_c];
      obj.render(ctx);
    }

    requestAnimationFrame(this.update);
  };

  Game.prototype.nextAttack = function () {
    var _this = this;

    if (!this.attacks.length || !this._player) return;
    var ctor = this.attacks[Math.floor(Math.random() * this.attacks.length)];
    var attack = new ctor(this);
    this._player.mode = attack.mode;
    attack.start();
    this.scheduler.schedule(function () {
      attack.stop();

      _this.scheduler.schedule(function () {
        return _this.nextAttack();
      }, 60);
    }, attack.duration);
  };

  Game.prototype.instantiate = function (ctor, x, y) {
    var args = [];

    for (var _i = 3; _i < arguments.length; _i++) {
      args[_i - 3] = arguments[_i];
    }

    var obj = new (ctor.bind.apply(ctor, __spreadArrays([void 0, this], args)))();
    obj.x = x;
    obj.y = y;

    this._objects.push(obj);

    return obj;
  };

  Game.prototype.addAttack = function (ctor) {
    this.attacks.push(ctor);
  };

  Game.prototype.removeObject = function (obj) {
    this._objects = this._objects.filter(function (o) {
      return o !== obj;
    });
  };

  Object.defineProperty(Game.prototype, "objects", {
    get: function get() {
      return this._objects;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Game.prototype, "player", {
    get: function get() {
      return this._player;
    },
    enumerable: false,
    configurable: true
  });
  return Game;
}();

exports.default = Game;

/***/ }),

/***/ 975:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var GameObject = function () {
  function GameObject(game, options) {
    if (options === void 0) {
      options = {};
    }

    this.game = game;
    this.options = options;
    this.x = 0;
    this.y = 0;
  }

  GameObject.prototype.destroy = function () {
    this.game.removeObject(this);
  };

  return GameObject;
}();

exports.default = GameObject;

/***/ }),

/***/ 31:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var RectBounds = function () {
  function RectBounds(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.endX = x + width;
    this.endY = y + height;
  }

  RectBounds.prototype.collide = function (rect, margin) {
    if ([this.x, this.y, this.endX, this.endY, rect.x, rect.y, rect.endX, rect.endY].includes(NaN)) {
      return false;
    }

    if (margin !== undefined) {
      var self = new RectBounds(this.x + margin, this.y + margin, this.width - margin * 2, this.height - margin * 2);
      var other = new RectBounds(rect.x + margin, rect.y + margin, rect.width - margin * 2, rect.height - margin * 2);
      return self.collide(other);
    }

    var isLeft = this.endX < rect.x;
    var isRight = this.x > rect.endX;
    var isAbove = this.endY < rect.y;
    var isBelow = this.y > rect.endY;
    return !isLeft && !isRight && !isAbove && !isBelow;
  };

  return RectBounds;
}();

exports.default = RectBounds;

/***/ }),

/***/ 233:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Tag;

(function (Tag) {
  Tag[Tag["PLAYER"] = 0] = "PLAYER";
  Tag[Tag["NEUTRAL"] = 1] = "NEUTRAL";
  Tag[Tag["ENEMY"] = 2] = "ENEMY";
})(Tag || (Tag = {}));

exports.default = Tag;

/***/ }),

/***/ 312:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var ControlManager = function () {
  function ControlManager() {
    var _this = this;

    this.keys = new Map();
    document.addEventListener('keydown', function (e) {
      return _this.handleKeyPress(e);
    });
    document.addEventListener('keyup', function (e) {
      return _this.handleKeyUp(e);
    });
    window.addEventListener('blur', function () {
      return _this.handleBlur();
    });
  }

  ControlManager.prototype.isKeyDown = function (key) {
    var _a;

    return (_a = this.keys.get(key)) !== null && _a !== void 0 ? _a : false;
  };

  ControlManager.prototype.handleKeyPress = function (e) {
    this.keys.set(e.key, true);
  };

  ControlManager.prototype.handleKeyUp = function (e) {
    this.keys.set(e.key, false);
  };

  ControlManager.prototype.handleBlur = function () {
    this.keys.clear();
  };

  return ControlManager;
}();

exports.default = ControlManager;

/***/ }),

/***/ 468:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var red_controller_1 = __importDefault(__webpack_require__(807));

var blue_controller_1 = __importDefault(__webpack_require__(710));

var GameMode = function () {
  function GameMode(hue, controller) {
    this.hue = hue;
    this.controller = controller;
  }

  GameMode.RED = new GameMode(0, new red_controller_1["default"]());
  GameMode.BLUE = new GameMode(240, new blue_controller_1["default"]());
  return GameMode;
}();

exports.default = GameMode;

/***/ }),

/***/ 730:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var ModeController = function () {
  function ModeController() {}

  return ModeController;
}();

exports.default = ModeController;

/***/ }),

/***/ 710:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var mode_controller_1 = __importDefault(__webpack_require__(730));

var BlueController = function (_super) {
  __extends(BlueController, _super);

  function BlueController() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.GRAVITY = 0.23;
    _this.JUMP_FORCE = 6;
    _this.MAX_JUMP_TICKS = 15;
    _this.verticalSpeed = 0;
    _this.grounded = false;
    _this.jumpTicksLeft = 0;
    return _this;
  }

  BlueController.prototype.tick = function (player) {
    var _a = player.game,
        controls = _a.controls,
        canvas = _a.canvas,
        SPEED = player.SPEED,
        SIZE = player.SIZE;
    var up = controls.isKeyDown('ArrowUp') || controls.isKeyDown('w');
    var left = controls.isKeyDown('ArrowLeft') || controls.isKeyDown('a');
    var right = controls.isKeyDown('ArrowRight') || controls.isKeyDown('d');
    if (left) player.x -= SPEED;
    if (right) player.x += SPEED;

    if (!this.grounded) {
      this.verticalSpeed += this.GRAVITY;
    }

    player.y += this.verticalSpeed;

    if (player.y >= canvas.height - SIZE) {
      this.grounded = true;
    }

    if (up) {
      if (this.grounded) {
        this.jumpTicksLeft = this.MAX_JUMP_TICKS;
        this.grounded = false;
      }

      if (this.jumpTicksLeft > 0) {
        this.verticalSpeed = -this.JUMP_FORCE;
        this.jumpTicksLeft--;
      }
    } else if (this.jumpTicksLeft > 0) {
      this.verticalSpeed = -(this.MAX_JUMP_TICKS - this.jumpTicksLeft) * 0.2;
      this.jumpTicksLeft = 0;
    }

    player.x = Math.clamp(player.x, 0, canvas.width - SIZE);
    player.y = Math.clamp(player.y, 0, canvas.height - SIZE);
  };

  return BlueController;
}(mode_controller_1["default"]);

exports.default = BlueController;

/***/ }),

/***/ 807:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var mode_controller_1 = __importDefault(__webpack_require__(730));

var RedController = function (_super) {
  __extends(RedController, _super);

  function RedController() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  RedController.prototype.tick = function (player) {
    var _a = player.game,
        controls = _a.controls,
        canvas = _a.canvas,
        SPEED = player.SPEED,
        SIZE = player.SIZE;
    var up = controls.isKeyDown('ArrowUp') || controls.isKeyDown('w');
    var left = controls.isKeyDown('ArrowLeft') || controls.isKeyDown('a');
    var down = controls.isKeyDown('ArrowDown') || controls.isKeyDown('s');
    var right = controls.isKeyDown('ArrowRight') || controls.isKeyDown('d');
    if (up) player.y -= SPEED;
    if (left) player.x -= SPEED;
    if (down) player.y += SPEED;
    if (right) player.x += SPEED;
    player.x = Math.clamp(player.x, 0, canvas.width - SIZE);
    player.y = Math.clamp(player.y, 0, canvas.height - SIZE);
  };

  return RedController;
}(mode_controller_1["default"]);

exports.default = RedController;

/***/ }),

/***/ 12:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Scheduler = function () {
  function Scheduler() {
    this.schedules = new Map();
    this.intervals = new Map();
    this._time = 0;
    this.taskID = 1;
  }

  Scheduler.prototype.tick = function () {
    this._time++;
    var tasks = Array.from(this.schedules.entries());

    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
      var _a = tasks_1[_i],
          id = _a[0],
          task = _a[1];
      if (this._time < task.runAt) continue;
      task.run();
      this.schedules["delete"](id);
    }

    var intervalTasks = Array.from(this.intervals.values());

    for (var _b = 0, intervalTasks_1 = intervalTasks; _b < intervalTasks_1.length; _b++) {
      var task = intervalTasks_1[_b];
      if (this._time < task.runAt) continue;
      task.run();
      task.runAt += task.interval;
    }
  };

  Scheduler.prototype.schedule = function (fn, ticks) {
    this.taskID++;
    var task = {
      run: fn,
      runAt: this._time + ticks
    };
    this.schedules.set(this.taskID, task);
    return this.taskID;
  };

  Scheduler.prototype.scheduleInterval = function (fn, initialDelay, interval) {
    this.taskID++;
    var task = {
      run: fn,
      interval: interval !== null && interval !== void 0 ? interval : initialDelay,
      runAt: this._time + initialDelay
    };
    this.intervals.set(this.taskID, task);
    return this.taskID;
  };

  Scheduler.prototype.cancelSchedule = function (id) {
    return this.schedules["delete"](id);
  };

  Scheduler.prototype.cancelInterval = function (id) {
    return this.intervals["delete"](id);
  };

  Object.defineProperty(Scheduler.prototype, "time", {
    get: function get() {
      return this._time;
    },
    enumerable: false,
    configurable: true
  });
  return Scheduler;
}();

exports.default = Scheduler;

/***/ }),

/***/ 574:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var SpriteManager = function () {
  function SpriteManager() {
    this.sprites = new Map();
  }

  SpriteManager.prototype.load = function (key, src) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var sprite = new Image();
      sprite.src = src;

      sprite.onload = function () {
        _this.sprites.set(key, sprite);

        resolve(sprite);
      };

      sprite.onerror = function (e) {
        return reject(e);
      };
    });
  };

  SpriteManager.prototype.get = function (key) {
    return this.sprites.get(key);
  };

  return SpriteManager;
}();

exports.default = SpriteManager;

/***/ }),

/***/ 334:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/canvas-game/assets/img/heart.png");

/***/ }),

/***/ 340:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/canvas-game/assets/img/horizontal-bone.png");

/***/ }),

/***/ 567:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/canvas-game/assets/img/vertical-bone.png");

/***/ }),

/***/ 699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/canvas-game/assets/sound/hurt.mp3");

/***/ }),

/***/ 985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(56);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.b0ac61fa.js.map