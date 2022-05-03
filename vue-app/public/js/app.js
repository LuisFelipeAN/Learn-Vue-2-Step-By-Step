webpackJsonp([0],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  template: '<h1>Hello World</h>'
});

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(34);


class Form {
  constructor(data) {
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }

    this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
  }

  reset() {
    for (let field in this.originalData) {
      this[field] = '';
    }

    this.errors.clear();
  }

  data() {
    let data = {};

    for (let property in this.originalData) {
      data[property] = this[property];
    }

    return data;
  }

  submit(reuquestType, url) {
    return new Promise((resolve, reject) => {
      axios[reuquestType](url, this.data()).then(response => {
        this.onSuccess(response.data);
        resolve(response.data);
      }).catch(error => {
        this.onFail(error.response.data);
        reject(error.response.data);
      });
    });
  }

  onSuccess(data) {
    alert(data.message);
    this.reset();
  }

  onFail(data) {
    this.errors.record(data.errors);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Form_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Example_js__ = __webpack_require__(14);




window.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;
window.Form = __WEBPACK_IMPORTED_MODULE_2__core_Form_js__["a" /* default */];
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  components: {
    Example: __WEBPACK_IMPORTED_MODULE_3__components_Example_js__["a" /* default */]
  },
  data: {
    form: new __WEBPACK_IMPORTED_MODULE_2__core_Form_js__["a" /* default */]({
      name: '',
      description: ''
    })
  },
  methods: {
    onSubmit: function () {
      this.form.submit('post', '/projects').then(data => console.log(data)).catch(error => console.log(error));
    }
  }
});

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Errors {
  constructor() {
    this.errors = {};
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }

  record(errors) {
    this.errors = errors;
  }

  clear(field) {
    if (field) {
      delete this.errors[field];
    } else {
      this.errors = {};
    }
  }

  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ })

},[33]);