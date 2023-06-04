"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Welcome_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Welcome.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Welcome.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      purchases: []
    };
  },
  mounted: function mounted() {
    this.fetchPurchases();
  },
  methods: {
    fetchPurchases: function fetchPurchases() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/purchase').then(function (response) {
        _this.purchases = response.data;
      })["catch"](function (error) {
        console.error(error);
      });
    }
  },
  computed: {
    totalPurchase: function totalPurchase() {
      return this.purchases.reduce(function (sum, purchase) {
        return sum + parseFloat(purchase.price);
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Welcome.vue?vue&type=template&id=51777872&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Welcome.vue?vue&type=template&id=51777872& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main-div"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "small-box bg-info"
  }, [_c("div", {
    staticClass: "inner"
  }, [_c("h3", [_vm._v(_vm._s(_vm.totalPurchase))]), _vm._v(" "), _c("p", [_vm._v("Total Purchase")])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "content-header"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row mb-2"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("h1", {
    staticClass: "m-0"
  }, [_vm._v("Dashboard")])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("ol", {
    staticClass: "breadcrumb float-sm-right"
  }, [_c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("Home")])]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item active"
  }, [_vm._v("Dashboard")])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "small-box bg-info"
  }, [_c("div", {
    staticClass: "inner"
  }, [_c("h3", [_vm._v("150")]), _vm._v(" "), _c("p", [_vm._v("Sale")])]), _vm._v(" "), _c("div", {
    staticClass: "icon"
  }, [_c("i", {
    staticClass: "ion ion-bag"
  })]), _vm._v(" "), _c("a", {
    staticClass: "small-box-footer",
    attrs: {
      href: "#"
    }
  }, [_vm._v("More info "), _c("i", {
    staticClass: "fas fa-arrow-circle-right"
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "icon"
  }, [_c("i", {
    staticClass: "ion ion-bag"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    staticClass: "small-box-footer",
    attrs: {
      href: "/purchaseview"
    }
  }, [_vm._v("More info "), _c("i", {
    staticClass: "fas fa-arrow-circle-right"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "small-box bg-info"
  }, [_c("div", {
    staticClass: "inner"
  }, [_c("h3", [_vm._v("150")]), _vm._v(" "), _c("p", [_vm._v("New Orders")])]), _vm._v(" "), _c("div", {
    staticClass: "icon"
  }, [_c("i", {
    staticClass: "ion ion-bag"
  })]), _vm._v(" "), _c("a", {
    staticClass: "small-box-footer",
    attrs: {
      href: "#"
    }
  }, [_vm._v("More info "), _c("i", {
    staticClass: "fas fa-arrow-circle-right"
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "small-box bg-info"
  }, [_c("div", {
    staticClass: "inner"
  }, [_c("h3", [_vm._v("150")]), _vm._v(" "), _c("p", [_vm._v("New Orders")])]), _vm._v(" "), _c("div", {
    staticClass: "icon"
  }, [_c("i", {
    staticClass: "ion ion-bag"
  })]), _vm._v(" "), _c("a", {
    staticClass: "small-box-footer",
    attrs: {
      href: "#"
    }
  }, [_vm._v("More info "), _c("i", {
    staticClass: "fas fa-arrow-circle-right"
  })])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Welcome.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Welcome.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Welcome_vue_vue_type_template_id_51777872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=51777872& */ "./resources/js/components/Welcome.vue?vue&type=template&id=51777872&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/components/Welcome.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_51777872___WEBPACK_IMPORTED_MODULE_0__.render,
  _Welcome_vue_vue_type_template_id_51777872___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Welcome.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Welcome.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Welcome.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Welcome.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Welcome.vue?vue&type=template&id=51777872&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Welcome.vue?vue&type=template&id=51777872& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_51777872___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_51777872___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_51777872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Welcome.vue?vue&type=template&id=51777872& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Welcome.vue?vue&type=template&id=51777872&");


/***/ })

}]);