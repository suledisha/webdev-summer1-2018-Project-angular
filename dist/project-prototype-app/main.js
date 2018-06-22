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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'app';
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
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/search-page/search-page.component.ts");
/* harmony import */ var _services_search_page_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/search-page.service.client */ "./src/app/services/search-page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/book-details/book-details.component.ts");
/* harmony import */ var _services_book_details_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/book-details.service.client */ "./src/app/services/book-details.service.client.ts");
/* harmony import */ var _services_book_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/book.service.client */ "./src/app/services/book.service.client.ts");
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
                _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__["SearchPageComponent"],
                _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            providers: [_services_search_page_service_client__WEBPACK_IMPORTED_MODULE_4__["SearchPageServiceClient"], _services_book_details_service_client__WEBPACK_IMPORTED_MODULE_8__["BookDetailsServiceClient"], _services_book_service_client__WEBPACK_IMPORTED_MODULE_9__["BookServiceClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/search-page/search-page.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/book-details/book-details.component.ts");



var appRoutes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_1__["SearchPageComponent"] },
    { path: 'book/:bookId', component: _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_2__["BookDetailsComponent"] },
    { path: '**', component: _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_1__["SearchPageComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/book-details/book-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/book-details/book-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-details/book-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/book-details/book-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Book Details</h2>\n  <h3>{{book.volumeInfo.title}}</h3>\n  <div *ngFor=\"let author of book.volumeInfo.authors\"><h3>{{author}}</h3></div>\n  <div>  <h4>Publisher: {{book.volumeInfo.publisher}}</h4>\n  <h4>Published Date: {{book.volumeInfo.publishedDate}}</h4>\n  <h4>Reader Rating: {{book.volumeInfo.averageRating}}</h4>\n  <img src={{book.volumeInfo.imageLinks.smallThumbnail}}/>\n    <button class=\"btn btn-success\" (click)=\"this.likeBook(book.id,book.volumeInfo.title)\">Like!</button>\n  </div>\n  <div class=\"container-fluid\">\n  <h4>Plot</h4>\n  <h4>{{book.volumeInfo.description}}</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-details/book-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/book-details/book-details.component.ts ***!
  \********************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_book_details_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/book-details.service.client */ "./src/app/services/book-details.service.client.ts");
/* harmony import */ var _services_book_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/book.service.client */ "./src/app/services/book.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookDetailsComponent = /** @class */ (function () {
    function BookDetailsComponent(route, service, bookService) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.bookService = bookService;
        this.bookId = '';
        this.book = {
            id: '',
            volumeInfo: {
                title: '',
                averageRating: '',
                description: '',
                publisher: '',
                publishedDate: '',
                imageLinks: {
                    smallThumbnail: ''
                },
                authors: []
            }
        };
        this.route.params.subscribe(function (params) { return _this.loadBook(params['bookId']); });
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
    };
    BookDetailsComponent.prototype.likeBook = function (id, title) {
        this.bookService.createBook(id, title);
    };
    BookDetailsComponent.prototype.loadBook = function (bookId) {
        var _this = this;
        this.service.findBookById(bookId)
            .then(function (book) { return _this.book = book; });
    };
    BookDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/book-details/book-details.component.html"),
            styles: [__webpack_require__(/*! ./book-details.component.css */ "./src/app/book-details/book-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_book_details_service_client__WEBPACK_IMPORTED_MODULE_2__["BookDetailsServiceClient"], _services_book_service_client__WEBPACK_IMPORTED_MODULE_3__["BookServiceClient"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/search-page/search-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-page/search-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-page/search-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-page/search-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"container-fluid\">\n\n    <div>\n      <input [(ngModel)]=\"title\" class=\"form-control\" placeholder=\"Title\" >\n      <small class=\"form-text text-muted\">Please enter atleast one word of the title of the book</small>\n    </div>\n\n    <div>\n      <input [(ngModel)]=\"author\" class=\"form-control\" placeholder=\"Author\" >\n      <small class=\"form-text text-muted\">Optional: Enter the author name to enhance search</small>\n    </div>\n\n    <button\n      class=\"btn btn-success btn-block\"\n      (click)=\"findBook(title, author)\">\n      Find Book!\n    </button>\n\n  </div>\n  <br/>\n  <br/>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let book of books\">\n    <div>\n      <img src={{book.volumeInfo.imageLinks.smallThumbnail}}/>\n      <a routerLink=\"/book/{{book.id}}\"> {{book.volumeInfo.title}}</a>\n    </div>\n  </li>\n\n</ul>\n</div>\n"

/***/ }),

/***/ "./src/app/search-page/search-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-page/search-page.component.ts ***!
  \******************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_page_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/search-page.service.client */ "./src/app/services/search-page.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent(service) {
        this.service = service;
        this.books = [];
    }
    SearchPageComponent.prototype.ngOnInit = function () {
    };
    SearchPageComponent.prototype.findBook = function (title, author) {
        var _this = this;
        this.service.findBookByTitle(title, author)
            .then(function (books) {
            return _this.books = books.items;
        });
    };
    SearchPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-page',
            template: __webpack_require__(/*! ./search-page.component.html */ "./src/app/search-page/search-page.component.html"),
            styles: [__webpack_require__(/*! ./search-page.component.css */ "./src/app/search-page/search-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_page_service_client__WEBPACK_IMPORTED_MODULE_1__["SearchPageServiceClient"]])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),

/***/ "./src/app/services/book-details.service.client.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/book-details.service.client.ts ***!
  \*********************************************************/
/*! exports provided: BookDetailsServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsServiceClient", function() { return BookDetailsServiceClient; });
var BookDetailsServiceClient = /** @class */ (function () {
    function BookDetailsServiceClient() {
    }
    BookDetailsServiceClient.prototype.findBookById = function (bookId) {
        return fetch('https://www.googleapis.com/books/v1/volumes/' + bookId + '?&key=AIzaSyC-1n7EYMBCWCjk5FZUz5f1otN1isYTLU0')
            .then(function (response) { return response.json(); });
    };
    return BookDetailsServiceClient;
}());



/***/ }),

/***/ "./src/app/services/book.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/book.service.client.ts ***!
  \*************************************************/
/*! exports provided: BookServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookServiceClient", function() { return BookServiceClient; });
var BookServiceClient = /** @class */ (function () {
    function BookServiceClient() {
        this.BOOKURL = 'http://localhost:4000/api/book';
        this.BOOKURL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book';
    }
    BookServiceClient.prototype.createBook = function (id, title) {
        var book = {
            id: id,
            title: title
        };
        return fetch(this.BOOKURL_HEROKU, {
            body: JSON.stringify(book),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return BookServiceClient;
}());



/***/ }),

/***/ "./src/app/services/search-page.service.client.ts":
/*!********************************************************!*\
  !*** ./src/app/services/search-page.service.client.ts ***!
  \********************************************************/
/*! exports provided: SearchPageServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageServiceClient", function() { return SearchPageServiceClient; });
var SearchPageServiceClient = /** @class */ (function () {
    function SearchPageServiceClient() {
    }
    SearchPageServiceClient.prototype.findBookByTitle = function (title, author) {
        return fetch('https://www.googleapis.com/books/v1/volumes?q=' + title + '+inauthor:' + author + '&key=AIzaSyC-1n7EYMBCWCjk5FZUz5f1otN1isYTLU0')
            .then(function (response) { return response.json(); });
    };
    return SearchPageServiceClient;
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

module.exports = __webpack_require__(/*! C:\Users\Disha\WebDev\project-prototype-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map