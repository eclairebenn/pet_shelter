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

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.add_form{\r\n    padding: 15px;\r\n    border: 1px solid rgb(146, 146, 146);\r\n\r\n}\r\n\r\n.skills{\r\n    margin-left: 30px;\r\n    display: inline-block;\r\n}\r\n\r\n.skills h5{\r\n    display: inline-block;\r\n}\r\n\r\n.skills input{\r\n    display: inline;\r\n}\r\n\r\n.btn{\r\n    margin: 30px;\r\n    font-size: 20px;\r\n}\r\n\r\n.error{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"addPet\">\n  <h2>Know of a pet needing a home?</h2>\n  <div class=\"add_form\">\n    <form (submit)=\"addPet()\" #formData=\"ngForm\">\n      <h4>Pet name : </h4>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"petToAdd.name\"\n        required\n        [(ngModel)]=\"petToAdd.name\"\n        #Fname=\"ngModel\"\n      />\n      <h4>Pet type : </h4>\n      <input \n        type=\"text\"\n        class=\"form-control\"\n        name=\"petToAdd.petType\"\n        required\n        [(ngModel)]=\"petToAdd.petType\"\n        #FpetType=\"ngModel\"\n      />\n      <h4>Description : </h4>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"petToAdd.description\"\n        required\n        [(ngModel)]=\"petToAdd.description\"\n        #Fdescription=\"ngModel\"\n      />\n      <h4>Skills : </h4>\n      <div class=\"skills\">\n        <h5>Skill 1:</h5>\n        <input \n          type=\"text\"\n          class=\"form-control\"\n          name=\"petToAdd.skills[0]\"\n          [(ngModel)]=\"petToAdd.skills[0]\"\n        />\n        <h5>Skill 2:</h5>\n        <input \n          type=\"text\"\n          class=\"form-control\"\n          name=\"petToAdd.skills[1]\"\n          [(ngModel)]=\"petToAdd.skills[1]\"\n        />\n        <h5>Skill 3:</h5>\n        <input \n          type=\"text\"\n          class=\"form-control\"\n          name=\"petToAdd.skills[2]\"\n          [(ngModel)]=\"petToAdd.skills[2]\"\n        />        \n      </div>\n\n      <br>\n      <input \n        type=\"submit\"\n        class=\"btn btn-info\"\n        value=\"Add Pet\"/>\n      <button class=\"btn btn-info\" [routerLink]=\"['/']\">Cancel</button>\n    </form>\n    <div *ngIf=\"message\">\n        <h6 class=\"error\" *ngFor=\"let m of message\">{{m}}</h6>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
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



var AddComponent = /** @class */ (function () {
    function AddComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.petToAdd = { "name": "", "petType": "", "description": "", "skills": [] };
        this.message = [];
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.addPet = function () {
        var _this = this;
        var observable = this._httpService.addPet(this.petToAdd);
        observable.subscribe(function (data) {
            console.log("got the add data back", data);
            _this.petToAdd = { "name": "", "petType": "", "description": "", "skills": [] };
            if (data['error']) {
                if (data['error'].code === 11000) {
                    _this.message = ["That pet name already exists"];
                }
                else {
                    _this.message = [];
                    for (var item in data['error'].errors) {
                        _this.message.push(data['error'].errors[item].message);
                    }
                }
                console.log(data['error']);
            }
            else {
                _this._router.navigateByUrl('/');
            }
        });
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _view_one_view_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-one/view-one.component */ "./src/app/view-one/view-one.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'pets', component: _display_display_component__WEBPACK_IMPORTED_MODULE_2__["DisplayComponent"] },
    { path: 'pets/new', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"] },
    { path: 'pets/:id', component: _view_one_view_one_component__WEBPACK_IMPORTED_MODULE_5__["ViewOneComponent"] },
    { path: 'pets/:id/edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    // redirect to /alpha if there is nothing in the url
    { path: '', pathMatch: 'full', redirectTo: '/pets' },
    // the ** will catch anything that did not match any of the above routes
    { path: '**', component: _display_display_component__WEBPACK_IMPORTED_MODULE_2__["DisplayComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root{\r\n    border: 3px solid rgb(158, 181, 245);\r\n}\r\n\r\ndiv{\r\n    padding: 30px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"root\" style=\"text-align:left\">\n  <h1>\n    {{ title }}!\n  </h1>\n<router-outlet></router-outlet>  \n</div>\n\n"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
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



var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.title = "Pet Shelter";
    }
    AppComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) { return console.log(params['id']); });
    };
    AppComponent.prototype.goHome = function () {
        this._router.navigate(['/']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _view_one_view_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-one/view-one.component */ "./src/app/view-one/view-one.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _display_display_component__WEBPACK_IMPORTED_MODULE_7__["DisplayComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _view_one_view_one_component__WEBPACK_IMPORTED_MODULE_10__["ViewOneComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display/display.component.css":
/*!***********************************************!*\
  !*** ./src/app/display/display.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.table-striped{\r\n    font-size: 22px;\r\n}\r\n\r\n\r\nth, td{\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    border: 1px solid black;\r\n}\r\n\r\n\r\nbutton{\r\n    margin-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/display/display.component.html":
/*!************************************************!*\
  !*** ./src/app/display/display.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"display\">\n  <h2>These pets are looking for a home!</h2>\n  <h3><a [routerLink]=\"['/pets/new']\">Add a pet to the shelter</a></h3>\n  <table class=\"table-striped\">\n    <tr>\n      <th class=\"h\">Name</th>\n      <th class=\"h\">Type</th>\n      <th class=\"h\">Actions</th>\n    </tr>\n    <tr *ngFor=\"let pet of pets\">\n      <td class=\"d\">{{pet.name}}</td>\n      <td class=\"d\">{{pet.petType}}</td>\n      <td class=\"d\">\n        <button class=\"btn btn-info\" [routerLink]=\"['/pets', pet._id]\">Details</button>\n        <button class=\"btn btn-secondary\" [routerLink]=\"['/pets/', pet._id, 'edit']\">Edit</button>\n      </td>\n    </tr>\n  </table>  \n</div>"

/***/ }),

/***/ "./src/app/display/display.component.ts":
/*!**********************************************!*\
  !*** ./src/app/display/display.component.ts ***!
  \**********************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
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



var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.pets = [];
    }
    DisplayComponent.prototype.ngOnInit = function () {
        this.getAllPets();
    };
    DisplayComponent.prototype.getAllPets = function () {
        var _this = this;
        var observable = this._httpService.getPets();
        observable.subscribe(function (data) {
            console.log("got get all pet data back", data);
            _this.pets = data['pets'];
        });
    };
    DisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display',
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/display/display.component.html"),
            styles: [__webpack_require__(/*! ./display.component.css */ "./src/app/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home{\r\n    text-align: right;\r\n    margin-right: 30px;\r\n}\r\n.update_form{\r\n    padding: 15px;\r\n    border: 1px solid rgb(146, 146, 146);\r\n\r\n}\r\n.skills{\r\n    margin-left: 30px;\r\n    display: inline-block;\r\n}\r\n.skills h5{\r\n    display: inline-block;\r\n}\r\n.skills input{\r\n    display: inline;\r\n}\r\n.btn{\r\n    margin: 30px;\r\n    font-size: 20px;\r\n}\r\n.error{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"petToEdit\" class=\"editPet\">\n  <h5 class=\"home\"><a [routerLink]=\"['/']\">Home</a></h5>\n  <h3>Edit this pet</h3>\n  <div class=\"update_form\">\n      <form (submit)=\"updatePet()\" #formData=\"ngForm\">\n        <h4>Pet name : </h4>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"petToEdit.name\"\n          required\n          [(ngModel)]=\"petToEdit.name\"\n          #Fname=\"ngModel\"\n        />\n        <h4>Pet type : </h4>\n        <input \n          type=\"text\"\n          class=\"form-control\"\n          name=\"petToEdit.petType\"\n          required\n          [(ngModel)]=\"petToEdit.petType\"\n          #FpetType=\"ngModel\"\n        />\n        <h4>Description : </h4>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"petToEdit.description\"\n          required\n          [(ngModel)]=\"petToEdit.description\"\n          #Fdescription=\"ngModel\"\n        />\n        <h4>Skills (optional): </h4>\n        <div class=\"skills\">\n          <h5>Skill 1:</h5>\n          <input \n            type=\"text\"\n            class=\"form-control\"\n            name=\"petToEdit.skills[0]\"\n            [(ngModel)]=\"petToEdit.skills[0]\"\n          />\n          <h5>Skill 2:</h5>\n          <input \n            type=\"text\"\n            class=\"form-control\"\n            name=\"petToEdit.skills[1]\"\n            [(ngModel)]=\"petToEdit.skills[1]\"\n          />\n          <h5>Skill 3:</h5>\n          <input \n            type=\"text\"\n            class=\"form-control\"\n            name=\"petToEdit.skills[2]\"\n            [(ngModel)]=\"petToEdit.skills[2]\"\n          />          \n        </div>\n\n        <br>\n        <input \n          type=\"submit\"\n          class=\"btn btn-info\"\n          value=\"Edit Pet\"/>\n        <button class=\"btn btn-info\" [routerLink]=\"['/pets/' + petToEdit._id]\">Cancel</button>\n      </form>\n      <div *ngIf=\"message\">\n          <h6 class=\"error\" *ngFor=\"let m of message\">{{m}}</h6>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
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



var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.message = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
            _this.getOnePet();
        });
    };
    EditComponent.prototype.getOnePet = function () {
        var _this = this;
        var observable = this._httpService.getOnePet(this.id);
        observable.subscribe(function (data) {
            console.log("got one pet data back", data);
            _this.petToEdit = data['pet'];
        });
    };
    EditComponent.prototype.updatePet = function () {
        var _this = this;
        var observable = this._httpService.editPet(this.petToEdit);
        observable.subscribe(function (data) {
            console.log("got edit pet data back", data);
            if (data['error']) {
                if (data['error'].code === 11000) {
                    _this.message = ["That pet name already exists"];
                }
                else {
                    _this.message = [];
                    for (var item in data['error'].errors) {
                        _this.message.push(data['error'].errors[item].message);
                    }
                }
                console.log(data['error']);
                _this.getOnePet();
            }
            else {
                _this._router.navigateByUrl('/pets/' + _this.id);
            }
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPets = function () {
        return this._http.get('/pet');
    };
    HttpService.prototype.getOnePet = function (id) {
        return this._http.get('/pet/' + id);
    };
    HttpService.prototype.addPet = function (newPet) {
        return this._http.post('/pet', newPet);
    };
    HttpService.prototype.editPet = function (editPet) {
        return this._http.put('/pet/' + editPet._id, editPet);
    };
    HttpService.prototype.deletePet = function (deletePet) {
        return this._http.delete('/remove/' + deletePet._id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/view-one/view-one.component.css":
/*!*************************************************!*\
  !*** ./src/app/view-one/view-one.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home{\r\n    text-align: right;\r\n    margin-right: 30px;\r\n}\r\n\r\n#details tr{\r\n    padding: 5px;\r\n\r\n}\r\n\r\n.like{\r\n    display: inline-block;\r\n}\r\n\r\n.btn{\r\n    margin: 30px;\r\n    font-weight: 20px;\r\n}\r\n\r\nul{\r\n    list-style-position: outside;\r\n    list-style-type: none;\r\n    margin-left: -40px;\r\n}"

/***/ }),

/***/ "./src/app/view-one/view-one.component.html":
/*!**************************************************!*\
  !*** ./src/app/view-one/view-one.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"petSelected\" class=\"onePet\">\n    <h5 class=\"home\"><a [routerLink]=\"['/']\">Home</a></h5>\n    <h3>Details about {{petSelected.name}}</h3>\n    <table class=\"table\" id=\"details\">\n      <tr>\n        <th>Pet type: </th>\n        <td>{{petSelected.petType}}</td>\n      </tr>\n      <tr>\n        <th>Description: </th>\n        <td>{{petSelected.description}}</td>\n      </tr>\n      <tr>\n        <th>Skills: </th>\n        <td>\n          <ul *ngIf=\"petSelected.skills\">\n            <li *ngFor=\"let skill of petSelected.skills\">\n              {{skill}}\n            </li>            \n          </ul>\n\n        </td>\n      </tr>\n      <tr>\n        <th>Likes: </th>\n        <td>{{petSelected.like}}</td>\n      </tr>\n    </table>\n    <form class=\"like\" (submit)=\"updatePet()\" #formData=\"ngForm\">\n      <input class=\"btn btn-secondary\" [disabled]=\"formData.submitted\"  type=\"submit\" value=\"Like this pet!\"/>\n    </form>\n    \n    <button class=\"btn btn-secondary\" (click)=\"deletePet()\">Adopt this pet!</button>\n  </div>\n  "

/***/ }),

/***/ "./src/app/view-one/view-one.component.ts":
/*!************************************************!*\
  !*** ./src/app/view-one/view-one.component.ts ***!
  \************************************************/
/*! exports provided: ViewOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOneComponent", function() { return ViewOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
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



var ViewOneComponent = /** @class */ (function () {
    function ViewOneComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ViewOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
            _this.getOnePet();
        });
    };
    ViewOneComponent.prototype.getOnePet = function () {
        var _this = this;
        var observable = this._httpService.getOnePet(this.id);
        observable.subscribe(function (data) {
            console.log("got ONE pet data back", data);
            _this.petSelected = data['pet'];
            console.log("the pet selected is", _this.petSelected);
        });
    };
    ViewOneComponent.prototype.updatePet = function () {
        var _this = this;
        this.petSelected.like += 1;
        var observable = this._httpService.editPet(this.petSelected);
        observable.subscribe(function (data) {
            console.log("got edit pet data back", data);
            _this.getOnePet();
        });
    };
    ViewOneComponent.prototype.deletePet = function () {
        var observable = this._httpService.deletePet(this.petSelected);
        observable.subscribe(function (data) {
            console.log("got delete data back", data);
        });
        this._router.navigateByUrl('/');
    };
    ViewOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-one',
            template: __webpack_require__(/*! ./view-one.component.html */ "./src/app/view-one/view-one.component.html"),
            styles: [__webpack_require__(/*! ./view-one.component.css */ "./src/app/view-one/view-one.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewOneComponent);
    return ViewOneComponent;
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

module.exports = __webpack_require__(/*! C:\Users\eclai\Desktop\DojoAssignments\MEAN\Angular\pet_shelter\AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map