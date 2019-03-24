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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

<<<<<<< HEAD

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

=======
>>>>>>> master

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

<<<<<<< HEAD
module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

=======
>>>>>>> master

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

=======
"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

>>>>>>> master

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
=======
module.exports = function (done, value) {
  return { value: value, done: !!done };
>>>>>>> master
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

<<<<<<< HEAD
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

=======
>>>>>>> master

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

<<<<<<< HEAD
"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};

=======
>>>>>>> master

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
=======
var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
>>>>>>> master
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});
=======
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
>>>>>>> master


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
=======
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
>>>>>>> master
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

<<<<<<< HEAD
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};

=======
>>>>>>> master

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
=======
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
>>>>>>> master
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
=======
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
>>>>>>> master
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
=======
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
>>>>>>> master
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
=======
exports.f = Object.getOwnPropertySymbols;
>>>>>>> master


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

=======
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

>>>>>>> master

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});
=======
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
>>>>>>> master


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default, kingBlack, kingWhite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kingBlack", function() { return kingBlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kingWhite", function() { return kingWhite; });
/* harmony import */ var _pieces_rook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pieces/rook */ "./src/pieces/rook.js");
/* harmony import */ var _pieces_pawn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pieces/pawn */ "./src/pieces/pawn.js");
/* harmony import */ var _pieces_king__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pieces/king */ "./src/pieces/king.js");
/* harmony import */ var _pieces_bishop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pieces/bishop */ "./src/pieces/bishop.js");
/* harmony import */ var _pieces_queen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pieces/queen */ "./src/pieces/queen.js");
/* harmony import */ var _pieces_knight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pieces/knight */ "./src/pieces/knight.js");






const board = new Array(8);

for (let i = 0; i < 8; i++) {
  board[i] = new Array(8);
}

let pawn;

for (let y = 0; y < 8; y++) {
  pawn = new _pieces_pawn__WEBPACK_IMPORTED_MODULE_1__["default"](1, y, 'black');
  board[pawn.x][pawn.y] = pawn;
}

for (let y = 0; y < 8; y++) {
  pawn = new _pieces_pawn__WEBPACK_IMPORTED_MODULE_1__["default"](6, y, 'white');
  board[pawn.x][pawn.y] = pawn;
}

let rook = new _pieces_rook__WEBPACK_IMPORTED_MODULE_0__["default"](7, 0, 'white');
board[rook.x][rook.y] = rook;
rook = new _pieces_rook__WEBPACK_IMPORTED_MODULE_0__["default"](7, 7, 'white');
board[rook.x][rook.y] = rook;
rook = new _pieces_rook__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 'black');
board[rook.x][rook.y] = rook;
rook = new _pieces_rook__WEBPACK_IMPORTED_MODULE_0__["default"](0, 7, 'black');
board[rook.x][rook.y] = rook;
let bishop = new _pieces_bishop__WEBPACK_IMPORTED_MODULE_3__["default"](0, 2, 'black');
board[bishop.x][bishop.y] = bishop;
bishop = new _pieces_bishop__WEBPACK_IMPORTED_MODULE_3__["default"](0, 5, 'black');
board[bishop.x][bishop.y] = bishop;
bishop = new _pieces_bishop__WEBPACK_IMPORTED_MODULE_3__["default"](7, 2, 'white');
board[bishop.x][bishop.y] = bishop;
bishop = new _pieces_bishop__WEBPACK_IMPORTED_MODULE_3__["default"](7, 5, 'white');
board[bishop.x][bishop.y] = bishop;
let queen = new _pieces_queen__WEBPACK_IMPORTED_MODULE_4__["default"](7, 3, 'white');
board[queen.x][queen.y] = queen;
queen = new _pieces_queen__WEBPACK_IMPORTED_MODULE_4__["default"](0, 3, 'black');
board[queen.x][queen.y] = queen;
let knight = new _pieces_knight__WEBPACK_IMPORTED_MODULE_5__["default"](7, 1, 'white');
board[knight.x][knight.y] = knight;
knight = new _pieces_knight__WEBPACK_IMPORTED_MODULE_5__["default"](7, 6, 'white');
board[knight.x][knight.y] = knight;
knight = new _pieces_knight__WEBPACK_IMPORTED_MODULE_5__["default"](0, 1, 'black');
board[knight.x][knight.y] = knight;
knight = new _pieces_knight__WEBPACK_IMPORTED_MODULE_5__["default"](0, 6, 'black');
board[knight.x][knight.y] = knight;
const kingWhite = new _pieces_king__WEBPACK_IMPORTED_MODULE_2__["default"](7, 4, 'white');
board[kingWhite.x][kingWhite.y] = kingWhite;
const kingBlack = new _pieces_king__WEBPACK_IMPORTED_MODULE_2__["default"](0, 4, 'black');
board[kingBlack.x][kingBlack.y] = kingBlack;
/* harmony default export */ __webpack_exports__["default"] = (board);


=======
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

>>>>>>> master

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

<<<<<<< HEAD
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _pieces_pawn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pieces/pawn */ "./src/pieces/pawn.js");
/* harmony import */ var _pieces_king__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pieces/king */ "./src/pieces/king.js");







 //checkWinner();

const chessBoard = document.getElementById('board');
const changePlayer = {
  _turn: ['white', 'black'],

  get turn() {
    return this._turn[0];
  },

  flip() {
    this._turn.reverse();
  }

};

const getCord = e => {
  if (e.target.localName === 'div') {
    return [e.target.id[0], e.target.id[2]];
  } else {
    return [e.target.parentNode.id[0], e.target.parentNode.id[2]];
  }
};

const possibleMoves = () => {
  //console.log('LEGITNE: '+ pieceElement.findLegalMoves());
  for (let posmov of pieceElement.findLegalMoves()) {
    document.getElementById(posmov).className += ' possibleMove';
  }

  return pieceElement.findLegalMoves() == '' ? false : true;
};

const moved = cord => {
  pieceElement.move(cord);
  clearMoves(cord);
};

const addSelection = cord => {
  document.getElementById(`${cord[0]},${cord[1]}`).firstElementChild.className += ' selected';
};

const remSelection = cord => {
  document.getElementById(`${cord[0]},${cord[1]}`).firstElementChild.className = document.getElementById(`${cord[0]},${cord[1]}`).firstElementChild.className.replace('selected', '');
};

const clearMoves = cord => {
  for (let x = 0; x < _board__WEBPACK_IMPORTED_MODULE_3__["default"].length; x++) {
    for (let y = 0; y < _board__WEBPACK_IMPORTED_MODULE_3__["default"][x].length; y++) {
      document.getElementById(`${x},${y}`).className = document.getElementById(`${x},${y}`).className.replace(`possibleMove`, '');
    }
  }
};

let whiteDoCastling = false;
let blackDoCastling = false;

const whiteCastling = () => {
  if (_board__WEBPACK_IMPORTED_MODULE_3__["default"][7][6] && _board__WEBPACK_IMPORTED_MODULE_3__["default"][7][6].constructor == _pieces_king__WEBPACK_IMPORTED_MODULE_5__["default"] && _board__WEBPACK_IMPORTED_MODULE_3__["default"][7][6].firstMove) {
    _board__WEBPACK_IMPORTED_MODULE_3__["default"][7][7].move([`7`, `5`]);
    whiteDoCastling = true;
  } else if (_board__WEBPACK_IMPORTED_MODULE_3__["default"][7][2] && _board__WEBPACK_IMPORTED_MODULE_3__["default"][7][2].constructor == _pieces_king__WEBPACK_IMPORTED_MODULE_5__["default"] && _board__WEBPACK_IMPORTED_MODULE_3__["default"][7][2].firstMove) {
    _board__WEBPACK_IMPORTED_MODULE_3__["default"][7][0].move([`7`, `3`]);
    whiteDoCastling = true;
  }
};

const blackCastling = () => {
  if (_board__WEBPACK_IMPORTED_MODULE_3__["default"][0][6] && _board__WEBPACK_IMPORTED_MODULE_3__["default"][0][6].constructor == _pieces_king__WEBPACK_IMPORTED_MODULE_5__["default"] && _board__WEBPACK_IMPORTED_MODULE_3__["default"][0][6].firstMove) {
    _board__WEBPACK_IMPORTED_MODULE_3__["default"][0][7].move([`0`, `5`]);
    blackDoCastling = true;
  } else if (_board__WEBPACK_IMPORTED_MODULE_3__["default"][0][2] && _board__WEBPACK_IMPORTED_MODULE_3__["default"][0][2].constructor == _pieces_king__WEBPACK_IMPORTED_MODULE_5__["default"] && _board__WEBPACK_IMPORTED_MODULE_3__["default"][0][2].firstMove) {
    _board__WEBPACK_IMPORTED_MODULE_3__["default"][0][0].move([`0`, `3`]);
    blackDoCastling = true;
  }
};

let pieceElement = false;
chessBoard.addEventListener('click', e => {
  let squareCords = getCord(e);

  if (pieceElement) {
    //jeśli bierek zaznaczony
    if (squareCords[0] == pieceElement.x && squareCords[1] == pieceElement.y) {
      console.log('To samo pole');
      clearMoves(squareCords);
      remSelection([pieceElement.x, pieceElement.y]);
    } else {
      console.log(squareCords.toString());
      console.log(pieceElement.findLegalMoves());

      if (pieceElement.findLegalMoves().includes(squareCords.toString())) {
        moved(squareCords);
        changePlayer.flip();
        console.log('Ruszam');

        if (!whiteDoCastling) {
          whiteCastling();
        }

        if (!blackDoCastling) {
          blackCastling();
        }

        if (pieceElement instanceof _pieces_pawn__WEBPACK_IMPORTED_MODULE_4__["default"] && (squareCords[0] == "0" || squareCords[0] == "7")) {
          //jeśli można dokonać promocji pionka
          pieceElement.promote(squareCords, pieceElement.side);
        }

        if (!whiteDoCastling) {
          whiteCastling();
        }

        if (!blackDoCastling) {
          blackCastling();
        }
      } else {
        console.log('Nie Ruszam');
        clearMoves(squareCords);
        remSelection([pieceElement.x, pieceElement.y]);
      }
    }

    pieceElement = false;
  } else {
    // jesli bierek niezaznaczony
    if (_board__WEBPACK_IMPORTED_MODULE_3__["default"][squareCords[0]][squareCords[1]] && _board__WEBPACK_IMPORTED_MODULE_3__["default"][squareCords[0]][squareCords[1]].side == changePlayer.turn) {
      // jesli na polu bierek i kolor odpowiada kolorowi rundy
      console.log('zaznaczam bierka'); // touched(squareCords);

      pieceElement = _board__WEBPACK_IMPORTED_MODULE_3__["default"][squareCords[0]][squareCords[1]];
      addSelection([pieceElement.x, pieceElement.y]);

      if (!possibleMoves()) {
        remSelection([pieceElement.x, pieceElement.y]);
        pieceElement = false;
      }
    } else {
      //jesli na polu brak bierka
      console.log('na tym polu nie ma bierka');
      return;
    }
  }
});
window.onload = _setup__WEBPACK_IMPORTED_MODULE_2__["default"];
=======
>>>>>>> master

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

<<<<<<< HEAD
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../board */ "./src/board.js");




function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



class Piece {
  constructor(x, y, side) {
    this.x = x;
    this.y = y;
    this.wasMoved = false;
    this.side = side; //'black' or 'white'
  }

  move(_ref) {
    let _ref2 = _slicedToArray(_ref, 2),
        newX = _ref2[0],
        newY = _ref2[1];

    newX = parseInt(newX);
    newY = parseInt(newY); //setting new in new place

    _board__WEBPACK_IMPORTED_MODULE_3__["default"][newX][newY] = _board__WEBPACK_IMPORTED_MODULE_3__["default"][this.x][this.y]; //clearing previous place

    _board__WEBPACK_IMPORTED_MODULE_3__["default"][this.x][this.y] = null;
    document.getElementById(`${this.x},${this.y}`).innerHTML = ""; //setting new

    this.x = newX;
    this.y = newY; // console.log(typeof (this.x), typeof (this.y))

    this.wasMoved ? this.firstMove = false : this.firstMove = true;
    console.log(newY);
    this.wasMoved = true;
    document.getElementById(`${newX},${newY}`).innerHTML = this.display;
  }

  findLegalMoves() {
    ;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Piece);

/***/ }),

/***/ "./src/pieces/bishop.js":
/*!******************************!*\
  !*** ./src/pieces/bishop.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ "./src/pieces/Piece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board */ "./src/board.js");



class Bishop extends _Piece__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'bishop';
    this.display = `<i class="fas fa-chess-bishop ${side}"></i>`; //fontawesome bishop
  }

  findLegalMoves() {
    const possibleMoves = [];
    const dx = [-1, -1, 1, 1];
    const dy = [-1, 1, -1, 1];

    for (let direction = 0; direction < 4; direction++) {
      for (let counter = 1; counter < 8; counter++) {
        let newX = parseInt(this.x) + dx[direction] * counter;
        let newY = parseInt(this.y) + dy[direction] * counter;

        if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
          if (_board__WEBPACK_IMPORTED_MODULE_1__["default"][newX][newY] != null) {
            if (_board__WEBPACK_IMPORTED_MODULE_1__["default"][newX][newY].side != this.side) {
              possibleMoves.push(`${newX},${newY}`);
            }

            break;
          } else {
            possibleMoves.push(`${newX},${newY}`);
          }
        }
      }
    }

    return possibleMoves;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Bishop);

/***/ }),

/***/ "./src/pieces/king.js":
/*!****************************!*\
  !*** ./src/pieces/king.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ "./src/pieces/Piece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board */ "./src/board.js");



class King extends _Piece__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'king';
    this.display = `<i class="fas fa-chess-king ${side}"></i>`; //fontawesome king

    this.firstMove = false;
    this.castling = false;
  }

  findLegalMoves() {
    const possibleMoves = [];
    /* tablica z zakresem dozwolonych ruchów - dla osi X i Y */

    const ruchyXY = [[-1, -1, -1, 0, 1, 1, 1, 0], [-1, 0, 1, 1, 1, 0, -1, -1]];

    for (let direction = 0; direction < 8; direction++) {
      let newX = this.x + ruchyXY[0][direction];
      let newY = this.y + ruchyXY[1][direction]; // console.log(newX, newY)
      // console.log(board[this.x][this.y])

      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        if (_board__WEBPACK_IMPORTED_MODULE_1__["default"][newX][newY] == undefined || _board__WEBPACK_IMPORTED_MODULE_1__["default"][newX][newY].side != this.side) {
          // console.log(newX, newY);
          console.log(_board__WEBPACK_IMPORTED_MODULE_1__["default"][newX][newY]);
          possibleMoves.push(`${newX},${newY}`);
        }
      }
    } //Small castling


    if (!this.wasMoved && !_board__WEBPACK_IMPORTED_MODULE_1__["default"][this.x][7].wasMoved && !_board__WEBPACK_IMPORTED_MODULE_1__["default"][this.x][this.y + 1]) {
      possibleMoves.push(`${this.x},${this.y + 2}`);
    } //Big castling


    if (!this.wasMoved && !_board__WEBPACK_IMPORTED_MODULE_1__["default"][this.x][0].wasMoved && !_board__WEBPACK_IMPORTED_MODULE_1__["default"][this.x][this.y - 1]) {
      possibleMoves.push(`${this.x},${this.y - 2}`);
    }

    return possibleMoves;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (King);

/***/ }),

/***/ "./src/pieces/knight.js":
/*!******************************!*\
  !*** ./src/pieces/knight.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ "./src/pieces/Piece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board */ "./src/board.js");



class Knight extends _Piece__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'knight';
    this.display = `<i class="fas fa-chess-knight ${side}"></i>`; //fontawesome knight
  }

  findLegalMoves() {
    const possibleMoves = [];
    let possX, possY;

    for (let i of [-2, -1, 1, 2]) {
      possX = this.x + i;

      for (let j of [-1, 1]) {
        possY = this.y + j * (3 - Math.abs(i));

        if (possX >= 0 && possX <= 7 && possY >= 0 && possY <= 7) {
          if (_board__WEBPACK_IMPORTED_MODULE_1__["default"][possX][possY] != null ? _board__WEBPACK_IMPORTED_MODULE_1__["default"][possX][possY].side != this.side : true) possibleMoves.push(`${possX},${possY}`);
        }
      }
    }

    console.log(possibleMoves);
    return possibleMoves;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Knight);
=======
>>>>>>> master

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Piece */ "./src/pieces/Piece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board */ "./src/board.js");
/* harmony import */ var _queen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queen */ "./src/pieces/queen.js");
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./knight */ "./src/pieces/knight.js");
/* harmony import */ var _bishop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bishop */ "./src/pieces/bishop.js");
/* harmony import */ var _rook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rook */ "./src/pieces/rook.js");








class Pawn extends _Piece__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'pawn';
    this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }

  findLegalMoves() {
    //console.log(this.x, this.y);
    const possibleMoves = [];
    console.log(possibleMoves);

    if (this.side == 'white') {
      if (this.x != 0) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y + 1] != null) {
          if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y + 1].side != this.side) {
            possibleMoves.push(`${this.x - 1},${this.y + 1}`);
          }
        }

        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y - 1] != null) {
          if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y - 1].side != this.side) {
            possibleMoves.push(`${this.x - 1},${this.y - 1}`);
          }
        }
      }

      if (this.x == 6) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y] == null) {
          possibleMoves.push(`${5},${this.y}`);
        }

        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y] == null && _board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 2][this.y] == null) {
          possibleMoves.push(`${4},${this.y}`);
        }
      } else if (this.x != 0) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y] == null) {
          this.x - 1 >= 0 && possibleMoves.push(`${this.x - 1},${this.y}`);
        }
      }
    }

    if (this.side == 'black') {
      if (this.x != 7) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y - 1] != null) {
          if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y - 1].side != this.side) {
            possibleMoves.push(`${this.x + 1},${this.y - 1}`);
          }
        }

        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y + 1] != null) {
          if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y + 1].side != this.side) {
            possibleMoves.push(`${this.x + 1},${this.y + 1}`);
          }
        }
      }

      if (this.x == 1) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y] == null) {
          possibleMoves.push(`${2},${this.y}`);
        }

        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y] == null && _board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 2][this.y] == null) {
          possibleMoves.push(`${3},${this.y}`);
        }
      } else if (this.x != 7) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y] == null) {
          this.x + 1 <= 7 && possibleMoves.push(`${this.x + 1},${this.y}`);
        }
      }
    }

    return possibleMoves;
  }

  promote(cord, side) {
    console.log('promocja pionka');
    let newX = parseInt(cord[0]);
    let newY = parseInt(cord[1]);
    let promo = document.createElement('div');
    promo.id = 'promo';
    promo.style.left = newY * 10 + 'vh';

    if (side == 'white') {
      promo.style.top = '10vh';
    } else {
      promo.style.bottom = '10vh';
    }

    promo.innerHTML = `<div data-piece="queen" class="square"><i class="fas fa-chess-queen ${side}"></i></div>`;
    promo.innerHTML += `<div data-piece="knight" class="square"><i class="fas fa-chess-knight ${side}"></i></div>`;
    promo.innerHTML += `<div data-piece="bishop" class="square"><i class="fas fa-chess-bishop ${side}"></i></div>`;
    promo.innerHTML += `<div data-piece="rook" class="square"><i class="fas fa-chess-rook ${side}" ></i></div>`;
    document.getElementById('board').appendChild(promo);
    Array.from(promo.getElementsByTagName('div')).forEach(function (element) {
      element.addEventListener('click', e => {
        e.stopPropagation();
        let piece = e.currentTarget.dataset.piece; //console.log(piece);

        let promoteTo;

        switch (piece) {
          case 'queen':
            promoteTo = new _queen__WEBPACK_IMPORTED_MODULE_3__["default"](newX, newY, side);
            break;

          case 'knight':
            promoteTo = new _knight__WEBPACK_IMPORTED_MODULE_4__["default"](newX, newY, side);
            break;

          case 'bishop':
            promoteTo = new _bishop__WEBPACK_IMPORTED_MODULE_5__["default"](newX, newY, side);
            break;

          case 'rook':
            promoteTo = new _rook__WEBPACK_IMPORTED_MODULE_6__["default"](newX, newY, side);
            break;
        }

        _board__WEBPACK_IMPORTED_MODULE_2__["default"][newX][newY] = promoteTo;
        document.getElementById(`${newX},${newY}`).innerHTML = promoteTo.display;
        promo.parentElement.removeChild(promo);
        promo = null;
      });
    });
  }

  enPassant() {}

}

/* harmony default export */ __webpack_exports__["default"] = (Pawn);

/***/ }),

/***/ "./src/pieces/queen.js":
/*!*****************************!*\
  !*** ./src/pieces/queen.js ***!
  \*****************************/
/*! exports provided: default */
=======
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");



class AI {
  constructor(depth, side) {
    try {
      this.stockfish = new Worker("./assets/stockfish/stockfish.js");
    } catch (e) {
      alert('You shall not play! Get normal browser');
    }

    this.stockfish.onmessage = event => {
      if (!event.data.includes('info')) {
        console.log(event.data);

        if (event.data.includes('bestmove')) {
          //bestmove c7c5 ponder g1f3
          // console.log(this.translateToGame(event.data.slice(9, 14)));
          let move = event.data.slice(9, 14);
          this.history += ` ${move}`;
          console.log(this.history);
          move = this.translateToGame(event.data.slice(9, 14));
          console.log(move);
          Object(_main__WEBPACK_IMPORTED_MODULE_1__["engineMoved"])(move);
        }
      } // console.log(event.data);

    };

    this.stockfish.postMessage("ucinewgame");
    this.stockfish.postMessage("isready");
    this.depth = depth; //poziom trudności

    this.side = side; //'black' or 'white' po której stronie gra gracz nie komp

    this.history = '';

    if (this.side == 'black') {
      this.getFirstMove();
    }
  }

  translateToEngine(from, to) {
    to.forEach((el, i, arr) => arr[i] = parseInt(arr[i]));
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
    let newMove = `${files[from[1]]}${ranks[from[0]]}${files[to[1]]}${ranks[to[0]]}`; // console.log(from, to);
    // console.log(newMove);

    return newMove;
  }

  translateToGame(move) {
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];
    const newMove = [];
    newMove.push(ranks.indexOf(move[1]) + ',' + files.indexOf(move[0]));
    newMove.push(ranks.indexOf(move[3]) + ',' + files.indexOf(move[2]));
    return newMove;
  }

  getMove(from, to) {
    const lastMove = this.translateToEngine(from, to);
    this.history += ` ${lastMove}`;
    this.stockfish.postMessage(`position startpos moves ${this.history}`); //moves e2e4 e7e5

    this.stockfish.postMessage(`go depth ${this.depth}`);
    this.stockfish.postMessage("d"); //fajne do testów
  }

  getFirstMove() {
    this.stockfish.postMessage(`position startpos moves ${this.history}`); //moves e2e4 e7e5

    this.stockfish.postMessage(`go depth ${this.depth}`);
    this.stockfish.postMessage("d"); //fajne do testów
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AI);

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default, kingBlack, kingWhite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kingBlack", function() { return kingBlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kingWhite", function() { return kingWhite; });
/* harmony import */ var _pieces_rook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pieces/rook */ "./src/pieces/rook.js");
/* harmony import */ var _pieces_pawn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pieces/pawn */ "./src/pieces/pawn.js");
/* harmony import */ var _pieces_king__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pieces/king */ "./src/pieces/king.js");
/* harmony import */ var _pieces_bishop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pieces/bishop */ "./src/pieces/bishop.js");
/* harmony import */ var _pieces_queen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pieces/queen */ "./src/pieces/queen.js");
/* harmony import */ var _pieces_knight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pieces/knight */ "./src/pieces/knight.js");






const board = new Array(8);

for (let i = 0; i < 8; i++) {
  board[i] = new Array(8);
}

let pawn;

for (let y = 0; y < 8; y++) {
  pawn = new _pieces_pawn__WEBPACK_IMPORTED_MODULE_1__["default"](1, y, 'black');
  board[pawn.x][pawn.y] = pawn;
}

for (let y = 0; y < 8; y++) {
  pawn = new _pieces_pawn__WEBPACK_IMPORTED_MODULE_1__["default"](6, y, 'white');
  board[pawn.x][pawn.y] = pawn;
}

let rook = new _pieces_rook__WEBPACK_IMPORTED_MODULE_0__["default"](7, 0, 'white');
board[rook.x][rook.y] = rook;
rook = new _pieces_rook__WEBPACK_IMPORTED_MODULE_0__["default"](7, 7, 'white');
board[rook.x][rook.y] = rook;
rook = new _pieces_rook__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 'black');
board[rook.x][rook.y] = rook;
rook = new _pieces_rook__WEBPACK_IMPORTED_MODULE_0__["default"](0, 7, 'black');
board[rook.x][rook.y] = rook;
let bishop = new _pieces_bishop__WEBPACK_IMPORTED_MODULE_3__["default"](0, 2, 'black');
board[bishop.x][bishop.y] = bishop;
bishop = new _pieces_bishop__WEBPACK_IMPORTED_MODULE_3__["default"](0, 5, 'black');
board[bishop.x][bishop.y] = bishop;
bishop = new _pieces_bishop__WEBPACK_IMPORTED_MODULE_3__["default"](7, 2, 'white');
board[bishop.x][bishop.y] = bishop;
bishop = new _pieces_bishop__WEBPACK_IMPORTED_MODULE_3__["default"](7, 5, 'white');
board[bishop.x][bishop.y] = bishop;
let queen = new _pieces_queen__WEBPACK_IMPORTED_MODULE_4__["default"](7, 3, 'white');
board[queen.x][queen.y] = queen;
queen = new _pieces_queen__WEBPACK_IMPORTED_MODULE_4__["default"](0, 3, 'black');
board[queen.x][queen.y] = queen;
let knight = new _pieces_knight__WEBPACK_IMPORTED_MODULE_5__["default"](7, 1, 'white');
board[knight.x][knight.y] = knight;
knight = new _pieces_knight__WEBPACK_IMPORTED_MODULE_5__["default"](7, 6, 'white');
board[knight.x][knight.y] = knight;
knight = new _pieces_knight__WEBPACK_IMPORTED_MODULE_5__["default"](0, 1, 'black');
board[knight.x][knight.y] = knight;
knight = new _pieces_knight__WEBPACK_IMPORTED_MODULE_5__["default"](0, 6, 'black');
board[knight.x][knight.y] = knight;
const kingWhite = new _pieces_king__WEBPACK_IMPORTED_MODULE_2__["default"](7, 4, 'white');
board[kingWhite.x][kingWhite.y] = kingWhite;
const kingBlack = new _pieces_king__WEBPACK_IMPORTED_MODULE_2__["default"](0, 4, 'black');
board[kingBlack.x][kingBlack.y] = kingBlack;
/* harmony default export */ __webpack_exports__["default"] = (board);



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: engineMoved */
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Piece */ "./src/pieces/Piece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board */ "./src/board.js");




class Queen extends _Piece__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'queen';
    this.display = `<i class="fas fa-chess-queen ${side}"></i>`; //fontawesome queen
  }

  findLegalMoves() {
    let possibleMoves = []; //movement rock

    for (let i = 0; i < _board__WEBPACK_IMPORTED_MODULE_2__["default"].length; i++) {
      possibleMoves[i] = [this.x, i];
      possibleMoves[i + _board__WEBPACK_IMPORTED_MODULE_2__["default"].length] = [i, this.y];
    }

    possibleMoves.forEach(el => {
      if (el[0] == [this.x] && el[1] == [this.y]) {
        delete possibleMoves[possibleMoves.indexOf(el)];
      }
    }); //Tworzę tablice, które zawierają położenie białych i czarnych figur na szachownicy.

    const blackFigure = [];
    const whiteFigure = [];

    for (let x = 0; x < _board__WEBPACK_IMPORTED_MODULE_2__["default"].length; x++) {
      blackFigure[x] = [];
      whiteFigure[x] = [];

      for (let y = 0; y < _board__WEBPACK_IMPORTED_MODULE_2__["default"][x].length; y++) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y] && _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].side == "black") {
          blackFigure[x][y] = [];
          blackFigure[x][y][0] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].x;
          blackFigure[x][y][1] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].y;
          blackFigure[x][y][2] = "black";
        }

        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y] && _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].side == "white") {
          whiteFigure[x][y] = [];
          whiteFigure[x][y][0] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].x;
          whiteFigure[x][y][1] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].y;
          whiteFigure[x][y][2] = "white";
        }
      }
    }

    const imposibleMoves = []; //Wyszukuję pola, na których znajdują się białe figury

    if (this.side == "white") {
      possibleMoves.forEach(el => {
        for (let a = 0; a < whiteFigure.length; a++) {
          for (let b = 0; b < whiteFigure[a].length; b++) {
            if (whiteFigure[a][b]) {
              for (let c = 0; c < whiteFigure[a][b].length; c++) {
                if (el[0] == whiteFigure[a][b][0] && el[1] == whiteFigure[a][b][1] && whiteFigure[a][b][2] == "white") {
                  imposibleMoves.push(el);
                }
              }
            }
          }
        }
      });
    } // Wyszukuję pola, na których znajdują się czarne figury


    if (this.side == "black") {
      possibleMoves.forEach(el => {
        for (let a = 0; a < blackFigure.length; a++) {
          for (let b = 0; b < blackFigure[a].length; b++) {
            if (blackFigure[a][b]) {
              for (let c = 0; c < blackFigure[a][b].length; c++) {
                if (el[0] == blackFigure[a][b][0] && el[1] == blackFigure[a][b][1] && blackFigure[a][b][2] == "black") {
                  imposibleMoves.push(el);
                }
              }
            }
          }
        }
      });
    } //Usunięcie z możliwych ruchów pól, na których znajdują się moje figury oraz wyłączenie możliwości przeskakiwania ich.


    possibleMoves.forEach(el => {
      imposibleMoves.forEach(move => {
        if (el[1] == move[1]) {
          possibleMoves.forEach(i => {
            if (i[1] == move[1] && i[0] < this.x && i[0] < move[0] && move[0] < this.x || i[1] == move[1] && i[0] > this.x && i[0] > move[0] && move[0] > this.x) {
              delete possibleMoves[possibleMoves.indexOf(i)];
            }
          });
        } else if (el[0] == move[0]) {
          possibleMoves.forEach(i => {
            if (i[0] == move[0] && i[1] < this.y && i[1] < move[1] && move[1] < this.y || i[0] == move[0] && i[1] > this.y && i[1] > move[1] && move[1] > this.y) {
              delete possibleMoves[possibleMoves.indexOf(i)];
            }
          });
        }

        if (el == move) {
          delete possibleMoves[possibleMoves.indexOf(el)];
        }
      });
    }); //Usunięcie możliwości przeskakiwania figur przeciwnika

    if (this.side == "white") {
      for (let i = 0; i < possibleMoves.length; i++) {
        for (let j = 0; j < blackFigure.length; j++) {
          for (let k = 0; k < blackFigure[j].length; k++) {
            if (possibleMoves[i]) {
              if (blackFigure[j][k]) {
                if (possibleMoves[i][1] == blackFigure[j][k][1] && possibleMoves[i][0] < blackFigure[j][k][0] && possibleMoves[i][0] < this.x && blackFigure[j][k][0] < this.x || possibleMoves[i][1] == blackFigure[j][k][1] && possibleMoves[i][0] > blackFigure[j][k][0] && possibleMoves[i][0] > this.x && blackFigure[j][k][0] > this.x || possibleMoves[i][0] == blackFigure[j][k][0] && possibleMoves[i][1] > blackFigure[j][k][1] && possibleMoves[i][1] > this.y && blackFigure[j][k][1] > this.y || possibleMoves[i][0] == blackFigure[j][k][0] && possibleMoves[i][1] < blackFigure[j][k][1] && possibleMoves[i][1] < this.y && blackFigure[j][k][1] < this.y) {
                  delete possibleMoves[i];
                }
              }
            }
          }
        }
      }
    }

    if (this.side == "black") {
      for (let i = 0; i < possibleMoves.length; i++) {
        for (let j = 0; j < whiteFigure.length; j++) {
          for (let k = 0; k < whiteFigure[j].length; k++) {
            if (possibleMoves[i]) {
              if (whiteFigure[j][k]) {
                if (possibleMoves[i][1] == whiteFigure[j][k][1] && possibleMoves[i][0] < whiteFigure[j][k][0] && possibleMoves[i][0] < this.x && whiteFigure[j][k][0] < this.x || possibleMoves[i][1] == whiteFigure[j][k][1] && possibleMoves[i][0] > whiteFigure[j][k][0] && possibleMoves[i][0] > this.x && whiteFigure[j][k][0] > this.x || possibleMoves[i][0] == whiteFigure[j][k][0] && possibleMoves[i][1] > whiteFigure[j][k][1] && possibleMoves[i][1] > this.y && whiteFigure[j][k][1] > this.y || possibleMoves[i][0] == whiteFigure[j][k][0] && possibleMoves[i][1] < whiteFigure[j][k][1] && possibleMoves[i][1] < this.y && whiteFigure[j][k][1] < this.y) {
                  delete possibleMoves[i];
                }
              }
            }
          }
        }
      }
    }

    possibleMoves = possibleMoves.filter(el => el);
    possibleMoves.forEach((el, i, arr) => arr[i] = `${el[0]},${el[1]}`); //movement bishop

    const dx = [-1, -1, 1, 1];
    const dy = [-1, 1, -1, 1];

    for (let direction = 0; direction < 4; direction++) {
      for (let counter = 1; counter < 8; counter++) {
        let newX = parseInt(this.x) + dx[direction] * counter;
        let newY = parseInt(this.y) + dy[direction] * counter;

        if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
          if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][newX][newY] != null) {
            if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][newX][newY].side != this.side) {
              possibleMoves.push(`${newX},${newY}`);
            }

            break;
          } else {
            possibleMoves.push(`${newX},${newY}`);
          }
        }
      }
    }

    console.log(possibleMoves);
    return possibleMoves;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Queen);

/***/ }),

/***/ "./src/pieces/rook.js":
/*!****************************!*\
  !*** ./src/pieces/rook.js ***!
  \****************************/
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "engineMoved", function() { return engineMoved; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _pieces_pawn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pieces/pawn */ "./src/pieces/pawn.js");
/* harmony import */ var _pieces_king__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pieces/king */ "./src/pieces/king.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setup */ "./src/setup.js");






function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 //checkWinner();

const chessBoard = document.getElementById('board');
const changePlayer = {
  _turn: ['white', 'black'],

  get turn() {
    return this._turn[0];
  },

  flip() {
    this._turn.reverse();
  }

};

const getCord = e => {
  if (e.target.localName === 'div') {
    return [e.target.id[0], e.target.id[2]];
  } else {
    return [e.target.parentNode.id[0], e.target.parentNode.id[2]];
  }
};

const possibleMoves = () => {
  //console.log('LEGITNE: '+ pieceElement.findLegalMoves());
  for (let posmov of pieceElement.findLegalMoves()) {
    document.getElementById(posmov).className += ' possibleMove';
  }

  return pieceElement.findLegalMoves() == '' ? false : true;
};

const moved = cord => {
  console.log(cord);
  _settings__WEBPACK_IMPORTED_MODULE_5__["engine"] && pieceElement.side == _settings__WEBPACK_IMPORTED_MODULE_5__["engine"].side && _settings__WEBPACK_IMPORTED_MODULE_5__["engine"].getMove([pieceElement.x, pieceElement.y], cord);
  pieceElement.move(cord);
  clearMoves(cord);
};

const engineMoved = (_ref) => {
  let _ref2 = _slicedToArray(_ref, 2),
      from = _ref2[0],
      to = _ref2[1];

  // console.log(from);
  // console.log(to);
  const pieceMoved = _board__WEBPACK_IMPORTED_MODULE_6__["default"][parseInt(from[0])][parseInt(from[2])]; // console.log(pieceMoved)

  pieceMoved.move([to[0], to[2]]);
  changePlayer.flip();
};

const addSelection = cord => {
  document.getElementById(`${cord[0]},${cord[1]}`).firstElementChild.className += ' selected';
};

const remSelection = cord => {
  document.getElementById(`${cord[0]},${cord[1]}`).firstElementChild.className = document.getElementById(`${cord[0]},${cord[1]}`).firstElementChild.className.replace('selected', '');
};

const clearMoves = cord => {
  for (let x = 0; x < _board__WEBPACK_IMPORTED_MODULE_6__["default"].length; x++) {
    for (let y = 0; y < _board__WEBPACK_IMPORTED_MODULE_6__["default"][x].length; y++) {
      document.getElementById(`${x},${y}`).className = document.getElementById(`${x},${y}`).className.replace(`possibleMove`, '');
    }
  }
};

let whiteDoCastling = false;
let blackDoCastling = false;

const whiteCastling = () => {
  if (_board__WEBPACK_IMPORTED_MODULE_6__["default"][7][6] && _board__WEBPACK_IMPORTED_MODULE_6__["default"][7][6].constructor == _pieces_king__WEBPACK_IMPORTED_MODULE_8__["default"] && _board__WEBPACK_IMPORTED_MODULE_6__["default"][7][6].firstMove) {
    _board__WEBPACK_IMPORTED_MODULE_6__["default"][7][7].move([`7`, `5`]);
    whiteDoCastling = true;
  } else if (_board__WEBPACK_IMPORTED_MODULE_6__["default"][7][2] && _board__WEBPACK_IMPORTED_MODULE_6__["default"][7][2].constructor == _pieces_king__WEBPACK_IMPORTED_MODULE_8__["default"] && _board__WEBPACK_IMPORTED_MODULE_6__["default"][7][2].firstMove) {
    _board__WEBPACK_IMPORTED_MODULE_6__["default"][7][0].move([`7`, `3`]);
    whiteDoCastling = true;
  }
};

const blackCastling = () => {
  if (_board__WEBPACK_IMPORTED_MODULE_6__["default"][0][6] && _board__WEBPACK_IMPORTED_MODULE_6__["default"][0][6].constructor == _pieces_king__WEBPACK_IMPORTED_MODULE_8__["default"] && _board__WEBPACK_IMPORTED_MODULE_6__["default"][0][6].firstMove) {
    _board__WEBPACK_IMPORTED_MODULE_6__["default"][0][7].move([`0`, `5`]);
    blackDoCastling = true;
  } else if (_board__WEBPACK_IMPORTED_MODULE_6__["default"][0][2] && _board__WEBPACK_IMPORTED_MODULE_6__["default"][0][2].constructor == _pieces_king__WEBPACK_IMPORTED_MODULE_8__["default"] && _board__WEBPACK_IMPORTED_MODULE_6__["default"][0][2].firstMove) {
    _board__WEBPACK_IMPORTED_MODULE_6__["default"][0][0].move([`0`, `3`]);
    blackDoCastling = true;
  }
};

let pieceElement = false;
chessBoard.addEventListener('click', e => {
  let squareCords = getCord(e);

  if (pieceElement) {
    //jeśli bierek zaznaczony
    if (squareCords[0] == pieceElement.x && squareCords[1] == pieceElement.y) {
      console.log('To samo pole');
      clearMoves(squareCords);
      remSelection([pieceElement.x, pieceElement.y]);
    } else {
      // console.log(squareCords.toString());
      // console.log(pieceElement.findLegalMoves())
      if (pieceElement.findLegalMoves().includes(squareCords.toString())) {
        moved(squareCords);
        changePlayer.flip();
        console.log('Ruszam');

        if (!whiteDoCastling) {
          whiteCastling();
        }

        if (!blackDoCastling) {
          blackCastling();
        }

        if (pieceElement instanceof _pieces_pawn__WEBPACK_IMPORTED_MODULE_7__["default"] && (squareCords[0] == "0" || squareCords[0] == "7")) {
          //jeśli można dokonać promocji pionka
          pieceElement.promote(squareCords, pieceElement.side);
        }

        if (!whiteDoCastling) {
          whiteCastling();
        }

        if (!blackDoCastling) {
          blackCastling();
        }
      } else {
        console.log('Nie Ruszam');
        clearMoves(squareCords);
        remSelection([pieceElement.x, pieceElement.y]);
      }
    }

    pieceElement = false;
  } else {
    // jesli bierek niezaznaczony
    if (_settings__WEBPACK_IMPORTED_MODULE_5__["engine"] && _board__WEBPACK_IMPORTED_MODULE_6__["default"][squareCords[0]][squareCords[1]] && _board__WEBPACK_IMPORTED_MODULE_6__["default"][squareCords[0]][squareCords[1]].side != _settings__WEBPACK_IMPORTED_MODULE_5__["engine"].side) {
      console.log('Ruszasz się nie swoją bierką');
      return;
    }

    if (_board__WEBPACK_IMPORTED_MODULE_6__["default"][squareCords[0]][squareCords[1]] && _board__WEBPACK_IMPORTED_MODULE_6__["default"][squareCords[0]][squareCords[1]].side == changePlayer.turn) {
      // jesli na polu bierek i kolor odpowiada kolorowi rundy
      console.log('zaznaczam bierka');
      console.log(squareCords);
      pieceElement = _board__WEBPACK_IMPORTED_MODULE_6__["default"][squareCords[0]][squareCords[1]];
      addSelection([pieceElement.x, pieceElement.y]);

      if (!possibleMoves()) {
        remSelection([pieceElement.x, pieceElement.y]);
        pieceElement = false;
      }
    } else {
      //jesli na polu brak bierka
      console.log('na tym polu nie ma bierka');
      return;
    }
  }
});

const checkMate = () => {
  let white = 0;
  let black = 0;
  console.log(`${_board__WEBPACK_IMPORTED_MODULE_6__["kingBlack"].x},${_board__WEBPACK_IMPORTED_MODULE_6__["kingBlack"].y}` + "TOTOTOTOTOT");

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (_board__WEBPACK_IMPORTED_MODULE_6__["default"][x][y] != null) {
        _board__WEBPACK_IMPORTED_MODULE_6__["default"][x][y].findLegalMoves().forEach(element => {
          if (_board__WEBPACK_IMPORTED_MODULE_6__["default"][x][y].side != 'white' && element === `${_board__WEBPACK_IMPORTED_MODULE_6__["kingWhite"].x},${_board__WEBPACK_IMPORTED_MODULE_6__["kingWhite"].y}`) {
            console.log("SZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH BIAŁY");
          }

          if (_board__WEBPACK_IMPORTED_MODULE_6__["default"][x][y].side != 'black' && element === `${_board__WEBPACK_IMPORTED_MODULE_6__["kingBlack"].x},${_board__WEBPACK_IMPORTED_MODULE_6__["kingBlack"].y}`) {
            console.log("SZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH CZARNY");
          }
        });
      }
    }
  }
};

window.onload = _setup__WEBPACK_IMPORTED_MODULE_9__["default"];


/***/ }),

/***/ "./src/pieces/Piece.js":
/*!*****************************!*\
  !*** ./src/pieces/Piece.js ***!
  \*****************************/
>>>>>>> master
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Piece */ "./src/pieces/Piece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board */ "./src/board.js");




class Rook extends _Piece__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'rook';
    this.display = `<i class="fas fa-chess-rook ${side}"></i>`; //fontawesome rook
  }

  findLegalMoves() {
    let possibleMoves = [];

    for (let i = 0; i < _board__WEBPACK_IMPORTED_MODULE_2__["default"].length; i++) {
      possibleMoves[i] = [this.x, i];
      possibleMoves[i + _board__WEBPACK_IMPORTED_MODULE_2__["default"].length] = [i, this.y];
    }

    possibleMoves.forEach(el => {
      if (el[0] == [this.x] && el[1] == [this.y]) {
        delete possibleMoves[possibleMoves.indexOf(el)];
      }
    }); //Tworzę tablice, które zawierają położenie białych i czarnych figur na szachownicy.

    const blackFigure = [];
    const whiteFigure = [];

    for (let x = 0; x < _board__WEBPACK_IMPORTED_MODULE_2__["default"].length; x++) {
      blackFigure[x] = [];
      whiteFigure[x] = [];

      for (let y = 0; y < _board__WEBPACK_IMPORTED_MODULE_2__["default"][x].length; y++) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y] && _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].side == "black") {
          blackFigure[x][y] = [];
          blackFigure[x][y][0] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].x;
          blackFigure[x][y][1] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].y;
          blackFigure[x][y][2] = "black";
        }

        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y] && _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].side == "white") {
          whiteFigure[x][y] = [];
          whiteFigure[x][y][0] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].x;
          whiteFigure[x][y][1] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].y;
          whiteFigure[x][y][2] = "white";
        }
      }
    }

    const imposibleMoves = []; //Wyszukuję pola, na których znajdują się białe figury

    if (this.side == "white") {
      possibleMoves.forEach(el => {
        for (let a = 0; a < whiteFigure.length; a++) {
          for (let b = 0; b < whiteFigure[a].length; b++) {
            if (whiteFigure[a][b]) {
              for (let c = 0; c < whiteFigure[a][b].length; c++) {
                if (el[0] == whiteFigure[a][b][0] && el[1] == whiteFigure[a][b][1] && whiteFigure[a][b][2] == "white") {
                  imposibleMoves.push(el);
                }
              }
            }
          }
        }
      });
    } // Wyszukuję pola, na których znajdują się czarne figury


    if (this.side == "black") {
      possibleMoves.forEach(el => {
        for (let a = 0; a < blackFigure.length; a++) {
          for (let b = 0; b < blackFigure[a].length; b++) {
            if (blackFigure[a][b]) {
              for (let c = 0; c < blackFigure[a][b].length; c++) {
                if (el[0] == blackFigure[a][b][0] && el[1] == blackFigure[a][b][1] && blackFigure[a][b][2] == "black") {
                  imposibleMoves.push(el);
                }
              }
            }
          }
        }
      });
      possibleMoves = possibleMoves.filter(el => el);
      possibleMoves.forEach((el, i, arr) => arr[i] = `${el[0]},${el[1]}`); // console.log(possibleMoves);

      return possibleMoves;
    } //Usunięcie z możliwych ruchów pól, na których znajdują się moje figury oraz wyłączenie możliwości przeskakiwania ich.


    possibleMoves.forEach(el => {
      imposibleMoves.forEach(move => {
        if (el[1] == move[1]) {
          possibleMoves.forEach(i => {
            if (i[1] == move[1] && i[0] < this.x && i[0] < move[0] && move[0] < this.x || i[1] == move[1] && i[0] > this.x && i[0] > move[0] && move[0] > this.x) {
              delete possibleMoves[possibleMoves.indexOf(i)];
            }
          });
        } else if (el[0] == move[0]) {
          possibleMoves.forEach(i => {
            if (i[0] == move[0] && i[1] < this.y && i[1] < move[1] && move[1] < this.y || i[0] == move[0] && i[1] > this.y && i[1] > move[1] && move[1] > this.y) {
              delete possibleMoves[possibleMoves.indexOf(i)];
            }
          });
        }

        if (el == move) {
          delete possibleMoves[possibleMoves.indexOf(el)];
        }
      });
    }); //Usunięcie możliwości przeskakiwania figur przeciwnika

    if (this.side == "white") {
      for (let i = 0; i < possibleMoves.length; i++) {
        for (let j = 0; j < blackFigure.length; j++) {
          for (let k = 0; k < blackFigure[j].length; k++) {
            if (possibleMoves[i]) {
              if (blackFigure[j][k]) {
                if (possibleMoves[i][1] == blackFigure[j][k][1] && possibleMoves[i][0] < blackFigure[j][k][0] && possibleMoves[i][0] < this.x && blackFigure[j][k][0] < this.x || possibleMoves[i][1] == blackFigure[j][k][1] && possibleMoves[i][0] > blackFigure[j][k][0] && possibleMoves[i][0] > this.x && blackFigure[j][k][0] > this.x || possibleMoves[i][0] == blackFigure[j][k][0] && possibleMoves[i][1] > blackFigure[j][k][1] && possibleMoves[i][1] > this.y && blackFigure[j][k][1] > this.y || possibleMoves[i][0] == blackFigure[j][k][0] && possibleMoves[i][1] < blackFigure[j][k][1] && possibleMoves[i][1] < this.y && blackFigure[j][k][1] < this.y) {
                  delete possibleMoves[i];
                }
              }
            }
          }
=======
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../board */ "./src/board.js");




function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



class Piece {
  constructor(x, y, side) {
    this.x = x;
    this.y = y;
    this.wasMoved = false;
    this.side = side; //'black' or 'white'
  }

  move(_ref) {
    let _ref2 = _slicedToArray(_ref, 2),
        newX = _ref2[0],
        newY = _ref2[1];

    newX = parseInt(newX);
    newY = parseInt(newY); //setting new in new place

    _board__WEBPACK_IMPORTED_MODULE_3__["default"][newX][newY] = _board__WEBPACK_IMPORTED_MODULE_3__["default"][this.x][this.y]; //clearing previous place

    _board__WEBPACK_IMPORTED_MODULE_3__["default"][this.x][this.y] = null;
    document.getElementById(`${this.x},${this.y}`).innerHTML = ""; //setting new

    this.x = newX;
    this.y = newY; // console.log(typeof (this.x), typeof (this.y))

    this.wasMoved ? this.firstMove = false : this.firstMove = true;
    console.log(newY);
    this.wasMoved = true;
    document.getElementById(`${newX},${newY}`).innerHTML = this.display;
  }

  findLegalMoves() {
    ;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Piece);

/***/ }),

/***/ "./src/pieces/bishop.js":
/*!******************************!*\
  !*** ./src/pieces/bishop.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ "./src/pieces/Piece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board */ "./src/board.js");



class Bishop extends _Piece__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'bishop';
    this.display = `<i class="fas fa-chess-bishop ${side}"></i>`; //fontawesome bishop
  }

  findLegalMoves() {
    const possibleMoves = [];
    const dx = [-1, -1, 1, 1];
    const dy = [-1, 1, -1, 1];

    for (let direction = 0; direction < 4; direction++) {
      for (let counter = 1; counter < 8; counter++) {
        let newX = parseInt(this.x) + dx[direction] * counter;
        let newY = parseInt(this.y) + dy[direction] * counter;

        if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
          if (_board__WEBPACK_IMPORTED_MODULE_1__["default"][newX][newY] != null) {
            if (_board__WEBPACK_IMPORTED_MODULE_1__["default"][newX][newY].side != this.side) {
              possibleMoves.push(`${newX},${newY}`);
            }

            break;
          } else {
            possibleMoves.push(`${newX},${newY}`);
          }
        }
      }
    }

    return possibleMoves;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Bishop);

/***/ }),

/***/ "./src/pieces/king.js":
/*!****************************!*\
  !*** ./src/pieces/king.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ "./src/pieces/Piece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board */ "./src/board.js");



class King extends _Piece__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'king';
    this.display = `<i class="fas fa-chess-king ${side}"></i>`; //fontawesome king

    this.firstMove = false;
    this.castling = false;
  }

  findLegalMoves() {
    const possibleMoves = [];
    /* tablica z zakresem dozwolonych ruchów - dla osi X i Y */

    const ruchyXY = [[-1, -1, -1, 0, 1, 1, 1, 0], [-1, 0, 1, 1, 1, 0, -1, -1]];

    for (let direction = 0; direction < 8; direction++) {
      let newX = this.x + ruchyXY[0][direction];
      let newY = this.y + ruchyXY[1][direction]; // console.log(newX, newY)
      // console.log(board[this.x][this.y])

      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        if (_board__WEBPACK_IMPORTED_MODULE_1__["default"][newX][newY] == undefined || _board__WEBPACK_IMPORTED_MODULE_1__["default"][newX][newY].side != this.side) {
          // console.log(newX, newY);
          console.log(_board__WEBPACK_IMPORTED_MODULE_1__["default"][newX][newY]);
          possibleMoves.push(`${newX},${newY}`);
        }
      }
    } //Small castling


    if (!this.wasMoved && !_board__WEBPACK_IMPORTED_MODULE_1__["default"][this.x][7].wasMoved && !_board__WEBPACK_IMPORTED_MODULE_1__["default"][this.x][this.y + 1]) {
      possibleMoves.push(`${this.x},${this.y + 2}`);
    } //Big castling


    if (!this.wasMoved && !_board__WEBPACK_IMPORTED_MODULE_1__["default"][this.x][0].wasMoved && !_board__WEBPACK_IMPORTED_MODULE_1__["default"][this.x][this.y - 1]) {
      possibleMoves.push(`${this.x},${this.y - 2}`);
    }

    return possibleMoves;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (King);

/***/ }),

/***/ "./src/pieces/knight.js":
/*!******************************!*\
  !*** ./src/pieces/knight.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ "./src/pieces/Piece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board */ "./src/board.js");



class Knight extends _Piece__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'knight';
    this.display = `<i class="fas fa-chess-knight ${side}"></i>`; //fontawesome knight
  }

  findLegalMoves() {
    const possibleMoves = [];
    let possX, possY;

    for (let i of [-2, -1, 1, 2]) {
      possX = this.x + i;

      for (let j of [-1, 1]) {
        possY = this.y + j * (3 - Math.abs(i));

        if (possX >= 0 && possX <= 7 && possY >= 0 && possY <= 7) {
          if (_board__WEBPACK_IMPORTED_MODULE_1__["default"][possX][possY] != null ? _board__WEBPACK_IMPORTED_MODULE_1__["default"][possX][possY].side != this.side : true) possibleMoves.push(`${possX},${possY}`);
        }
      }
    } // console.log(possibleMoves);


    return possibleMoves;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Knight);

/***/ }),

/***/ "./src/pieces/pawn.js":
/*!****************************!*\
  !*** ./src/pieces/pawn.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Piece */ "./src/pieces/Piece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board */ "./src/board.js");
/* harmony import */ var _queen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queen */ "./src/pieces/queen.js");
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./knight */ "./src/pieces/knight.js");
/* harmony import */ var _bishop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bishop */ "./src/pieces/bishop.js");
/* harmony import */ var _rook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rook */ "./src/pieces/rook.js");








class Pawn extends _Piece__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'pawn';
    this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
  }

  findLegalMoves() {
    //console.log(this.x, this.y);
    const possibleMoves = []; // console.log(possibleMoves);

    if (this.side == 'white') {
      if (this.x != 0) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y + 1] != null) {
          if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y + 1].side != this.side) {
            possibleMoves.push(`${this.x - 1},${this.y + 1}`);
          }
        }

        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y - 1] != null) {
          if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y - 1].side != this.side) {
            possibleMoves.push(`${this.x - 1},${this.y - 1}`);
          }
        }
      }

      if (this.x == 6) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y] == null) {
          possibleMoves.push(`${5},${this.y}`);
        }

        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y] == null && _board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 2][this.y] == null) {
          possibleMoves.push(`${4},${this.y}`);
        }
      } else if (this.x != 0) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x - 1][this.y] == null) {
          this.x - 1 > 0 && possibleMoves.push(`${this.x - 1},${this.y}`);
>>>>>>> master
        }
      }
    }

<<<<<<< HEAD
    if (this.side == "black") {
      for (let i = 0; i < possibleMoves.length; i++) {
        for (let j = 0; j < whiteFigure.length; j++) {
          for (let k = 0; k < whiteFigure[j].length; k++) {
            if (possibleMoves[i]) {
              if (whiteFigure[j][k]) {
                if (possibleMoves[i][1] == whiteFigure[j][k][1] && possibleMoves[i][0] < whiteFigure[j][k][0] && possibleMoves[i][0] < this.x && whiteFigure[j][k][0] < this.x || possibleMoves[i][1] == whiteFigure[j][k][1] && possibleMoves[i][0] > whiteFigure[j][k][0] && possibleMoves[i][0] > this.x && whiteFigure[j][k][0] > this.x || possibleMoves[i][0] == whiteFigure[j][k][0] && possibleMoves[i][1] > whiteFigure[j][k][1] && possibleMoves[i][1] > this.y && whiteFigure[j][k][1] > this.y || possibleMoves[i][0] == whiteFigure[j][k][0] && possibleMoves[i][1] < whiteFigure[j][k][1] && possibleMoves[i][1] < this.y && whiteFigure[j][k][1] < this.y) {
                  delete possibleMoves[i];
                }
              }
            }
          }
        }
      }
    }

    possibleMoves = possibleMoves.filter(el => el);
    possibleMoves.forEach((el, i, arr) => arr[i] = `${el[0]},${el[1]}`);
    console.log(possibleMoves);
    console.log(this);
    return possibleMoves;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Rook);

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
=======
    if (this.side == 'black') {
      if (this.x != 7) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y - 1] != null) {
          if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y - 1].side != this.side) {
            possibleMoves.push(`${this.x + 1},${this.y - 1}`);
          }
        }

        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y + 1] != null) {
          if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y + 1].side != this.side) {
            possibleMoves.push(`${this.x + 1},${this.y + 1}`);
          }
        }
      }

      if (this.x == 1) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y] == null) {
          possibleMoves.push(`${2},${this.y}`);
        }

        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y] == null && _board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 2][this.y] == null) {
          possibleMoves.push(`${3},${this.y}`);
        }
      } else if (this.x != 7) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][this.x + 1][this.y] == null) {
          this.x + 1 > 0 && possibleMoves.push(`${this.x + 1},${this.y}`);
        }
      }
    }

    return possibleMoves;
  }

  promote(cord, side) {
    console.log('promocja pionka');
    let newX = parseInt(cord[0]);
    let newY = parseInt(cord[1]);
    let promo = document.createElement('div');
    promo.id = 'promo';
    promo.style.left = newY * 10 + 'vh';

    if (side == 'white') {
      promo.style.top = '10vh';
    } else {
      promo.style.bottom = '10vh';
    }

    promo.innerHTML = `<div data-piece="queen" class="square"><i class="fas fa-chess-queen ${side}"></i></div>`;
    promo.innerHTML += `<div data-piece="knight" class="square"><i class="fas fa-chess-knight ${side}"></i></div>`;
    promo.innerHTML += `<div data-piece="bishop" class="square"><i class="fas fa-chess-bishop ${side}"></i></div>`;
    promo.innerHTML += `<div data-piece="rook" class="square"><i class="fas fa-chess-rook ${side}" ></i></div>`;
    document.getElementById('board').appendChild(promo);
    Array.from(promo.getElementsByTagName('div')).forEach(function (element) {
      element.addEventListener('click', e => {
        e.stopPropagation();
        let piece = e.currentTarget.dataset.piece; //console.log(piece);

        let promoteTo;

        switch (piece) {
          case 'queen':
            promoteTo = new _queen__WEBPACK_IMPORTED_MODULE_3__["default"](newX, newY, side);
            break;

          case 'knight':
            promoteTo = new _knight__WEBPACK_IMPORTED_MODULE_4__["default"](newX, newY, side);
            break;

          case 'bishop':
            promoteTo = new _bishop__WEBPACK_IMPORTED_MODULE_5__["default"](newX, newY, side);
            break;

          case 'rook':
            promoteTo = new _rook__WEBPACK_IMPORTED_MODULE_6__["default"](newX, newY, side);
            break;
        }

        _board__WEBPACK_IMPORTED_MODULE_2__["default"][newX][newY] = promoteTo;
        document.getElementById(`${newX},${newY}`).innerHTML = promoteTo.display;
        promo.parentElement.removeChild(promo);
        promo = null;
      });
    });
  }

  enPassant() {}

}

/* harmony default export */ __webpack_exports__["default"] = (Pawn);

/***/ }),

/***/ "./src/pieces/queen.js":
/*!*****************************!*\
  !*** ./src/pieces/queen.js ***!
  \*****************************/
>>>>>>> master
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");
=======
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Piece */ "./src/pieces/Piece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board */ "./src/board.js");




class Queen extends _Piece__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'queen';
    this.display = `<i class="fas fa-chess-queen ${side}"></i>`; //fontawesome queen
  }

  findLegalMoves() {
    let possibleMoves = []; //movement rock

    for (let i = 0; i < _board__WEBPACK_IMPORTED_MODULE_2__["default"].length; i++) {
      possibleMoves[i] = [this.x, i];
      possibleMoves[i + _board__WEBPACK_IMPORTED_MODULE_2__["default"].length] = [i, this.y];
    }

    possibleMoves.forEach(el => {
      if (el[0] == [this.x] && el[1] == [this.y]) {
        delete possibleMoves[possibleMoves.indexOf(el)];
      }
    }); //Tworzę tablice, które zawierają położenie białych i czarnych figur na szachownicy.

    const blackFigure = [];
    const whiteFigure = [];

    for (let x = 0; x < _board__WEBPACK_IMPORTED_MODULE_2__["default"].length; x++) {
      blackFigure[x] = [];
      whiteFigure[x] = [];

      for (let y = 0; y < _board__WEBPACK_IMPORTED_MODULE_2__["default"][x].length; y++) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y] && _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].side == "black") {
          blackFigure[x][y] = [];
          blackFigure[x][y][0] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].x;
          blackFigure[x][y][1] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].y;
          blackFigure[x][y][2] = "black";
        }

        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y] && _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].side == "white") {
          whiteFigure[x][y] = [];
          whiteFigure[x][y][0] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].x;
          whiteFigure[x][y][1] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].y;
          whiteFigure[x][y][2] = "white";
        }
      }
    }

    const imposibleMoves = []; //Wyszukuję pola, na których znajdują się białe figury

    if (this.side == "white") {
      possibleMoves.forEach(el => {
        for (let a = 0; a < whiteFigure.length; a++) {
          for (let b = 0; b < whiteFigure[a].length; b++) {
            if (whiteFigure[a][b]) {
              for (let c = 0; c < whiteFigure[a][b].length; c++) {
                if (el[0] == whiteFigure[a][b][0] && el[1] == whiteFigure[a][b][1] && whiteFigure[a][b][2] == "white") {
                  imposibleMoves.push(el);
                }
              }
            }
          }
        }
      });
    } // Wyszukuję pola, na których znajdują się czarne figury


    if (this.side == "black") {
      possibleMoves.forEach(el => {
        for (let a = 0; a < blackFigure.length; a++) {
          for (let b = 0; b < blackFigure[a].length; b++) {
            if (blackFigure[a][b]) {
              for (let c = 0; c < blackFigure[a][b].length; c++) {
                if (el[0] == blackFigure[a][b][0] && el[1] == blackFigure[a][b][1] && blackFigure[a][b][2] == "black") {
                  imposibleMoves.push(el);
                }
              }
            }
          }
        }
      });
    } //Usunięcie z możliwych ruchów pól, na których znajdują się moje figury oraz wyłączenie możliwości przeskakiwania ich.


    possibleMoves.forEach(el => {
      imposibleMoves.forEach(move => {
        if (el[1] == move[1]) {
          possibleMoves.forEach(i => {
            if (i[1] == move[1] && i[0] < this.x && i[0] < move[0] && move[0] < this.x || i[1] == move[1] && i[0] > this.x && i[0] > move[0] && move[0] > this.x) {
              delete possibleMoves[possibleMoves.indexOf(i)];
            }
          });
        } else if (el[0] == move[0]) {
          possibleMoves.forEach(i => {
            if (i[0] == move[0] && i[1] < this.y && i[1] < move[1] && move[1] < this.y || i[0] == move[0] && i[1] > this.y && i[1] > move[1] && move[1] > this.y) {
              delete possibleMoves[possibleMoves.indexOf(i)];
            }
          });
        }

        if (el == move) {
          delete possibleMoves[possibleMoves.indexOf(el)];
        }
      });
    }); //Usunięcie możliwości przeskakiwania figur przeciwnika

    if (this.side == "white") {
      for (let i = 0; i < possibleMoves.length; i++) {
        for (let j = 0; j < blackFigure.length; j++) {
          for (let k = 0; k < blackFigure[j].length; k++) {
            if (possibleMoves[i]) {
              if (blackFigure[j][k]) {
                if (possibleMoves[i][1] == blackFigure[j][k][1] && possibleMoves[i][0] < blackFigure[j][k][0] && possibleMoves[i][0] < this.x && blackFigure[j][k][0] < this.x || possibleMoves[i][1] == blackFigure[j][k][1] && possibleMoves[i][0] > blackFigure[j][k][0] && possibleMoves[i][0] > this.x && blackFigure[j][k][0] > this.x || possibleMoves[i][0] == blackFigure[j][k][0] && possibleMoves[i][1] > blackFigure[j][k][1] && possibleMoves[i][1] > this.y && blackFigure[j][k][1] > this.y || possibleMoves[i][0] == blackFigure[j][k][0] && possibleMoves[i][1] < blackFigure[j][k][1] && possibleMoves[i][1] < this.y && blackFigure[j][k][1] < this.y) {
                  delete possibleMoves[i];
                }
              }
            }
          }
        }
      }
    }

    if (this.side == "black") {
      for (let i = 0; i < possibleMoves.length; i++) {
        for (let j = 0; j < whiteFigure.length; j++) {
          for (let k = 0; k < whiteFigure[j].length; k++) {
            if (possibleMoves[i]) {
              if (whiteFigure[j][k]) {
                if (possibleMoves[i][1] == whiteFigure[j][k][1] && possibleMoves[i][0] < whiteFigure[j][k][0] && possibleMoves[i][0] < this.x && whiteFigure[j][k][0] < this.x || possibleMoves[i][1] == whiteFigure[j][k][1] && possibleMoves[i][0] > whiteFigure[j][k][0] && possibleMoves[i][0] > this.x && whiteFigure[j][k][0] > this.x || possibleMoves[i][0] == whiteFigure[j][k][0] && possibleMoves[i][1] > whiteFigure[j][k][1] && possibleMoves[i][1] > this.y && whiteFigure[j][k][1] > this.y || possibleMoves[i][0] == whiteFigure[j][k][0] && possibleMoves[i][1] < whiteFigure[j][k][1] && possibleMoves[i][1] < this.y && whiteFigure[j][k][1] < this.y) {
                  delete possibleMoves[i];
                }
              }
            }
          }
        }
      }
    }

    possibleMoves = possibleMoves.filter(el => el);
    possibleMoves.forEach((el, i, arr) => arr[i] = `${el[0]},${el[1]}`); //movement bishop

    const dx = [-1, -1, 1, 1];
    const dy = [-1, 1, -1, 1];

    for (let direction = 0; direction < 4; direction++) {
      for (let counter = 1; counter < 8; counter++) {
        let newX = parseInt(this.x) + dx[direction] * counter;
        let newY = parseInt(this.y) + dy[direction] * counter;

        if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
          if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][newX][newY] != null) {
            if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][newX][newY].side != this.side) {
              possibleMoves.push(`${newX},${newY}`);
            }

            break;
          } else {
            possibleMoves.push(`${newX},${newY}`);
          }
        }
      }
    }

    console.log(possibleMoves);
    return possibleMoves;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Queen);

/***/ }),

/***/ "./src/pieces/rook.js":
/*!****************************!*\
  !*** ./src/pieces/rook.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Piece */ "./src/pieces/Piece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board */ "./src/board.js");




class Rook extends _Piece__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'rook';
    this.display = `<i class="fas fa-chess-rook ${side}"></i>`; //fontawesome rook
  }

  findLegalMoves() {
    let possibleMoves = [];

    for (let i = 0; i < _board__WEBPACK_IMPORTED_MODULE_2__["default"].length; i++) {
      possibleMoves[i] = [this.x, i];
      possibleMoves[i + _board__WEBPACK_IMPORTED_MODULE_2__["default"].length] = [i, this.y];
    }

    possibleMoves.forEach(el => {
      if (el[0] == [this.x] && el[1] == [this.y]) {
        delete possibleMoves[possibleMoves.indexOf(el)];
      }
    }); //Tworzę tablice, które zawierają położenie białych i czarnych figur na szachownicy.

    const blackFigure = [];
    const whiteFigure = [];

    for (let x = 0; x < _board__WEBPACK_IMPORTED_MODULE_2__["default"].length; x++) {
      blackFigure[x] = [];
      whiteFigure[x] = [];

      for (let y = 0; y < _board__WEBPACK_IMPORTED_MODULE_2__["default"][x].length; y++) {
        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y] && _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].side == "black") {
          blackFigure[x][y] = [];
          blackFigure[x][y][0] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].x;
          blackFigure[x][y][1] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].y;
          blackFigure[x][y][2] = "black";
        }

        if (_board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y] && _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].side == "white") {
          whiteFigure[x][y] = [];
          whiteFigure[x][y][0] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].x;
          whiteFigure[x][y][1] = _board__WEBPACK_IMPORTED_MODULE_2__["default"][x][y].y;
          whiteFigure[x][y][2] = "white";
        }
      }
    }

    const imposibleMoves = []; //Wyszukuję pola, na których znajdują się białe figury

    if (this.side == "white") {
      possibleMoves.forEach(el => {
        for (let a = 0; a < whiteFigure.length; a++) {
          for (let b = 0; b < whiteFigure[a].length; b++) {
            if (whiteFigure[a][b]) {
              for (let c = 0; c < whiteFigure[a][b].length; c++) {
                if (el[0] == whiteFigure[a][b][0] && el[1] == whiteFigure[a][b][1] && whiteFigure[a][b][2] == "white") {
                  imposibleMoves.push(el);
                }
              }
            }
          }
        }
      });
    } // Wyszukuję pola, na których znajdują się czarne figury


    if (this.side == "black") {
      possibleMoves.forEach(el => {
        for (let a = 0; a < blackFigure.length; a++) {
          for (let b = 0; b < blackFigure[a].length; b++) {
            if (blackFigure[a][b]) {
              for (let c = 0; c < blackFigure[a][b].length; c++) {
                if (el[0] == blackFigure[a][b][0] && el[1] == blackFigure[a][b][1] && blackFigure[a][b][2] == "black") {
                  imposibleMoves.push(el);
                }
              }
            }
          }
        }
      });
      possibleMoves = possibleMoves.filter(el => el);
      possibleMoves.forEach((el, i, arr) => arr[i] = `${el[0]},${el[1]}`); // console.log(possibleMoves);

      return possibleMoves;
    } //Usunięcie z możliwych ruchów pól, na których znajdują się moje figury oraz wyłączenie możliwości przeskakiwania ich.


    possibleMoves.forEach(el => {
      imposibleMoves.forEach(move => {
        if (el[1] == move[1]) {
          possibleMoves.forEach(i => {
            if (i[1] == move[1] && i[0] < this.x && i[0] < move[0] && move[0] < this.x || i[1] == move[1] && i[0] > this.x && i[0] > move[0] && move[0] > this.x) {
              delete possibleMoves[possibleMoves.indexOf(i)];
            }
          });
        } else if (el[0] == move[0]) {
          possibleMoves.forEach(i => {
            if (i[0] == move[0] && i[1] < this.y && i[1] < move[1] && move[1] < this.y || i[0] == move[0] && i[1] > this.y && i[1] > move[1] && move[1] > this.y) {
              delete possibleMoves[possibleMoves.indexOf(i)];
            }
          });
        }

        if (el == move) {
          delete possibleMoves[possibleMoves.indexOf(el)];
        }
      });
    }); //Usunięcie możliwości przeskakiwania figur przeciwnika

    if (this.side == "white") {
      for (let i = 0; i < possibleMoves.length; i++) {
        for (let j = 0; j < blackFigure.length; j++) {
          for (let k = 0; k < blackFigure[j].length; k++) {
            if (possibleMoves[i]) {
              if (blackFigure[j][k]) {
                if (possibleMoves[i][1] == blackFigure[j][k][1] && possibleMoves[i][0] < blackFigure[j][k][0] && possibleMoves[i][0] < this.x && blackFigure[j][k][0] < this.x || possibleMoves[i][1] == blackFigure[j][k][1] && possibleMoves[i][0] > blackFigure[j][k][0] && possibleMoves[i][0] > this.x && blackFigure[j][k][0] > this.x || possibleMoves[i][0] == blackFigure[j][k][0] && possibleMoves[i][1] > blackFigure[j][k][1] && possibleMoves[i][1] > this.y && blackFigure[j][k][1] > this.y || possibleMoves[i][0] == blackFigure[j][k][0] && possibleMoves[i][1] < blackFigure[j][k][1] && possibleMoves[i][1] < this.y && blackFigure[j][k][1] < this.y) {
                  delete possibleMoves[i];
                }
              }
            }
          }
        }
      }
    }

    if (this.side == "black") {
      for (let i = 0; i < possibleMoves.length; i++) {
        for (let j = 0; j < whiteFigure.length; j++) {
          for (let k = 0; k < whiteFigure[j].length; k++) {
            if (possibleMoves[i]) {
              if (whiteFigure[j][k]) {
                if (possibleMoves[i][1] == whiteFigure[j][k][1] && possibleMoves[i][0] < whiteFigure[j][k][0] && possibleMoves[i][0] < this.x && whiteFigure[j][k][0] < this.x || possibleMoves[i][1] == whiteFigure[j][k][1] && possibleMoves[i][0] > whiteFigure[j][k][0] && possibleMoves[i][0] > this.x && whiteFigure[j][k][0] > this.x || possibleMoves[i][0] == whiteFigure[j][k][0] && possibleMoves[i][1] > whiteFigure[j][k][1] && possibleMoves[i][1] > this.y && whiteFigure[j][k][1] > this.y || possibleMoves[i][0] == whiteFigure[j][k][0] && possibleMoves[i][1] < whiteFigure[j][k][1] && possibleMoves[i][1] < this.y && whiteFigure[j][k][1] < this.y) {
                  delete possibleMoves[i];
                }
              }
            }
          }
        }
      }
    }

    possibleMoves = possibleMoves.filter(el => el);
    possibleMoves.forEach((el, i, arr) => arr[i] = `${el[0]},${el[1]}`);
    console.log(possibleMoves);
    console.log(this);
    return possibleMoves;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Rook);

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: default, engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "engine", function() { return engine; });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai */ "./src/ai.js");

let engine;

const getSettings = e => {
  e.preventDefault();
  const gameMode = e.target.gameMode.value;
  const difficulty = e.target.difficulty.value;
  const side = e.target.side.value;
  const style = e.target.layout.value;
  document.getElementById("theme").setAttribute("href", `${style}.css`);

  if (gameMode == 'vsComp') {
    console.log(difficulty);
    engine = new _ai__WEBPACK_IMPORTED_MODULE_0__["default"](difficulty, side);
  } else {
    engine = null;
  }

  popup.parentNode.removeChild(popup);
};

const change = e => {
  e.preventDefault();
  const style = document.querySelector('input[name="layout"]:checked').value;
  document.getElementById("theme").setAttribute("href", `${style}.css`);
  const gameMode = document.querySelector('input[name="gameMode"]:checked').value;
  const difficulty = document.getElementById('difficulty');
  const side = [...document.getElementsByName('side')];

  if (gameMode == 'Twoplayers') {
    difficulty.disabled = true;

    for (let el of side) {
      el.disabled = true;
    }

    ;
  } else {
    difficulty.disabled = false;

    for (let el of side) {
      el.disabled = false;
    }

    ;
  }
};

const popup = document.createElement('div');
popup.className = 'overlay';
const formContainer = document.createElement('div');
formContainer.className = 'formContainer';
const form = document.createElement('form');
form.onsubmit = getSettings;
form.onchange = change;
form.innerHTML = `
        <p class="header">Opponent </p>
        <label for="gameMode" class="mode">            
            <label class="pvp">
                <input type="radio" name="gameMode" value="Twoplayers" checked> 
                <i class="fas fa-user"></i>  
            </label>
            <label class="ai">
                <input type="radio" name="gameMode" value="vsComp"> 
                <i class="fas fa-robot"></i> 
            </label>
        </label>
        <br>
        <label for="difficulty" class="level">
            <p class="header">Difficulty </p>
            <select name="difficulty" id="difficulty" class="select" disabled>
                <option value="0">Idiot</option>
                <option value="5">Amateur</option>
                <option value="10" selected="selected">Intermediete</option>
                <option value="15">Pro</option>
                <option value="20">God</option>
            </select>            
        </label>
        <p class="header">Side</p>
        <label for="side" id="side">
            <label><input type="radio" name="side" value="white" checked disabled> <div id="white"></div> </label>
            <label><input type="radio" name="side" value="black" disabled> 
            <div id="black"></div> </label>
        </label> 
        <p class="header">Theme</p>
        <label for="layout" class="skin">
            <label>
            <input type="radio" name="layout" value="classic"> 
            <p> Classic </p>
            </label>
            <label><input type="radio" name="layout" value="modern" checked> <p class="modern">Modern</p> </label>
        </label> </br>`;
const submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'Let the game begins';
popup.appendChild(formContainer);
formContainer.appendChild(form);
form.appendChild(submit);
/* harmony default export */ __webpack_exports__["default"] = (popup);


/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/settings.js");

>>>>>>> master


const setup = () => {
  console.log(_board__WEBPACK_IMPORTED_MODULE_0__["default"]);
<<<<<<< HEAD
=======
  document.getElementById('wrapper').appendChild(_settings__WEBPACK_IMPORTED_MODULE_1__["default"]);
>>>>>>> master

  for (let x = 0; x < _board__WEBPACK_IMPORTED_MODULE_0__["default"].length; x++) {
    for (let y = 0; y < _board__WEBPACK_IMPORTED_MODULE_0__["default"][x].length; y++) {
      const square = document.createElement('div');
      square.id = `${x},${y}`; // square.innerHTML = `${x}, ${y}`;// by lepiej widzieć indeksy

      square.innerHTML = _board__WEBPACK_IMPORTED_MODULE_0__["default"][x][y] ? _board__WEBPACK_IMPORTED_MODULE_0__["default"][x][y].display : "";
      square.className = 'square';
<<<<<<< HEAD
      square.className += x % 2 == y % 2 ? ' light' : ' dark'; //square.addEventListener('click', (e) => { touched(e) });

=======
      square.className += x % 2 == y % 2 ? ' light' : ' dark';
>>>>>>> master
      document.getElementById('board').appendChild(square);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setup);

/***/ })

/******/ });
//# sourceMappingURL=index.js.map