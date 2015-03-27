/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["pivotal-ui-react.tooltip"] = factory(require("react"));
	else
		root["pivotal-ui-react.tooltip"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** ./src/tooltip/tooltip.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var BootstrapTooltip = __webpack_require__(/*! react-bootstrap/Tooltip */ 2);
	
	var Tooltip = BootstrapTooltip;
	
	module.exports = { Tooltip: Tooltip };

/***/ },
/* 1 */,
/* 2 */
/*!**************************************!*\
  !*** ./~/react-bootstrap/Tooltip.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 3);
	var joinClasses = __webpack_require__(/*! ./utils/joinClasses */ 4);
	var classSet = __webpack_require__(/*! ./utils/classSet */ 5);
	var BootstrapMixin = __webpack_require__(/*! ./BootstrapMixin */ 6);
	
	
	var Tooltip = React.createClass({displayName: "Tooltip",
	  mixins: [BootstrapMixin],
	
	  propTypes: {
	    placement: React.PropTypes.oneOf(['top','right', 'bottom', 'left']),
	    positionLeft: React.PropTypes.number,
	    positionTop: React.PropTypes.number,
	    arrowOffsetLeft: React.PropTypes.number,
	    arrowOffsetTop: React.PropTypes.number
	  },
	
	  getDefaultProps: function () {
	    return {
	      placement: 'right'
	    };
	  },
	
	  render: function () {
	    var classes = {};
	    classes['tooltip'] = true;
	    classes[this.props.placement] = true;
	    classes['in'] = this.props.positionLeft != null || this.props.positionTop != null;
	
	    var style = {};
	    style['left'] = this.props.positionLeft;
	    style['top'] = this.props.positionTop;
	
	    var arrowStyle = {};
	    arrowStyle['left'] = this.props.arrowOffsetLeft;
	    arrowStyle['top'] = this.props.arrowOffsetTop;
	
	    return (
	        React.createElement("div", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes)), style: style}), 
	          React.createElement("div", {className: "tooltip-arrow", style: arrowStyle}), 
	          React.createElement("div", {className: "tooltip-inner"}, 
	            this.props.children
	          )
	        )
	      );
	  }
	});
	
	module.exports = Tooltip;

/***/ },
/* 3 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/*!************************************************!*\
  !*** ./~/react-bootstrap/utils/joinClasses.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/utils/joinClasses.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	"use strict";
	
	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	function joinClasses(className/*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}
	
	module.exports = joinClasses;


/***/ },
/* 5 */
/*!*********************************************!*\
  !*** ./~/react-bootstrap/utils/classSet.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/cx.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames == 'object') {
	    return Object.keys(classNames).filter(function(className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}
	
	module.exports = cx;

/***/ },
/* 6 */
/*!*********************************************!*\
  !*** ./~/react-bootstrap/BootstrapMixin.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 3);
	var constants = __webpack_require__(/*! ./constants */ 13);
	
	var BootstrapMixin = {
	  propTypes: {
	    bsClass: React.PropTypes.oneOf(Object.keys(constants.CLASSES)),
	    bsStyle: React.PropTypes.oneOf(Object.keys(constants.STYLES)),
	    bsSize: React.PropTypes.oneOf(Object.keys(constants.SIZES))
	  },
	
	  getBsClassSet: function () {
	    var classes = {};
	
	    var bsClass = this.props.bsClass && constants.CLASSES[this.props.bsClass];
	    if (bsClass) {
	      classes[bsClass] = true;
	
	      var prefix = bsClass + '-';
	
	      var bsSize = this.props.bsSize && constants.SIZES[this.props.bsSize];
	      if (bsSize) {
	        classes[prefix + bsSize] = true;
	      }
	
	      var bsStyle = this.props.bsStyle && constants.STYLES[this.props.bsStyle];
	      if (this.props.bsStyle) {
	        classes[prefix + bsStyle] = true;
	      }
	    }
	
	    return classes;
	  }
	};
	
	module.exports = BootstrapMixin;

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/*!****************************************!*\
  !*** ./~/react-bootstrap/constants.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  CLASSES: {
	    'alert': 'alert',
	    'button': 'btn',
	    'button-group': 'btn-group',
	    'button-toolbar': 'btn-toolbar',
	    'column': 'col',
	    'input-group': 'input-group',
	    'form': 'form',
	    'glyphicon': 'glyphicon',
	    'label': 'label',
	    'list-group-item': 'list-group-item',
	    'panel': 'panel',
	    'panel-group': 'panel-group',
	    'progress-bar': 'progress-bar',
	    'nav': 'nav',
	    'navbar': 'navbar',
	    'modal': 'modal',
	    'row': 'row',
	    'well': 'well'
	  },
	  STYLES: {
	    'default': 'default',
	    'primary': 'primary',
	    'success': 'success',
	    'info': 'info',
	    'warning': 'warning',
	    'danger': 'danger',
	    'link': 'link',
	    'inline': 'inline',
	    'tabs': 'tabs',
	    'pills': 'pills'
	  },
	  SIZES: {
	    'large': 'lg',
	    'medium': 'md',
	    'small': 'sm',
	    'xsmall': 'xs'
	  },
	  GLYPHS: [
	    'asterisk',
	    'plus',
	    'euro',
	    'minus',
	    'cloud',
	    'envelope',
	    'pencil',
	    'glass',
	    'music',
	    'search',
	    'heart',
	    'star',
	    'star-empty',
	    'user',
	    'film',
	    'th-large',
	    'th',
	    'th-list',
	    'ok',
	    'remove',
	    'zoom-in',
	    'zoom-out',
	    'off',
	    'signal',
	    'cog',
	    'trash',
	    'home',
	    'file',
	    'time',
	    'road',
	    'download-alt',
	    'download',
	    'upload',
	    'inbox',
	    'play-circle',
	    'repeat',
	    'refresh',
	    'list-alt',
	    'lock',
	    'flag',
	    'headphones',
	    'volume-off',
	    'volume-down',
	    'volume-up',
	    'qrcode',
	    'barcode',
	    'tag',
	    'tags',
	    'book',
	    'bookmark',
	    'print',
	    'camera',
	    'font',
	    'bold',
	    'italic',
	    'text-height',
	    'text-width',
	    'align-left',
	    'align-center',
	    'align-right',
	    'align-justify',
	    'list',
	    'indent-left',
	    'indent-right',
	    'facetime-video',
	    'picture',
	    'map-marker',
	    'adjust',
	    'tint',
	    'edit',
	    'share',
	    'check',
	    'move',
	    'step-backward',
	    'fast-backward',
	    'backward',
	    'play',
	    'pause',
	    'stop',
	    'forward',
	    'fast-forward',
	    'step-forward',
	    'eject',
	    'chevron-left',
	    'chevron-right',
	    'plus-sign',
	    'minus-sign',
	    'remove-sign',
	    'ok-sign',
	    'question-sign',
	    'info-sign',
	    'screenshot',
	    'remove-circle',
	    'ok-circle',
	    'ban-circle',
	    'arrow-left',
	    'arrow-right',
	    'arrow-up',
	    'arrow-down',
	    'share-alt',
	    'resize-full',
	    'resize-small',
	    'exclamation-sign',
	    'gift',
	    'leaf',
	    'fire',
	    'eye-open',
	    'eye-close',
	    'warning-sign',
	    'plane',
	    'calendar',
	    'random',
	    'comment',
	    'magnet',
	    'chevron-up',
	    'chevron-down',
	    'retweet',
	    'shopping-cart',
	    'folder-close',
	    'folder-open',
	    'resize-vertical',
	    'resize-horizontal',
	    'hdd',
	    'bullhorn',
	    'bell',
	    'certificate',
	    'thumbs-up',
	    'thumbs-down',
	    'hand-right',
	    'hand-left',
	    'hand-up',
	    'hand-down',
	    'circle-arrow-right',
	    'circle-arrow-left',
	    'circle-arrow-up',
	    'circle-arrow-down',
	    'globe',
	    'wrench',
	    'tasks',
	    'filter',
	    'briefcase',
	    'fullscreen',
	    'dashboard',
	    'paperclip',
	    'heart-empty',
	    'link',
	    'phone',
	    'pushpin',
	    'usd',
	    'gbp',
	    'sort',
	    'sort-by-alphabet',
	    'sort-by-alphabet-alt',
	    'sort-by-order',
	    'sort-by-order-alt',
	    'sort-by-attributes',
	    'sort-by-attributes-alt',
	    'unchecked',
	    'expand',
	    'collapse-down',
	    'collapse-up',
	    'log-in',
	    'flash',
	    'log-out',
	    'new-window',
	    'record',
	    'save',
	    'open',
	    'saved',
	    'import',
	    'export',
	    'send',
	    'floppy-disk',
	    'floppy-saved',
	    'floppy-remove',
	    'floppy-save',
	    'floppy-open',
	    'credit-card',
	    'transfer',
	    'cutlery',
	    'header',
	    'compressed',
	    'earphone',
	    'phone-alt',
	    'tower',
	    'stats',
	    'sd-video',
	    'hd-video',
	    'subtitles',
	    'sound-stereo',
	    'sound-dolby',
	    'sound-5-1',
	    'sound-6-1',
	    'sound-7-1',
	    'copyright-mark',
	    'registration-mark',
	    'cloud-download',
	    'cloud-upload',
	    'tree-conifer',
	    'tree-deciduous'
	  ]
	};


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDc3YjgzZWNhMmFhN2RjYzRkM2RhPzZiYWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2x0aXAvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9Ub29sdGlwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCI/M2M2MiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC91dGlscy9qb2luQ2xhc3Nlcy5qcz85MDY1Iiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL2NsYXNzU2V0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL0Jvb3RzdHJhcE1peGluLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFJLGdCQUFnQixHQUFHLG1CQUFPLENBQUMsZ0NBQXlCLENBQUMsQ0FBQzs7QUFFMUQsS0FBSSxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7O0FBRS9CLE9BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBQyxPQUFPLEVBQVAsT0FBTyxFQUFDLEM7Ozs7Ozs7Ozs7QUNKMUI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGtDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBb0QsZ0JBQWdCLDhFQUE4RTtBQUNsSix1Q0FBc0MsOENBQThDO0FBQ3BGLHVDQUFzQywyQkFBMkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsMEI7Ozs7Ozs7OztBQ2hEQSxnRDs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxXQUFXO0FBQ3RCLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHFCOzs7Ozs7Ozs7QUN0Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwaXZvdGFsLXVpLXJlYWN0LnRvb2x0aXBcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicGl2b3RhbC11aS1yZWFjdC50b29sdGlwXCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3N2I4M2VjYTJhYTdkY2M0ZDNkYVxuICoqLyIsInZhciBCb290c3RyYXBUb29sdGlwID0gcmVxdWlyZSgncmVhY3QtYm9vdHN0cmFwL1Rvb2x0aXAnKTtcblxudmFyIFRvb2x0aXAgPSBCb290c3RyYXBUb29sdGlwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtUb29sdGlwfTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy90b29sdGlwL3Rvb2x0aXAuanNcbiAqKi8iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGpvaW5DbGFzc2VzID0gcmVxdWlyZSgnLi91dGlscy9qb2luQ2xhc3NlcycpO1xudmFyIGNsYXNzU2V0ID0gcmVxdWlyZSgnLi91dGlscy9jbGFzc1NldCcpO1xudmFyIEJvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG5cbnZhciBUb29sdGlwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlRvb2x0aXBcIixcbiAgbWl4aW5zOiBbQm9vdHN0cmFwTWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHBsYWNlbWVudDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsndG9wJywncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSksXG4gICAgcG9zaXRpb25MZWZ0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHBvc2l0aW9uVG9wOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGFycm93T2Zmc2V0TGVmdDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBhcnJvd09mZnNldFRvcDogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGFjZW1lbnQ6ICdyaWdodCdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbGFzc2VzID0ge307XG4gICAgY2xhc3Nlc1sndG9vbHRpcCddID0gdHJ1ZTtcbiAgICBjbGFzc2VzW3RoaXMucHJvcHMucGxhY2VtZW50XSA9IHRydWU7XG4gICAgY2xhc3Nlc1snaW4nXSA9IHRoaXMucHJvcHMucG9zaXRpb25MZWZ0ICE9IG51bGwgfHwgdGhpcy5wcm9wcy5wb3NpdGlvblRvcCAhPSBudWxsO1xuXG4gICAgdmFyIHN0eWxlID0ge307XG4gICAgc3R5bGVbJ2xlZnQnXSA9IHRoaXMucHJvcHMucG9zaXRpb25MZWZ0O1xuICAgIHN0eWxlWyd0b3AnXSA9IHRoaXMucHJvcHMucG9zaXRpb25Ub3A7XG5cbiAgICB2YXIgYXJyb3dTdHlsZSA9IHt9O1xuICAgIGFycm93U3R5bGVbJ2xlZnQnXSA9IHRoaXMucHJvcHMuYXJyb3dPZmZzZXRMZWZ0O1xuICAgIGFycm93U3R5bGVbJ3RvcCddID0gdGhpcy5wcm9wcy5hcnJvd09mZnNldFRvcDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgUmVhY3QuX19zcHJlYWQoe30sICB0aGlzLnByb3BzLCB7Y2xhc3NOYW1lOiBqb2luQ2xhc3Nlcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NTZXQoY2xhc3NlcykpLCBzdHlsZTogc3R5bGV9KSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInRvb2x0aXAtYXJyb3dcIiwgc3R5bGU6IGFycm93U3R5bGV9KSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInRvb2x0aXAtaW5uZXJcIn0sIFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVG9vbHRpcDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvVG9vbHRpcC5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGFuIHVubW9kaWZpZWQgdmVyc2lvbiBvZjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvc3JjL3V0aWxzL2pvaW5DbGFzc2VzLmpzXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvTElDRU5TRVxuICogQW4gYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9QQVRFTlRTXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29tYmluZXMgbXVsdGlwbGUgY2xhc3NOYW1lIHN0cmluZ3MgaW50byBvbmUuXG4gKiBodHRwOi8vanNwZXJmLmNvbS9qb2luY2xhc3Nlcy1hcmdzLXZzLWFycmF5XG4gKlxuICogQHBhcmFtIHsuLi4/c3RyaW5nfSBjbGFzc2VzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpvaW5DbGFzc2VzKGNsYXNzTmFtZS8qLCAuLi4gKi8pIHtcbiAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICBjbGFzc05hbWUgPSAnJztcbiAgfVxuICB2YXIgbmV4dENsYXNzO1xuICB2YXIgYXJnTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgaWYgKGFyZ0xlbmd0aCA+IDEpIHtcbiAgICBmb3IgKHZhciBpaSA9IDE7IGlpIDwgYXJnTGVuZ3RoOyBpaSsrKSB7XG4gICAgICBuZXh0Q2xhc3MgPSBhcmd1bWVudHNbaWldO1xuICAgICAgaWYgKG5leHRDbGFzcykge1xuICAgICAgICBjbGFzc05hbWUgPSAoY2xhc3NOYW1lID8gY2xhc3NOYW1lICsgJyAnIDogJycpICsgbmV4dENsYXNzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGpvaW5DbGFzc2VzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL2pvaW5DbGFzc2VzLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgZmlsZSBjb250YWlucyBhbiB1bm1vZGlmaWVkIHZlcnNpb24gb2Y6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL3NyYy92ZW5kb3Ivc3R1YnMvY3guanNcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9MSUNFTlNFXG4gKiBBbiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL1BBVEVOVFNcbiAqL1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBtYXJrIHN0cmluZyBsaXRlcmFscyByZXByZXNlbnRpbmcgQ1NTIGNsYXNzIG5hbWVzXG4gKiBzbyB0aGF0IHRoZXkgY2FuIGJlIHRyYW5zZm9ybWVkIHN0YXRpY2FsbHkuIFRoaXMgYWxsb3dzIGZvciBtb2R1bGFyaXphdGlvblxuICogYW5kIG1pbmlmaWNhdGlvbiBvZiBDU1MgY2xhc3MgbmFtZXMuXG4gKlxuICogSW4gc3RhdGljX3Vwc3RyZWFtLCB0aGlzIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IGltcGxlbWVudGVkLCBidXQgaXQgc2hvdWxkXG4gKiBldmVudHVhbGx5IGJlIHJlcGxhY2VkIHdpdGggc29tZXRoaW5nIG1vcmUgZGVzY3JpcHRpdmUsIGFuZCB0aGUgdHJhbnNmb3JtXG4gKiB0aGF0IGlzIHVzZWQgaW4gdGhlIG1haW4gc3RhY2sgc2hvdWxkIGJlIHBvcnRlZCBmb3IgdXNlIGVsc2V3aGVyZS5cbiAqXG4gKiBAcGFyYW0gc3RyaW5nfG9iamVjdCBjbGFzc05hbWUgdG8gbW9kdWxhcml6ZSwgb3IgYW4gb2JqZWN0IG9mIGtleS92YWx1ZXMuXG4gKiAgICAgICAgICAgICAgICAgICAgICBJbiB0aGUgb2JqZWN0IGNhc2UsIHRoZSB2YWx1ZXMgYXJlIGNvbmRpdGlvbnMgdGhhdFxuICogICAgICAgICAgICAgICAgICAgICAgZGV0ZXJtaW5lIGlmIHRoZSBjbGFzc05hbWUga2V5cyBzaG91bGQgYmUgaW5jbHVkZWQuXG4gKiBAcGFyYW0gW3N0cmluZyAuLi5dICBWYXJpYWJsZSBsaXN0IG9mIGNsYXNzTmFtZXMgaW4gdGhlIHN0cmluZyBjYXNlLlxuICogQHJldHVybiBzdHJpbmcgICAgICAgUmVuZGVyYWJsZSBzcGFjZS1zZXBhcmF0ZWQgQ1NTIGNsYXNzTmFtZS5cbiAqL1xuZnVuY3Rpb24gY3goY2xhc3NOYW1lcykge1xuICBpZiAodHlwZW9mIGNsYXNzTmFtZXMgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoY2xhc3NOYW1lcykuZmlsdGVyKGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZXNbY2xhc3NOYW1lXTtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5qb2luLmNhbGwoYXJndW1lbnRzLCAnICcpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3g7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL2NsYXNzU2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG52YXIgQm9vdHN0cmFwTWl4aW4gPSB7XG4gIHByb3BUeXBlczoge1xuICAgIGJzQ2xhc3M6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhjb25zdGFudHMuQ0xBU1NFUykpLFxuICAgIGJzU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhjb25zdGFudHMuU1RZTEVTKSksXG4gICAgYnNTaXplOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoY29uc3RhbnRzLlNJWkVTKSlcbiAgfSxcblxuICBnZXRCc0NsYXNzU2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB7fTtcblxuICAgIHZhciBic0NsYXNzID0gdGhpcy5wcm9wcy5ic0NsYXNzICYmIGNvbnN0YW50cy5DTEFTU0VTW3RoaXMucHJvcHMuYnNDbGFzc107XG4gICAgaWYgKGJzQ2xhc3MpIHtcbiAgICAgIGNsYXNzZXNbYnNDbGFzc10gPSB0cnVlO1xuXG4gICAgICB2YXIgcHJlZml4ID0gYnNDbGFzcyArICctJztcblxuICAgICAgdmFyIGJzU2l6ZSA9IHRoaXMucHJvcHMuYnNTaXplICYmIGNvbnN0YW50cy5TSVpFU1t0aGlzLnByb3BzLmJzU2l6ZV07XG4gICAgICBpZiAoYnNTaXplKSB7XG4gICAgICAgIGNsYXNzZXNbcHJlZml4ICsgYnNTaXplXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBic1N0eWxlID0gdGhpcy5wcm9wcy5ic1N0eWxlICYmIGNvbnN0YW50cy5TVFlMRVNbdGhpcy5wcm9wcy5ic1N0eWxlXTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmJzU3R5bGUpIHtcbiAgICAgICAgY2xhc3Nlc1twcmVmaXggKyBic1N0eWxlXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQm9vdHN0cmFwTWl4aW47XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL0Jvb3RzdHJhcE1peGluLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIENMQVNTRVM6IHtcbiAgICAnYWxlcnQnOiAnYWxlcnQnLFxuICAgICdidXR0b24nOiAnYnRuJyxcbiAgICAnYnV0dG9uLWdyb3VwJzogJ2J0bi1ncm91cCcsXG4gICAgJ2J1dHRvbi10b29sYmFyJzogJ2J0bi10b29sYmFyJyxcbiAgICAnY29sdW1uJzogJ2NvbCcsXG4gICAgJ2lucHV0LWdyb3VwJzogJ2lucHV0LWdyb3VwJyxcbiAgICAnZm9ybSc6ICdmb3JtJyxcbiAgICAnZ2x5cGhpY29uJzogJ2dseXBoaWNvbicsXG4gICAgJ2xhYmVsJzogJ2xhYmVsJyxcbiAgICAnbGlzdC1ncm91cC1pdGVtJzogJ2xpc3QtZ3JvdXAtaXRlbScsXG4gICAgJ3BhbmVsJzogJ3BhbmVsJyxcbiAgICAncGFuZWwtZ3JvdXAnOiAncGFuZWwtZ3JvdXAnLFxuICAgICdwcm9ncmVzcy1iYXInOiAncHJvZ3Jlc3MtYmFyJyxcbiAgICAnbmF2JzogJ25hdicsXG4gICAgJ25hdmJhcic6ICduYXZiYXInLFxuICAgICdtb2RhbCc6ICdtb2RhbCcsXG4gICAgJ3Jvdyc6ICdyb3cnLFxuICAgICd3ZWxsJzogJ3dlbGwnXG4gIH0sXG4gIFNUWUxFUzoge1xuICAgICdkZWZhdWx0JzogJ2RlZmF1bHQnLFxuICAgICdwcmltYXJ5JzogJ3ByaW1hcnknLFxuICAgICdzdWNjZXNzJzogJ3N1Y2Nlc3MnLFxuICAgICdpbmZvJzogJ2luZm8nLFxuICAgICd3YXJuaW5nJzogJ3dhcm5pbmcnLFxuICAgICdkYW5nZXInOiAnZGFuZ2VyJyxcbiAgICAnbGluayc6ICdsaW5rJyxcbiAgICAnaW5saW5lJzogJ2lubGluZScsXG4gICAgJ3RhYnMnOiAndGFicycsXG4gICAgJ3BpbGxzJzogJ3BpbGxzJ1xuICB9LFxuICBTSVpFUzoge1xuICAgICdsYXJnZSc6ICdsZycsXG4gICAgJ21lZGl1bSc6ICdtZCcsXG4gICAgJ3NtYWxsJzogJ3NtJyxcbiAgICAneHNtYWxsJzogJ3hzJ1xuICB9LFxuICBHTFlQSFM6IFtcbiAgICAnYXN0ZXJpc2snLFxuICAgICdwbHVzJyxcbiAgICAnZXVybycsXG4gICAgJ21pbnVzJyxcbiAgICAnY2xvdWQnLFxuICAgICdlbnZlbG9wZScsXG4gICAgJ3BlbmNpbCcsXG4gICAgJ2dsYXNzJyxcbiAgICAnbXVzaWMnLFxuICAgICdzZWFyY2gnLFxuICAgICdoZWFydCcsXG4gICAgJ3N0YXInLFxuICAgICdzdGFyLWVtcHR5JyxcbiAgICAndXNlcicsXG4gICAgJ2ZpbG0nLFxuICAgICd0aC1sYXJnZScsXG4gICAgJ3RoJyxcbiAgICAndGgtbGlzdCcsXG4gICAgJ29rJyxcbiAgICAncmVtb3ZlJyxcbiAgICAnem9vbS1pbicsXG4gICAgJ3pvb20tb3V0JyxcbiAgICAnb2ZmJyxcbiAgICAnc2lnbmFsJyxcbiAgICAnY29nJyxcbiAgICAndHJhc2gnLFxuICAgICdob21lJyxcbiAgICAnZmlsZScsXG4gICAgJ3RpbWUnLFxuICAgICdyb2FkJyxcbiAgICAnZG93bmxvYWQtYWx0JyxcbiAgICAnZG93bmxvYWQnLFxuICAgICd1cGxvYWQnLFxuICAgICdpbmJveCcsXG4gICAgJ3BsYXktY2lyY2xlJyxcbiAgICAncmVwZWF0JyxcbiAgICAncmVmcmVzaCcsXG4gICAgJ2xpc3QtYWx0JyxcbiAgICAnbG9jaycsXG4gICAgJ2ZsYWcnLFxuICAgICdoZWFkcGhvbmVzJyxcbiAgICAndm9sdW1lLW9mZicsXG4gICAgJ3ZvbHVtZS1kb3duJyxcbiAgICAndm9sdW1lLXVwJyxcbiAgICAncXJjb2RlJyxcbiAgICAnYmFyY29kZScsXG4gICAgJ3RhZycsXG4gICAgJ3RhZ3MnLFxuICAgICdib29rJyxcbiAgICAnYm9va21hcmsnLFxuICAgICdwcmludCcsXG4gICAgJ2NhbWVyYScsXG4gICAgJ2ZvbnQnLFxuICAgICdib2xkJyxcbiAgICAnaXRhbGljJyxcbiAgICAndGV4dC1oZWlnaHQnLFxuICAgICd0ZXh0LXdpZHRoJyxcbiAgICAnYWxpZ24tbGVmdCcsXG4gICAgJ2FsaWduLWNlbnRlcicsXG4gICAgJ2FsaWduLXJpZ2h0JyxcbiAgICAnYWxpZ24tanVzdGlmeScsXG4gICAgJ2xpc3QnLFxuICAgICdpbmRlbnQtbGVmdCcsXG4gICAgJ2luZGVudC1yaWdodCcsXG4gICAgJ2ZhY2V0aW1lLXZpZGVvJyxcbiAgICAncGljdHVyZScsXG4gICAgJ21hcC1tYXJrZXInLFxuICAgICdhZGp1c3QnLFxuICAgICd0aW50JyxcbiAgICAnZWRpdCcsXG4gICAgJ3NoYXJlJyxcbiAgICAnY2hlY2snLFxuICAgICdtb3ZlJyxcbiAgICAnc3RlcC1iYWNrd2FyZCcsXG4gICAgJ2Zhc3QtYmFja3dhcmQnLFxuICAgICdiYWNrd2FyZCcsXG4gICAgJ3BsYXknLFxuICAgICdwYXVzZScsXG4gICAgJ3N0b3AnLFxuICAgICdmb3J3YXJkJyxcbiAgICAnZmFzdC1mb3J3YXJkJyxcbiAgICAnc3RlcC1mb3J3YXJkJyxcbiAgICAnZWplY3QnLFxuICAgICdjaGV2cm9uLWxlZnQnLFxuICAgICdjaGV2cm9uLXJpZ2h0JyxcbiAgICAncGx1cy1zaWduJyxcbiAgICAnbWludXMtc2lnbicsXG4gICAgJ3JlbW92ZS1zaWduJyxcbiAgICAnb2stc2lnbicsXG4gICAgJ3F1ZXN0aW9uLXNpZ24nLFxuICAgICdpbmZvLXNpZ24nLFxuICAgICdzY3JlZW5zaG90JyxcbiAgICAncmVtb3ZlLWNpcmNsZScsXG4gICAgJ29rLWNpcmNsZScsXG4gICAgJ2Jhbi1jaXJjbGUnLFxuICAgICdhcnJvdy1sZWZ0JyxcbiAgICAnYXJyb3ctcmlnaHQnLFxuICAgICdhcnJvdy11cCcsXG4gICAgJ2Fycm93LWRvd24nLFxuICAgICdzaGFyZS1hbHQnLFxuICAgICdyZXNpemUtZnVsbCcsXG4gICAgJ3Jlc2l6ZS1zbWFsbCcsXG4gICAgJ2V4Y2xhbWF0aW9uLXNpZ24nLFxuICAgICdnaWZ0JyxcbiAgICAnbGVhZicsXG4gICAgJ2ZpcmUnLFxuICAgICdleWUtb3BlbicsXG4gICAgJ2V5ZS1jbG9zZScsXG4gICAgJ3dhcm5pbmctc2lnbicsXG4gICAgJ3BsYW5lJyxcbiAgICAnY2FsZW5kYXInLFxuICAgICdyYW5kb20nLFxuICAgICdjb21tZW50JyxcbiAgICAnbWFnbmV0JyxcbiAgICAnY2hldnJvbi11cCcsXG4gICAgJ2NoZXZyb24tZG93bicsXG4gICAgJ3JldHdlZXQnLFxuICAgICdzaG9wcGluZy1jYXJ0JyxcbiAgICAnZm9sZGVyLWNsb3NlJyxcbiAgICAnZm9sZGVyLW9wZW4nLFxuICAgICdyZXNpemUtdmVydGljYWwnLFxuICAgICdyZXNpemUtaG9yaXpvbnRhbCcsXG4gICAgJ2hkZCcsXG4gICAgJ2J1bGxob3JuJyxcbiAgICAnYmVsbCcsXG4gICAgJ2NlcnRpZmljYXRlJyxcbiAgICAndGh1bWJzLXVwJyxcbiAgICAndGh1bWJzLWRvd24nLFxuICAgICdoYW5kLXJpZ2h0JyxcbiAgICAnaGFuZC1sZWZ0JyxcbiAgICAnaGFuZC11cCcsXG4gICAgJ2hhbmQtZG93bicsXG4gICAgJ2NpcmNsZS1hcnJvdy1yaWdodCcsXG4gICAgJ2NpcmNsZS1hcnJvdy1sZWZ0JyxcbiAgICAnY2lyY2xlLWFycm93LXVwJyxcbiAgICAnY2lyY2xlLWFycm93LWRvd24nLFxuICAgICdnbG9iZScsXG4gICAgJ3dyZW5jaCcsXG4gICAgJ3Rhc2tzJyxcbiAgICAnZmlsdGVyJyxcbiAgICAnYnJpZWZjYXNlJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2Rhc2hib2FyZCcsXG4gICAgJ3BhcGVyY2xpcCcsXG4gICAgJ2hlYXJ0LWVtcHR5JyxcbiAgICAnbGluaycsXG4gICAgJ3Bob25lJyxcbiAgICAncHVzaHBpbicsXG4gICAgJ3VzZCcsXG4gICAgJ2dicCcsXG4gICAgJ3NvcnQnLFxuICAgICdzb3J0LWJ5LWFscGhhYmV0JyxcbiAgICAnc29ydC1ieS1hbHBoYWJldC1hbHQnLFxuICAgICdzb3J0LWJ5LW9yZGVyJyxcbiAgICAnc29ydC1ieS1vcmRlci1hbHQnLFxuICAgICdzb3J0LWJ5LWF0dHJpYnV0ZXMnLFxuICAgICdzb3J0LWJ5LWF0dHJpYnV0ZXMtYWx0JyxcbiAgICAndW5jaGVja2VkJyxcbiAgICAnZXhwYW5kJyxcbiAgICAnY29sbGFwc2UtZG93bicsXG4gICAgJ2NvbGxhcHNlLXVwJyxcbiAgICAnbG9nLWluJyxcbiAgICAnZmxhc2gnLFxuICAgICdsb2ctb3V0JyxcbiAgICAnbmV3LXdpbmRvdycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3NhdmUnLFxuICAgICdvcGVuJyxcbiAgICAnc2F2ZWQnLFxuICAgICdpbXBvcnQnLFxuICAgICdleHBvcnQnLFxuICAgICdzZW5kJyxcbiAgICAnZmxvcHB5LWRpc2snLFxuICAgICdmbG9wcHktc2F2ZWQnLFxuICAgICdmbG9wcHktcmVtb3ZlJyxcbiAgICAnZmxvcHB5LXNhdmUnLFxuICAgICdmbG9wcHktb3BlbicsXG4gICAgJ2NyZWRpdC1jYXJkJyxcbiAgICAndHJhbnNmZXInLFxuICAgICdjdXRsZXJ5JyxcbiAgICAnaGVhZGVyJyxcbiAgICAnY29tcHJlc3NlZCcsXG4gICAgJ2VhcnBob25lJyxcbiAgICAncGhvbmUtYWx0JyxcbiAgICAndG93ZXInLFxuICAgICdzdGF0cycsXG4gICAgJ3NkLXZpZGVvJyxcbiAgICAnaGQtdmlkZW8nLFxuICAgICdzdWJ0aXRsZXMnLFxuICAgICdzb3VuZC1zdGVyZW8nLFxuICAgICdzb3VuZC1kb2xieScsXG4gICAgJ3NvdW5kLTUtMScsXG4gICAgJ3NvdW5kLTYtMScsXG4gICAgJ3NvdW5kLTctMScsXG4gICAgJ2NvcHlyaWdodC1tYXJrJyxcbiAgICAncmVnaXN0cmF0aW9uLW1hcmsnLFxuICAgICdjbG91ZC1kb3dubG9hZCcsXG4gICAgJ2Nsb3VkLXVwbG9hZCcsXG4gICAgJ3RyZWUtY29uaWZlcicsXG4gICAgJ3RyZWUtZGVjaWR1b3VzJ1xuICBdXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL2NvbnN0YW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJ0b29sdGlwL3Rvb2x0aXAuanMifQ==