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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/like.service.client */ "./src/app/services/like.service.client.ts");
/* harmony import */ var _author_page_author_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./author-page/author-page.component */ "./src/app/author-page/author-page.component.ts");
/* harmony import */ var _author_book_list_author_book_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./author-book-list/author-book-list.component */ "./src/app/author-book-list/author-book-list.component.ts");
/* harmony import */ var _services_authored_booklist_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/authored-booklist.service.client */ "./src/app/services/authored-booklist.service.client.ts");
/* harmony import */ var _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./public-profile/public-profile.component */ "./src/app/public-profile/public-profile.component.ts");
/* harmony import */ var _services_public_profile_service_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/public-profile.service.client */ "./src/app/services/public-profile.service.client.ts");
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
                _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _author_page_author_page_component__WEBPACK_IMPORTED_MODULE_15__["AuthorPageComponent"],
                _author_book_list_author_book_list_component__WEBPACK_IMPORTED_MODULE_16__["AuthorBookListComponent"],
                _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_18__["PublicProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            providers: [_services_search_page_service_client__WEBPACK_IMPORTED_MODULE_4__["SearchPageServiceClient"],
                _services_book_details_service_client__WEBPACK_IMPORTED_MODULE_8__["BookDetailsServiceClient"],
                _services_book_service_client__WEBPACK_IMPORTED_MODULE_9__["BookServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_13__["UserServiceClient"],
                _services_like_service_client__WEBPACK_IMPORTED_MODULE_14__["LikeServiceClient"],
                _services_authored_booklist_service_client__WEBPACK_IMPORTED_MODULE_17__["AuthoredBookListServiceClient"],
                _services_public_profile_service_client__WEBPACK_IMPORTED_MODULE_19__["PublicProfileServiceClient"]],
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
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _author_page_author_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./author-page/author-page.component */ "./src/app/author-page/author-page.component.ts");
/* harmony import */ var _author_book_list_author_book_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./author-book-list/author-book-list.component */ "./src/app/author-book-list/author-book-list.component.ts");
/* harmony import */ var _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./public-profile/public-profile.component */ "./src/app/public-profile/public-profile.component.ts");









var appRoutes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_1__["SearchPageComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'author-page', component: _author_page_author_page_component__WEBPACK_IMPORTED_MODULE_6__["AuthorPageComponent"] },
    { path: 'author-book-list', component: _author_book_list_author_book_list_component__WEBPACK_IMPORTED_MODULE_7__["AuthorBookListComponent"] },
    { path: 'book/:bookId', component: _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_2__["BookDetailsComponent"] },
    { path: 'user/:userId', component: _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_8__["PublicProfileComponent"] },
    { path: '**', component: _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_1__["SearchPageComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/author-book-list/author-book-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/author-book-list/author-book-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author-book-list/author-book-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/author-book-list/author-book-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Authored Books</h1>\n\n  <input [(ngModel)]=\"volumeId\"\n         placeholder=\"VolumeId\"\n         class=\"form-control\"/>\n  <br>\n  <button (click)=\"addToAuthoredBooks()\"\n    class=\"btn btn-primary btn-block\">\n    Add\n  </button>\n\n  <h2>Authored Books :{{authoredBooks.length}}</h2>\n  <div *ngFor=\"let token of authoredBooks\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        {{token.book.title}}\n        <button (click)=\"removeFromAuthoredBooks(token.book._id)\"\n          class=\"float-right btn btn-danger\">UnAuthor</button>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/author-book-list/author-book-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/author-book-list/author-book-list.component.ts ***!
  \****************************************************************/
/*! exports provided: AuthorBookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorBookListComponent", function() { return AuthorBookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authored_booklist_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authored-booklist.service.client */ "./src/app/services/authored-booklist.service.client.ts");
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




var AuthorBookListComponent = /** @class */ (function () {
    function AuthorBookListComponent(service, bookDetailService, bookService) {
        this.service = service;
        this.bookDetailService = bookDetailService;
        this.bookService = bookService;
        this.volumeId = '';
        this.authoredBooks = [];
    }
    AuthorBookListComponent.prototype.addToAuthoredBooks = function () {
        var _this = this;
        this.bookDetailService.findBookById(this.volumeId)
            .then(function (book) {
            _this.bookService.createBook(book.id, book.volumeInfo.title)
                .then(function (newbook) {
                _this.service.addToAuthoredBooks(newbook._id);
            })
                .then(function (authored) {
                _this.service
                    .findAuthoredBooksForUser()
                    .then(function (authoredBooks) { return _this.authoredBooks = authoredBooks; });
            });
        });
    };
    AuthorBookListComponent.prototype.removeFromAuthoredBooks = function (bookId) {
        var _this = this;
        this.service.removeFromAuthoredBooks(bookId)
            .then(function (authored) {
            _this.service
                .findAuthoredBooksForUser()
                .then(function (authoredBooks) { return _this.authoredBooks = authoredBooks; });
        });
    };
    AuthorBookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .findAuthoredBooksForUser()
            .then(function (authoredBooks) { return _this.authoredBooks = authoredBooks; });
    };
    AuthorBookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-book-list',
            template: __webpack_require__(/*! ./author-book-list.component.html */ "./src/app/author-book-list/author-book-list.component.html"),
            styles: [__webpack_require__(/*! ./author-book-list.component.css */ "./src/app/author-book-list/author-book-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authored_booklist_service_client__WEBPACK_IMPORTED_MODULE_1__["AuthoredBookListServiceClient"],
            _services_book_details_service_client__WEBPACK_IMPORTED_MODULE_2__["BookDetailsServiceClient"],
            _services_book_service_client__WEBPACK_IMPORTED_MODULE_3__["BookServiceClient"]])
    ], AuthorBookListComponent);
    return AuthorBookListComponent;
}());



/***/ }),

/***/ "./src/app/author-page/author-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/author-page/author-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author-page/author-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/author-page/author-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Profile</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <br>\n  <input [(ngModel)]=\"firstName\"\n         placeholder=\"first name\"\n         class=\"form-control\"/>\n  <br>\n  <input [(ngModel)]=\"lastName\"\n         placeholder=\"lastName\"\n         class=\"form-control\"/>\n  <br>\n  <input [(ngModel)]=\"bio\"\n         placeholder=\"Bio\"\n         class=\"form-control\"/>\n  <br>\n  <input [(ngModel)]=\"snippet\"\n         placeholder=\"Featured Snippet\"\n         class=\"form-control\"/>\n  <br>\n  <input [(ngModel)]=\"email\"\n         placeholder=\"email\"\n         class=\"form-control\"/>\n  <br>\n  <button (click)=\"update()\"\n          class=\"btn btn-primary btn-block\">\n    Update\n  </button>\n  <br>\n  <button class=\"btn btn-success\" (click)=\"logout()\">Logout</button>\n  &nbsp; &nbsp;\n  <a routerLink=\"/home\">Home</a>\n</div>\n"

/***/ }),

/***/ "./src/app/author-page/author-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/author-page/author-page.component.ts ***!
  \******************************************************/
/*! exports provided: AuthorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorPageComponent", function() { return AuthorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorPageComponent = /** @class */ (function () {
    function AuthorPageComponent(service, router) {
        this.service = service;
        this.router = router;
        this.authoredBooks = [];
    }
    AuthorPageComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    AuthorPageComponent.prototype.update = function () {
        // console.log(user);
        this.service
            .update(this._id, this.username, this.firstName, this.lastName, this.email, this.bio, this.snippet);
    };
    AuthorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            if (user !== null) {
                _this._id = user._id;
                _this.username = user.username;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                _this.email = user.email;
                _this.bio = user.bio;
                _this.snippet = user.snippet;
                console.log(user._id);
            }
            else {
                _this._id = -1;
            }
        });
    };
    AuthorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-page',
            template: __webpack_require__(/*! ./author-page.component.html */ "./src/app/author-page/author-page.component.html"),
            styles: [__webpack_require__(/*! ./author-page.component.css */ "./src/app/author-page/author-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthorPageComponent);
    return AuthorPageComponent;
}());



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
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/like.service.client */ "./src/app/services/like.service.client.ts");
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
    function BookDetailsComponent(route, router, service, bookService, likeService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.service = service;
        this.bookService = bookService;
        this.likeService = likeService;
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
        var _this = this;
        this.bookService.createBook(id, title)
            .then(function (book) {
            _this.likeService.userLikesBook(book._id);
        });
    };
    BookDetailsComponent.prototype.loadBook = function (bookId) {
        var _this = this;
        this.bookId = bookId;
        this.service.findBookById(bookId)
            .then(function (book) { return _this.book = book; });
    };
    BookDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/book-details/book-details.component.html"),
            styles: [__webpack_require__(/*! ./book-details.component.css */ "./src/app/book-details/book-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_book_details_service_client__WEBPACK_IMPORTED_MODULE_2__["BookDetailsServiceClient"],
            _services_book_service_client__WEBPACK_IMPORTED_MODULE_3__["BookServiceClient"],
            _services_like_service_client__WEBPACK_IMPORTED_MODULE_4__["LikeServiceClient"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Login</h1>\n  <br>\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <br>\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"/>\n  <br>\n  <button (click)=\"login(username, password)\"\n          class=\"btn btn-primary btn-block\">\n    Login\n  </button>\n  <div class=\"float-left\">\n    <a routerLink=\"/register\">Register</a>\n  </div>\n  <div class=\"float-right\">\n    <a routerLink=\"/home\">Home</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        console.log([username, password]);
        this.service.login(username, password)
            .then(function (user) {
            if (user._id === -1) {
                alert('Invalid');
            }
            else if (user.role === 'author') {
                _this.router.navigate(['author-page']);
            }
            else {
                _this.router.navigate(['profile']);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Profile</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <br>\n  <input [(ngModel)]=\"firstName\"\n         placeholder=\"first name\"\n         class=\"form-control\"/>\n  <br>\n  <input [(ngModel)]=\"lastName\"\n         placeholder=\"lastName\"\n         class=\"form-control\"/>\n  <br>\n  <input [(ngModel)]=\"email\"\n         placeholder=\"email\"\n         class=\"form-control\"/>\n  <br>\n  <button (click)=\"update()\"\n          class=\"btn btn-primary btn-block\">\n    Update\n  </button>\n\n  <h2>Liked Books :{{likedBooks.length}}</h2>\n  <div *ngFor=\"let token of likedBooks\">\n    <ul class=\"list-group\">\n  <li class=\"list-group-item\">\n    {{token.book.title}}\n    <button (click)=\"unlike(token.book._id)\"\n      class=\"float-right btn btn-danger\">Unlike</button>\n  </li>\n    </ul>\n</div>\n\n  <br>\n  <button class=\"btn btn-success\" (click)=\"logout()\">Logout</button>\n  &nbsp; &nbsp;\n  <a routerLink=\"/home\">Home</a>\n  &nbsp; &nbsp;\n  <a routerLink=\"/admin\" *ngIf=\"username==='admin'\">Admin Page</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/like.service.client */ "./src/app/services/like.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, likeService, router) {
        this.service = service;
        this.likeService = likeService;
        this.router = router;
        this.user = {};
        this.likedBooks = [];
    }
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.update = function () {
        // console.log(user);
        this.service
            .update(this._id, this.username, this.firstName, this.lastName, this.email, '', '');
    };
    ProfileComponent.prototype.unlike = function (bookId) {
        var _this = this;
        this.likeService.userUnlikesBook(bookId)
            .then(function (likes) {
            _this.likeService
                .findLikedBooksForUser()
                .then(function (likedBooks) { return _this.likedBooks = likedBooks; });
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            if (user !== null) {
                _this._id = user._id;
                _this.username = user.username;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                _this.email = user.email;
                console.log(user._id);
            }
            else {
                _this._id = -1;
            }
        });
        if (this._id !== -1) {
            this.likeService
                .findLikedBooksForUser()
                .then(function (likedBooks) { return _this.likedBooks = likedBooks; });
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_like_service_client__WEBPACK_IMPORTED_MODULE_3__["LikeServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/public-profile/public-profile.component.css":
/*!*************************************************************!*\
  !*** ./src/app/public-profile/public-profile.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public-profile/public-profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/public-profile/public-profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h2>User Profile</h2>\r\n  <h4>Username: {{user.username}}</h4>\r\n  <h4>First Name: {{user.firstName}}</h4>\r\n  <h4>Last Name: {{user.lastName}}</h4>\r\n  <h4>Email: {{user.email}}</h4>\r\n  <div *ngIf=\"user.role==='author'\">\r\n  <h4>Bio: {{user.bio}}</h4>\r\n  <h4>Snippet: {{user.snippet}}</h4>\r\n    <h2>Authored Books :{{books.length}}</h2>\r\n    <div *ngFor=\"let token of books\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\">\r\n          {{token.book.title}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/public-profile/public-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/public-profile/public-profile.component.ts ***!
  \************************************************************/
/*! exports provided: PublicProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfileComponent", function() { return PublicProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_public_profile_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/public-profile.service.client */ "./src/app/services/public-profile.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicProfileComponent = /** @class */ (function () {
    function PublicProfileComponent(route, service, publicProfileService) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.publicProfileService = publicProfileService;
        this.books = [];
        this.route.params.subscribe(function (params) { return _this.loadUser(params['userId']); });
    }
    PublicProfileComponent.prototype.loadUser = function (userId) {
        var _this = this;
        this.userId = userId;
        this.service.findUserById(userId)
            .then(function (user) {
            _this.user = user;
            if (user.role === 'author') {
                _this.publicProfileService
                    .findAuthoredBooksUserById(user._id)
                    .then(function (authoredBooks) { return _this.books = authoredBooks; });
            }
            else {
                _this.publicProfileService.findLikedBooksUserById(user._id)
                    .then(function (likedBooks) { return _this.books = likedBooks; });
            }
        });
    };
    PublicProfileComponent.prototype.ngOnInit = function () {
    };
    PublicProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__(/*! ./public-profile.component.html */ "./src/app/public-profile/public-profile.component.html"),
            styles: [__webpack_require__(/*! ./public-profile.component.css */ "./src/app/public-profile/public-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_public_profile_service_client__WEBPACK_IMPORTED_MODULE_3__["PublicProfileServiceClient"]])
    ], PublicProfileComponent);
    return PublicProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Register</h1>\n  <br>\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <br>\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"/>\n  <br>\n  <input [(ngModel)]=\"password2\"\n         placeholder=\"verify password\"\n         class=\"form-control\"/>\n  <br>\n  <input [(ngModel)]=\"role\"\n         placeholder=\"role\"\n         class=\"form-control\"/>\n  <br>\n  <button (click)=\"register(username, password, password2, role)\"\n          class=\"btn btn-primary btn-block\">\n    Register\n  </button>\n  <div class=\"float-left\">\n    <a routerLink=\"/login\">Login</a>\n  </div>\n  <div class=\"float-right\">\n    <a routerLink=\"/home\">Home</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    RegisterComponent.prototype.register = function (username, password, password2, role) {
        var _this = this;
        if (password !== password2) {
            alert('Passwords do not match');
        }
        else {
            this.service.findUserByUsername(username).then(function (user) {
                if (user._id === -1) {
                    _this.service
                        .createUser(username, password, role)
                        .then(function () {
                        if (role === 'author') {
                            _this.router.navigate(['author-page']);
                        }
                        else {
                            _this.router.navigate(['profile']);
                        }
                    });
                }
                else {
                    alert('Username already present');
                }
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
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

/***/ "./src/app/services/authored-booklist.service.client.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/authored-booklist.service.client.ts ***!
  \**************************************************************/
/*! exports provided: AuthoredBookListServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthoredBookListServiceClient", function() { return AuthoredBookListServiceClient; });
var AuthoredBookListServiceClient = /** @class */ (function () {
    function AuthoredBookListServiceClient() {
        this.BOOKURL = 'http://localhost:4000/api/authoredbook';
        this.BOOKURL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/authoredbook';
        this.USER_URL = 'http://localhost:4000/api/book/authors';
        this.USER_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/book/authors';
    }
    AuthoredBookListServiceClient.prototype.addToAuthoredBooks = function (bookId) {
        var url = this.BOOKURL + '/' + bookId;
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    };
    AuthoredBookListServiceClient.prototype.removeFromAuthoredBooks = function (bookId) {
        var url = this.BOOKURL + '/' + bookId;
        return fetch(url, {
            method: 'delete',
            credentials: 'include'
        });
    };
    AuthoredBookListServiceClient.prototype.findAuthoredBooksForUser = function () {
        return fetch(this.USER_URL, {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    return AuthoredBookListServiceClient;
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
        return fetch(this.BOOKURL, {
            body: JSON.stringify(book),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    return BookServiceClient;
}());



/***/ }),

/***/ "./src/app/services/like.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/like.service.client.ts ***!
  \*************************************************/
/*! exports provided: LikeServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeServiceClient", function() { return LikeServiceClient; });
var LikeServiceClient = /** @class */ (function () {
    function LikeServiceClient() {
        this.USER_URL = 'http://localhost:4000/api/book/likes';
        this.BOOK_URL = 'http://localhost:4000/api/book';
        this.USER_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book/likes';
        this.BOOK_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book';
    }
    LikeServiceClient.prototype.findLikedBooksForUser = function () {
        return fetch(this.USER_URL, {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    LikeServiceClient.prototype.userLikesBook = function (bookId) {
        var url = this.BOOK_URL + '/' + bookId + '/likes';
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    };
    LikeServiceClient.prototype.userUnlikesBook = function (bookId) {
        var url = this.BOOK_URL + '/' + bookId + '/unlikes';
        return fetch(url, {
            method: 'delete',
            credentials: 'include'
        });
    };
    return LikeServiceClient;
}());



/***/ }),

/***/ "./src/app/services/public-profile.service.client.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/public-profile.service.client.ts ***!
  \***********************************************************/
/*! exports provided: PublicProfileServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfileServiceClient", function() { return PublicProfileServiceClient; });
var PublicProfileServiceClient = /** @class */ (function () {
    function PublicProfileServiceClient() {
        this.URL = 'http://localhost:4000';
        this.URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com';
    }
    PublicProfileServiceClient.prototype.findLikedBooksUserById = function (userId) {
        return fetch(this.URL + '/api/user/' + userId + 'liked')
            .then(function (response) { return response.json(); });
    };
    PublicProfileServiceClient.prototype.findAuthoredBooksUserById = function (userId) {
        return fetch(this.URL + '/api/user/' + userId + 'authored')
            .then(function (response) { return response.json(); });
    };
    return PublicProfileServiceClient;
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

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        this.URL = 'http://localhost:4000';
        this.URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com';
    }
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch(this.URL + '/api/user/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.findUserByUsername = function (username) {
        var credentials = {
            username: username
        };
        return fetch(this.URL + '/api/register', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(this.URL + '/api/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch(this.URL + '/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch(this.URL + '/api/logout', {
            method: 'post',
            credentials: 'include',
        });
    };
    UserServiceClient.prototype.createUser = function (username, password, role) {
        var user = {
            username: username,
            password: password,
            role: role
        };
        return fetch(this.URL + '/api/user', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.update = function (_id, username, firstName, lastName, email, bio, snippet) {
        var url = this.URL + '/api/profile';
        var user = { _id: _id, username: username, firstName: firstName, lastName: lastName, email: email, bio: bio, snippet: snippet };
        return fetch(url, {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return UserServiceClient;
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