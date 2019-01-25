(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-tournament-bracket"] = factory();
	else
		root["vue-tournament-bracket"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "5181":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bracket_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6ca5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bracket_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bracket_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bracket_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6ca5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6f9d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "af90":
/***/ (function(module, exports) {

module.exports = {
  transform: function transform(rounds) {
    var totalRounds = rounds.length;
    var currentGames;
    var previousGames = [];

    var _loop = function _loop(i) {
      currentGames = rounds[i].games.map(function (game) {
        return {
          player1: game.player1,
          player2: game.player2,
          title: "round " + i,
          games: []
        };
      });

      if (previousGames.length === 0) {
        previousGames = currentGames;
        return "continue";
      }

      for (var j = 0; j < previousGames.length; j++) {
        var matchForCurrentGame = Math.floor(j / 2);
        currentGames[matchForCurrentGame].games.push(previousGames[j]);
      }

      previousGames = currentGames;
    };

    for (var i = 0; i < totalRounds; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return currentGames[0];
  }
};

/***/ }),

/***/ "d051":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BracketNode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f9d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BracketNode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BracketNode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BracketNode_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Bracket.vue?vue&type=template&id=d2fa2032&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vtb-wrapper"},[_c('bracket-node',{attrs:{"bracket-node":_vm.recursiveBracket,"highlighted-player-id":_vm.highlightedPlayerId},on:{"onSelectedPlayer":_vm.highlightPlayer,"onDeselectedPlayer":_vm.unhighlightPlayer},scopedSlots:_vm._u([{key:"player",fn:function(ref){
var player = ref.player;
return [_vm._t("player",null,{player:player})]}}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Bracket.vue?vue&type=template&id=d2fa2032&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BracketNode.vue?vue&type=template&id=657681ac&
var BracketNodevue_type_template_id_657681ac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vtb-item"},[_c('div',{class:_vm.getBracketNodeClass(_vm.bracketNode)},[_c('game-players',{attrs:{"bracket-node":_vm.bracketNode,"highlighted-player-id":_vm.highlightedPlayerId},on:{"onSelectedPlayer":_vm.highlightPlayer,"onDeselectedPlayer":_vm.unhighlightPlayer},scopedSlots:_vm._u([{key:"player",fn:function(ref){
var player = ref.player;
return [_vm._t("player",null,{player:player})]}}])})],1),(_vm.bracketNode.games[0] || _vm.bracketNode.games[1])?_c('div',{staticClass:"vtb-item-children"},[(_vm.bracketNode.games[0])?_c('div',{staticClass:"vtb-item-child"},[_c('bracket-node',{attrs:{"bracket-node":_vm.bracketNode.games[0],"highlighted-player-id":_vm.highlightedPlayerId},on:{"onSelectedPlayer":_vm.highlightPlayer,"onDeselectedPlayer":_vm.unhighlightPlayer},scopedSlots:_vm._u([{key:"player",fn:function(ref){
var player = ref.player;
return [_vm._t("player",null,{player:player})]}}])})],1):_vm._e(),(_vm.bracketNode.games[1])?_c('div',{staticClass:"vtb-item-child"},[_c('bracket-node',{attrs:{"bracket-node":_vm.bracketNode.games[1],"highlighted-player-id":_vm.highlightedPlayerId},on:{"onSelectedPlayer":_vm.highlightPlayer,"onDeselectedPlayer":_vm.unhighlightPlayer},scopedSlots:_vm._u([{key:"player",fn:function(ref){
var player = ref.player;
return [_vm._t("player",null,{player:player})]}}])})],1):_vm._e()]):_vm._e()])}
var BracketNodevue_type_template_id_657681ac_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BracketNode.vue?vue&type=template&id=657681ac&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"325c1899-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GamePlayers.vue?vue&type=template&id=7a46b188&
var GamePlayersvue_type_template_id_7a46b188_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vtb-item-players"},[_c('div',{class:_vm.getPlayerClass(_vm.bracketNode.player1),on:{"mouseover":function($event){_vm.highlightPlayer(_vm.bracketNode.player1.id)},"mouseleave":_vm.unhighlightPlayer}},[_vm._t("player",null,{player:_vm.bracketNode.player1})],2),_c('div',{class:_vm.getPlayerClass(_vm.bracketNode.player2),on:{"mouseover":function($event){_vm.highlightPlayer(_vm.bracketNode.player2.id)},"mouseleave":_vm.unhighlightPlayer}},[_vm._t("player",null,{player:_vm.bracketNode.player2})],2)])}
var GamePlayersvue_type_template_id_7a46b188_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GamePlayers.vue?vue&type=template&id=7a46b188&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GamePlayers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var GamePlayersvue_type_script_lang_js_ = ({
  name: "game-players",
  props: ["bracketNode", "highlightedPlayerId"],
  methods: {
    getPlayerClass: function getPlayerClass(player) {
      if (player.winner === null || player.winner === undefined) {
        return "";
      }

      var clazz = player.winner ? "winner" : "defeated";

      if (this.highlightedPlayerId === player.id) {
        clazz += " highlight";
      }

      return clazz;
    },
    highlightPlayer: function highlightPlayer(playerId) {
      this.$emit("onSelectedPlayer", playerId);
    },
    unhighlightPlayer: function unhighlightPlayer() {
      this.$emit("onDeselectedPlayer");
    }
  }
});
// CONCATENATED MODULE: ./src/components/GamePlayers.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GamePlayersvue_type_script_lang_js_ = (GamePlayersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/GamePlayers.vue





/* normalize component */

var component = normalizeComponent(
  components_GamePlayersvue_type_script_lang_js_,
  GamePlayersvue_type_template_id_7a46b188_render,
  GamePlayersvue_type_template_id_7a46b188_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "GamePlayers.vue"
/* harmony default export */ var GamePlayers = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BracketNode.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BracketNodevue_type_script_lang_js_ = ({
  name: "bracket-node",
  components: {
    GamePlayers: GamePlayers
  },
  props: ["bracketNode", "highlightedPlayerId"],
  methods: {
    getBracketNodeClass: function getBracketNodeClass(bracketNode) {
      if (bracketNode.games[0] || bracketNode.games[1]) {
        return "vtb-item-parent";
      }

      return "vtb-item-child";
    },
    getPlayerClass: function getPlayerClass(player) {
      if (player.winner === null || player.winner === undefined) {
        return "";
      }

      var clazz = player.winner ? "winner" : "defeated";

      if (this.highlightedPlayerId === player.id) {
        clazz += " highlight";
      }

      return clazz;
    },
    highlightPlayer: function highlightPlayer(playerId) {
      this.$emit("onSelectedPlayer", playerId);
    },
    unhighlightPlayer: function unhighlightPlayer() {
      this.$emit("onDeselectedPlayer");
    }
  }
});
// CONCATENATED MODULE: ./src/components/BracketNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BracketNodevue_type_script_lang_js_ = (BracketNodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/BracketNode.vue?vue&type=style&index=0&lang=css&
var BracketNodevue_type_style_index_0_lang_css_ = __webpack_require__("d051");

// CONCATENATED MODULE: ./src/components/BracketNode.vue






/* normalize component */

var BracketNode_component = normalizeComponent(
  components_BracketNodevue_type_script_lang_js_,
  BracketNodevue_type_template_id_657681ac_render,
  BracketNodevue_type_template_id_657681ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

BracketNode_component.options.__file = "BracketNode.vue"
/* harmony default export */ var BracketNode = (BracketNode_component.exports);
// EXTERNAL MODULE: ./src/components/recursiveBracket.js
var components_recursiveBracket = __webpack_require__("af90");
var recursiveBracket_default = /*#__PURE__*/__webpack_require__.n(components_recursiveBracket);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Bracket.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Bracketvue_type_script_lang_js_ = ({
  name: "bracket",
  components: {
    "bracket-node": BracketNode
  },
  props: ["rounds"],
  data: function data() {
    return {
      highlightedPlayerId: null
    };
  },
  computed: {
    recursiveBracket: function recursiveBracket() {
      return recursiveBracket_default.a.transform(this.rounds);
    }
  },
  methods: {
    highlightPlayer: function highlightPlayer(id) {
      this.highlightedPlayerId = id;
    },
    unhighlightPlayer: function unhighlightPlayer() {
      this.highlightedPlayerId = null;
    }
  }
});
// CONCATENATED MODULE: ./src/Bracket.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Bracketvue_type_script_lang_js_ = (Bracketvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Bracket.vue?vue&type=style&index=0&lang=css&
var Bracketvue_type_style_index_0_lang_css_ = __webpack_require__("5181");

// CONCATENATED MODULE: ./src/Bracket.vue






/* normalize component */

var Bracket_component = normalizeComponent(
  src_Bracketvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

Bracket_component.options.__file = "Bracket.vue"
/* harmony default export */ var Bracket = (Bracket_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Bracket);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-tournament-bracket.umd.js.map