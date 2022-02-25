(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <style>\n    * {box-sizing: border-box;}\n\n    body {\n      margin: 0;\n      font-family: Arial, Helvetica, sans-serif;\n    }\n\n    .header {\n      overflow: hidden;\n      background-color: #f1f1f1;\n      padding: 20px 10px;\n    }\n\n    .header a {\n      float: left;\n      color: black;\n      text-align: center;\n      padding: 12px;\n      text-decoration: none;\n      font-size: 18px;\n      line-height: 25px;\n      border-radius: 4px;\n    }\n\n    .header a.logo {\n      font-size: 25px;\n      font-weight: bold;\n    }\n\n    .header a:hover {\n      background-color: #ddd;\n      color: black;\n    }\n\n    .header a.active {\n      background-color: dodgerblue;\n      color: white;\n    }\n\n    .header-right {\n      float: right;\n    }\n\n    @media screen and (max-width: 500px) {\n      .header a {\n        float: none;\n        display: block;\n        text-align: left;\n      }\n\n      .header-right {\n        float: none;\n      }\n    }\n  </style>\n  <div class=\"container\">\n    <app-lists [childAllLists]=\"allLists\" (clickSender)=\"createList($event)\"></app-lists>\n  </div>\n</head>\n<body>\n\n<div class=\"header\">\n  <div class=\"header-right\">\n    <p>SWE 632</p>\n    <p>Nan Hu</p>\n    <p>Stephen Hull</p>\n  </div>\n</div>\n\n\n\n\n\n\n\n<app-board></app-board>\n</body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'trelloBoard';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  background: #0079bf;\n  display: flex;\n  padding: 0 5px;\n  height: 100vh;\n  overflow-x: scroll;\n}\n"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-list *ngFor=\"let list of lists\" [list]=\"list\" [cardStore]=\"cardStore\"></app-list>\n</div>\n"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cardstore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardstore */ "./src/app/cardstore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
    }
    BoardComponent.prototype.setMockData = function () {
        this.cardStore = new _cardstore__WEBPACK_IMPORTED_MODULE_1__["CardStore"]();
        var lists = [
            {
                name: 'To Do',
                cards: []
            },
            {
                name: 'Doing',
                cards: []
            },
            {
                name: 'Done',
                cards: []
            }
        ];
        this.lists = lists;
    };
    BoardComponent.prototype.ngOnInit = function () {
        this.setMockData();
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  background: darkgoldenrod;\n  margin: 0 0 6px 0;\n  padding: 6px 6px 2px 8px;\n  border: 1px solid green;\n  font-style: italic;\n  color: #fff;\n}\n"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"card\" draggable=\"true\" (dragstart)=\"dragStart($event)\" id=\"{{card.id}}\">\n  {{card.description}}\n</p>\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cardschema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardschema */ "./src/app/cardschema.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.dragStart = function (ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _cardschema__WEBPACK_IMPORTED_MODULE_1__["CardSchema"])
    ], CardComponent.prototype, "card", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-card",
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/cardschema.ts":
/*!*******************************!*\
  !*** ./src/app/cardschema.ts ***!
  \*******************************/
/*! exports provided: CardSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSchema", function() { return CardSchema; });
var CardSchema = /** @class */ (function () {
    function CardSchema() {
    }
    return CardSchema;
}());



/***/ }),

/***/ "./src/app/cardstore.ts":
/*!******************************!*\
  !*** ./src/app/cardstore.ts ***!
  \******************************/
/*! exports provided: CardStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardStore", function() { return CardStore; });
/* harmony import */ var _cardschema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardschema */ "./src/app/cardschema.ts");

var CardStore = /** @class */ (function () {
    function CardStore() {
        this.cards = {};
        this.lastid = -1;
    }
    CardStore.prototype._addCard = function (card) {
        card.id = String(++this.lastid);
        this.cards[card.id] = card;
        return card.id;
    };
    CardStore.prototype.getCard = function (cardId) {
        return this.cards[cardId];
    };
    CardStore.prototype.newCard = function (description) {
        var card = new _cardschema__WEBPACK_IMPORTED_MODULE_0__["CardSchema"]();
        card.description = description;
        return this._addCard(card);
    };
    return CardStore;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  background:lightyellow;\n  width: 350px;\n  padding: 6px;\n  margin: 5px;\n  display: inline-block;\n\n}\n.list__title {\n  margin: 0;\n  padding: 16px 0;\n}\n.list a {\n  width: 100%;\n  display: block;\n  text-decoration: none;\n  margin-top: 10px;\n}\ninput{\n  width: 300px;\n  padding: 10px;\n  border: 1px solid violet;\n  outline: 0;\n  background: #fff;\n  box-shadow:none;\n}\n"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\" (dragover)=\"allowDrop($event)\" (drop)=\"drop($event)\">\n  <p class=\"list__title\"><strong>{{list.name}}</strong></p>\n  <div class=\"cards\">\n    <app-card *ngFor=\"let cardId of list.cards\" [card]=\"cardStore.getCard(cardId)\"></app-card>\n  </div>\n\n  <input #addCardInput type=\"text\" (keyup.enter)=\"onEnter(addCardInput.value); addCardInput.value=''; displayAddCard=false;\" *ngIf=\"displayAddCard\" autofocus>\n  <a href=\"#\" class=\"list__newcard\" (click)=\"toggleDisplayAddCard();\">Add a card...</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listschema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listschema */ "./src/app/listschema.ts");
/* harmony import */ var _cardstore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cardstore */ "./src/app/cardstore.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.displayAddCard = false;
    }
    ListComponent.prototype.toggleDisplayAddCard = function () {
        this.displayAddCard = !this.displayAddCard;
    };
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent.prototype.allowDrop = function ($event) {
        $event.preventDefault();
    };
    ListComponent.prototype.drop = function ($event) {
        $event.preventDefault();
        var data = $event.dataTransfer.getData("text");
        var target = $event.target;
        var targetClassName = target.className;
        while (target.className !== "list") {
            target = target.parentNode;
        }
        target = target.querySelector(".cards");
        if (targetClassName === "card") {
            $event.target.parentNode.insertBefore(document.getElementById(data), $event.target);
        }
        else if (targetClassName === "list__title") {
            if (target.children.length) {
                target.insertBefore(document.getElementById(data), target.children[0]);
            }
            else {
                target.appendChild(document.getElementById(data));
            }
        }
        else {
            target.appendChild(document.getElementById(data));
        }
    };
    ListComponent.prototype.onEnter = function (value) {
        var cardId = this.cardStore.newCard(value);
        this.list.cards.push(cardId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _listschema__WEBPACK_IMPORTED_MODULE_1__["ListSchema"])
    ], ListComponent.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _cardstore__WEBPACK_IMPORTED_MODULE_2__["CardStore"])
    ], ListComponent.prototype, "cardStore", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-list",
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/listschema.ts":
/*!*******************************!*\
  !*** ./src/app/listschema.ts ***!
  \*******************************/
/*! exports provided: ListSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSchema", function() { return ListSchema; });
var ListSchema = /** @class */ (function () {
    function ListSchema() {
    }
    return ListSchema;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/liquid/Desktop/SWE632/trelloBoard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map