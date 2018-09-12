webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Open Music Archive Browser\n  </h1>\n  <img width=\"300\" src=\"http://www.openmusicarchive.org/projects/images/1/14/IMG_2824.jpg\">\n  <br>\n  {{performanceInfo}}\n  <br>\n  <textarea disabled style=\"border:none;resize:none\" rows=\"18\" cols=\"50\">{{texture}}</textarea>\n  <br>\n  <button (click)=\"downloadCurrentSoundObjects()\">Download current sound objects</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dymo_player__ = __webpack_require__("../../../../dymo-player/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dymo_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dymo_player__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jszip__ = __webpack_require__("../../../../jszip/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jszip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver_FileSaver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_file_saver_FileSaver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AppComponent = (function () {
    function AppComponent(apiService, http) {
        this.apiService = apiService;
        this.http = http;
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.player = new __WEBPACK_IMPORTED_MODULE_1_dymo_player__["DymoPlayer"]({ useWorkers: true, preloadBuffers: true,
                            scheduleAheadTime: 1, loadAheadTime: 1, loggingOn: false });
                        return [4 /*yield*/, this.player.init("https://raw.githubusercontent.com/dynamic-music/dymo-core/master/ontologies/")];
                    case 1:
                        _a.sent();
                        this.player.getPlayingDymoUris().subscribe(function (ds) { return _this.numPlayingDymos = ds.length; });
                        this.player.getAudioBank().getBufferCount().subscribe(function (n) { return _this.numLoadedBuffers = n; });
                        this.playCrackling();
                        this.playLiveTexture();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.playLiveTexture = function () {
        var _this = this;
        var live = this.apiService.onLiveTexture().subscribe(function (texture) { return __awaiter(_this, void 0, void 0, function () {
            var newUris, newUri, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.texture = texture;
                        return [4 /*yield*/, this.player.loadDymoFromString(texture)];
                    case 1:
                        newUris = (_d.sent()).dymoUris;
                        newUri = newUris[newUris.length - 1];
                        _b = (_a = console).log;
                        _c = ["LIVE"];
                        return [4 /*yield*/, this.player.getDymoManager().getStore().size()];
                    case 2:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        this.updatePerformanceInfo();
                        if (this.previousUri && this.player.isPlaying(this.previousUri)) {
                            this.player.transitionToUri(newUri, this.previousUri, 3);
                        }
                        else {
                            this.player.playUri(newUri); //, this.previousUri);
                        }
                        this.previousUri = newUri;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AppComponent.prototype.playTexture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.apiService.getTexture()];
                    case 1:
                        _a.texture = _b.sent();
                        return [4 /*yield*/, this.player.loadDymoFromString(this.texture)];
                    case 2:
                        _b.sent();
                        this.player.play();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.playCrackling = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.http.get('assets/crackling.json')
                    .subscribe(function (c) { return __awaiter(_this, void 0, void 0, function () {
                    var uri;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.player.loadDymoFromString(c.text())];
                            case 1:
                                uri = (_a.sent()).dymoUris[0];
                                this.player.playUri(uri);
                                this.previousUri = uri;
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.downloadCurrentSoundObjects = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var files, zip, folder_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.previousUri) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.player.getDymoManager().getStore().getAllSourcePaths()];
                    case 1:
                        files = _a.sent();
                        zip = new __WEBPACK_IMPORTED_MODULE_3_jszip__();
                        folder_1 = zip.folder("sound-objects");
                        return [4 /*yield*/, Promise.all(files.map(function (f) { return __awaiter(_this, void 0, void 0, function () {
                                var audio, name;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, fetch(f, { mode: 'cors' })];
                                        case 1:
                                            audio = _a.sent();
                                            name = f.slice(__WEBPACK_IMPORTED_MODULE_4_lodash__["lastIndexOf"](f, '/') + 1);
                                            if (audio.ok) {
                                                folder_1.file(name, audio.arrayBuffer());
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        zip.generateAsync({ type: "blob" }).then(function (content) {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_file_saver_FileSaver__["saveAs"])(content, "sound-objects.zip");
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.updatePerformanceInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, store, _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        info = [];
                        store = this.player.getDymoManager().getStore();
                        _b = (_a = info).push;
                        _c = "triples: ";
                        return [4 /*yield*/, store.size()];
                    case 1:
                        _b.apply(_a, [_c + (_k.sent())]);
                        _e = (_d = info).push;
                        _f = "observers: ";
                        return [4 /*yield*/, store.getValueObserverCount()];
                    case 2:
                        _e.apply(_d, [_f + (_k.sent())]);
                        _h = (_g = info).push;
                        _j = "constraints: ";
                        return [4 /*yield*/, store.getActiveConstraintCount()];
                    case 3:
                        _h.apply(_g, [_j + (_k.sent())]);
                        info.push("dymos: " + this.numPlayingDymos);
                        info.push("buffers: " + this.numLoadedBuffers);
                        this.performanceInfo = info.join(', ');
                        return [2 /*return*/];
                }
            });
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__("../../../../../src/app/services/api-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/api-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ApiService = (function () {
    function ApiService() {
        this.API_URL = "https://play-it-again-use-it-together.herokuapp.com/"; //"http://localhost:8060/";
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.API_URL, {
            extraHeaders: {
                'Access-Control-Allow-Credentials': 'omit'
            }
        });
    }
    ApiService.prototype.getTexture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).stringify;
                        return [4 /*yield*/, this.getJsonFromApi('texture/')];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), null, "    "])];
                }
            });
        });
    };
    ApiService.prototype.onLiveTexture = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('live-stream', function (data) { return observer.next(data); });
        });
    };
    ApiService.prototype.getJsonFromApi = function (path, params) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        path = this.addParams(path, params);
                        return [4 /*yield*/, fetch(this.API_URL + path)];
                    case 1:
                        response = _c.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, response.text()];
                    case 2: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    ApiService.prototype.addParams = function (path, params) {
        if (params) {
            var paramStrings = Array.from(Object.keys(params))
                .map(function (k) { return k + "=" + encodeURIComponent(params[k]); });
            path += '?' + paramStrings.join('&');
        }
        return path;
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ApiService);

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../n3/lib recursive ^\\.\\/N3.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./N3Lexer": "../../../../n3/lib/N3Lexer.js",
	"./N3Lexer.js": "../../../../n3/lib/N3Lexer.js",
	"./N3Parser": "../../../../n3/lib/N3Parser.js",
	"./N3Parser.js": "../../../../n3/lib/N3Parser.js",
	"./N3Store": "../../../../n3/lib/N3Store.js",
	"./N3Store.js": "../../../../n3/lib/N3Store.js",
	"./N3StreamParser": "../../../../n3/lib/N3StreamParser.js",
	"./N3StreamParser.js": "../../../../n3/lib/N3StreamParser.js",
	"./N3StreamWriter": "../../../../n3/lib/N3StreamWriter.js",
	"./N3StreamWriter.js": "../../../../n3/lib/N3StreamWriter.js",
	"./N3Util": "../../../../n3/lib/N3Util.js",
	"./N3Util.js": "../../../../n3/lib/N3Util.js",
	"./N3Writer": "../../../../n3/lib/N3Writer.js",
	"./N3Writer.js": "../../../../n3/lib/N3Writer.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../n3/lib recursive ^\\.\\/N3.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[4]);
//# sourceMappingURL=main.bundle.js.map