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
/*!***********************************!*\
  !*** ./src/components/tooltip.js ***!
  \***********************************/
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
	var joinClasses = __webpack_require__(/*! ./utils/joinClasses */ 9);
	var classSet = __webpack_require__(/*! ./utils/classSet */ 10);
	var BootstrapMixin = __webpack_require__(/*! ./BootstrapMixin */ 11);
	
	
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
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
/* 10 */
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
/* 11 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGZlODk5NDM5NGRhODEwMTI4NGE5PzJmOTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9Ub29sdGlwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCI/M2M2MiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC91dGlscy9qb2luQ2xhc3Nlcy5qcz85MDY1Iiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL2NsYXNzU2V0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL0Jvb3RzdHJhcE1peGluLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFJLGdCQUFnQixHQUFHLG1CQUFPLENBQUMsZ0NBQXlCLENBQUMsQ0FBQzs7QUFFMUQsS0FBSSxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7O0FBRS9CLE9BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBQyxPQUFPLEVBQVAsT0FBTyxFQUFDLEM7Ozs7Ozs7Ozs7QUNKMUI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGtDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBb0QsZ0JBQWdCLDhFQUE4RTtBQUNsSix1Q0FBc0MsOENBQThDO0FBQ3BGLHVDQUFzQywyQkFBMkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsMEI7Ozs7Ozs7OztBQ2hEQSxnRDs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFdBQVc7QUFDdEIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEscUI7Ozs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwaXZvdGFsLXVpLXJlYWN0LnRvb2x0aXBcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicGl2b3RhbC11aS1yZWFjdC50b29sdGlwXCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmZTg5OTQzOTRkYTgxMDEyODRhOVxuICoqLyIsInZhciBCb290c3RyYXBUb29sdGlwID0gcmVxdWlyZSgncmVhY3QtYm9vdHN0cmFwL1Rvb2x0aXAnKTtcblxudmFyIFRvb2x0aXAgPSBCb290c3RyYXBUb29sdGlwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtUb29sdGlwfTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3Rvb2x0aXAuanNcbiAqKi8iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGpvaW5DbGFzc2VzID0gcmVxdWlyZSgnLi91dGlscy9qb2luQ2xhc3NlcycpO1xudmFyIGNsYXNzU2V0ID0gcmVxdWlyZSgnLi91dGlscy9jbGFzc1NldCcpO1xudmFyIEJvb3RzdHJhcE1peGluID0gcmVxdWlyZSgnLi9Cb290c3RyYXBNaXhpbicpO1xuXG5cbnZhciBUb29sdGlwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlRvb2x0aXBcIixcbiAgbWl4aW5zOiBbQm9vdHN0cmFwTWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHBsYWNlbWVudDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsndG9wJywncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSksXG4gICAgcG9zaXRpb25MZWZ0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHBvc2l0aW9uVG9wOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGFycm93T2Zmc2V0TGVmdDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBhcnJvd09mZnNldFRvcDogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGFjZW1lbnQ6ICdyaWdodCdcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbGFzc2VzID0ge307XG4gICAgY2xhc3Nlc1sndG9vbHRpcCddID0gdHJ1ZTtcbiAgICBjbGFzc2VzW3RoaXMucHJvcHMucGxhY2VtZW50XSA9IHRydWU7XG4gICAgY2xhc3Nlc1snaW4nXSA9IHRoaXMucHJvcHMucG9zaXRpb25MZWZ0ICE9IG51bGwgfHwgdGhpcy5wcm9wcy5wb3NpdGlvblRvcCAhPSBudWxsO1xuXG4gICAgdmFyIHN0eWxlID0ge307XG4gICAgc3R5bGVbJ2xlZnQnXSA9IHRoaXMucHJvcHMucG9zaXRpb25MZWZ0O1xuICAgIHN0eWxlWyd0b3AnXSA9IHRoaXMucHJvcHMucG9zaXRpb25Ub3A7XG5cbiAgICB2YXIgYXJyb3dTdHlsZSA9IHt9O1xuICAgIGFycm93U3R5bGVbJ2xlZnQnXSA9IHRoaXMucHJvcHMuYXJyb3dPZmZzZXRMZWZ0O1xuICAgIGFycm93U3R5bGVbJ3RvcCddID0gdGhpcy5wcm9wcy5hcnJvd09mZnNldFRvcDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgUmVhY3QuX19zcHJlYWQoe30sICB0aGlzLnByb3BzLCB7Y2xhc3NOYW1lOiBqb2luQ2xhc3Nlcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgY2xhc3NTZXQoY2xhc3NlcykpLCBzdHlsZTogc3R5bGV9KSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInRvb2x0aXAtYXJyb3dcIiwgc3R5bGU6IGFycm93U3R5bGV9KSwgXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInRvb2x0aXAtaW5uZXJcIn0sIFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVG9vbHRpcDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvVG9vbHRpcC5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGFuIHVubW9kaWZpZWQgdmVyc2lvbiBvZjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvc3JjL3V0aWxzL2pvaW5DbGFzc2VzLmpzXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvTElDRU5TRVxuICogQW4gYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9QQVRFTlRTXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29tYmluZXMgbXVsdGlwbGUgY2xhc3NOYW1lIHN0cmluZ3MgaW50byBvbmUuXG4gKiBodHRwOi8vanNwZXJmLmNvbS9qb2luY2xhc3Nlcy1hcmdzLXZzLWFycmF5XG4gKlxuICogQHBhcmFtIHsuLi4/c3RyaW5nfSBjbGFzc2VzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpvaW5DbGFzc2VzKGNsYXNzTmFtZS8qLCAuLi4gKi8pIHtcbiAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICBjbGFzc05hbWUgPSAnJztcbiAgfVxuICB2YXIgbmV4dENsYXNzO1xuICB2YXIgYXJnTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgaWYgKGFyZ0xlbmd0aCA+IDEpIHtcbiAgICBmb3IgKHZhciBpaSA9IDE7IGlpIDwgYXJnTGVuZ3RoOyBpaSsrKSB7XG4gICAgICBuZXh0Q2xhc3MgPSBhcmd1bWVudHNbaWldO1xuICAgICAgaWYgKG5leHRDbGFzcykge1xuICAgICAgICBjbGFzc05hbWUgPSAoY2xhc3NOYW1lID8gY2xhc3NOYW1lICsgJyAnIDogJycpICsgbmV4dENsYXNzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGpvaW5DbGFzc2VzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL2pvaW5DbGFzc2VzLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgZmlsZSBjb250YWlucyBhbiB1bm1vZGlmaWVkIHZlcnNpb24gb2Y6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL3NyYy92ZW5kb3Ivc3R1YnMvY3guanNcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9MSUNFTlNFXG4gKiBBbiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL1BBVEVOVFNcbiAqL1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBtYXJrIHN0cmluZyBsaXRlcmFscyByZXByZXNlbnRpbmcgQ1NTIGNsYXNzIG5hbWVzXG4gKiBzbyB0aGF0IHRoZXkgY2FuIGJlIHRyYW5zZm9ybWVkIHN0YXRpY2FsbHkuIFRoaXMgYWxsb3dzIGZvciBtb2R1bGFyaXphdGlvblxuICogYW5kIG1pbmlmaWNhdGlvbiBvZiBDU1MgY2xhc3MgbmFtZXMuXG4gKlxuICogSW4gc3RhdGljX3Vwc3RyZWFtLCB0aGlzIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IGltcGxlbWVudGVkLCBidXQgaXQgc2hvdWxkXG4gKiBldmVudHVhbGx5IGJlIHJlcGxhY2VkIHdpdGggc29tZXRoaW5nIG1vcmUgZGVzY3JpcHRpdmUsIGFuZCB0aGUgdHJhbnNmb3JtXG4gKiB0aGF0IGlzIHVzZWQgaW4gdGhlIG1haW4gc3RhY2sgc2hvdWxkIGJlIHBvcnRlZCBmb3IgdXNlIGVsc2V3aGVyZS5cbiAqXG4gKiBAcGFyYW0gc3RyaW5nfG9iamVjdCBjbGFzc05hbWUgdG8gbW9kdWxhcml6ZSwgb3IgYW4gb2JqZWN0IG9mIGtleS92YWx1ZXMuXG4gKiAgICAgICAgICAgICAgICAgICAgICBJbiB0aGUgb2JqZWN0IGNhc2UsIHRoZSB2YWx1ZXMgYXJlIGNvbmRpdGlvbnMgdGhhdFxuICogICAgICAgICAgICAgICAgICAgICAgZGV0ZXJtaW5lIGlmIHRoZSBjbGFzc05hbWUga2V5cyBzaG91bGQgYmUgaW5jbHVkZWQuXG4gKiBAcGFyYW0gW3N0cmluZyAuLi5dICBWYXJpYWJsZSBsaXN0IG9mIGNsYXNzTmFtZXMgaW4gdGhlIHN0cmluZyBjYXNlLlxuICogQHJldHVybiBzdHJpbmcgICAgICAgUmVuZGVyYWJsZSBzcGFjZS1zZXBhcmF0ZWQgQ1NTIGNsYXNzTmFtZS5cbiAqL1xuZnVuY3Rpb24gY3goY2xhc3NOYW1lcykge1xuICBpZiAodHlwZW9mIGNsYXNzTmFtZXMgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoY2xhc3NOYW1lcykuZmlsdGVyKGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZXNbY2xhc3NOYW1lXTtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5qb2luLmNhbGwoYXJndW1lbnRzLCAnICcpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3g7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL2NsYXNzU2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxudmFyIEJvb3RzdHJhcE1peGluID0ge1xuICBwcm9wVHlwZXM6IHtcbiAgICBic0NsYXNzOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoY29uc3RhbnRzLkNMQVNTRVMpKSxcbiAgICBic1N0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoY29uc3RhbnRzLlNUWUxFUykpLFxuICAgIGJzU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKGNvbnN0YW50cy5TSVpFUykpXG4gIH0sXG5cbiAgZ2V0QnNDbGFzc1NldDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbGFzc2VzID0ge307XG5cbiAgICB2YXIgYnNDbGFzcyA9IHRoaXMucHJvcHMuYnNDbGFzcyAmJiBjb25zdGFudHMuQ0xBU1NFU1t0aGlzLnByb3BzLmJzQ2xhc3NdO1xuICAgIGlmIChic0NsYXNzKSB7XG4gICAgICBjbGFzc2VzW2JzQ2xhc3NdID0gdHJ1ZTtcblxuICAgICAgdmFyIHByZWZpeCA9IGJzQ2xhc3MgKyAnLSc7XG5cbiAgICAgIHZhciBic1NpemUgPSB0aGlzLnByb3BzLmJzU2l6ZSAmJiBjb25zdGFudHMuU0laRVNbdGhpcy5wcm9wcy5ic1NpemVdO1xuICAgICAgaWYgKGJzU2l6ZSkge1xuICAgICAgICBjbGFzc2VzW3ByZWZpeCArIGJzU2l6ZV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgYnNTdHlsZSA9IHRoaXMucHJvcHMuYnNTdHlsZSAmJiBjb25zdGFudHMuU1RZTEVTW3RoaXMucHJvcHMuYnNTdHlsZV07XG4gICAgICBpZiAodGhpcy5wcm9wcy5ic1N0eWxlKSB7XG4gICAgICAgIGNsYXNzZXNbcHJlZml4ICsgYnNTdHlsZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvb3RzdHJhcE1peGluO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9Cb290c3RyYXBNaXhpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ0xBU1NFUzoge1xuICAgICdhbGVydCc6ICdhbGVydCcsXG4gICAgJ2J1dHRvbic6ICdidG4nLFxuICAgICdidXR0b24tZ3JvdXAnOiAnYnRuLWdyb3VwJyxcbiAgICAnYnV0dG9uLXRvb2xiYXInOiAnYnRuLXRvb2xiYXInLFxuICAgICdjb2x1bW4nOiAnY29sJyxcbiAgICAnaW5wdXQtZ3JvdXAnOiAnaW5wdXQtZ3JvdXAnLFxuICAgICdmb3JtJzogJ2Zvcm0nLFxuICAgICdnbHlwaGljb24nOiAnZ2x5cGhpY29uJyxcbiAgICAnbGFiZWwnOiAnbGFiZWwnLFxuICAgICdsaXN0LWdyb3VwLWl0ZW0nOiAnbGlzdC1ncm91cC1pdGVtJyxcbiAgICAncGFuZWwnOiAncGFuZWwnLFxuICAgICdwYW5lbC1ncm91cCc6ICdwYW5lbC1ncm91cCcsXG4gICAgJ3Byb2dyZXNzLWJhcic6ICdwcm9ncmVzcy1iYXInLFxuICAgICduYXYnOiAnbmF2JyxcbiAgICAnbmF2YmFyJzogJ25hdmJhcicsXG4gICAgJ21vZGFsJzogJ21vZGFsJyxcbiAgICAncm93JzogJ3JvdycsXG4gICAgJ3dlbGwnOiAnd2VsbCdcbiAgfSxcbiAgU1RZTEVTOiB7XG4gICAgJ2RlZmF1bHQnOiAnZGVmYXVsdCcsXG4gICAgJ3ByaW1hcnknOiAncHJpbWFyeScsXG4gICAgJ3N1Y2Nlc3MnOiAnc3VjY2VzcycsXG4gICAgJ2luZm8nOiAnaW5mbycsXG4gICAgJ3dhcm5pbmcnOiAnd2FybmluZycsXG4gICAgJ2Rhbmdlcic6ICdkYW5nZXInLFxuICAgICdsaW5rJzogJ2xpbmsnLFxuICAgICdpbmxpbmUnOiAnaW5saW5lJyxcbiAgICAndGFicyc6ICd0YWJzJyxcbiAgICAncGlsbHMnOiAncGlsbHMnXG4gIH0sXG4gIFNJWkVTOiB7XG4gICAgJ2xhcmdlJzogJ2xnJyxcbiAgICAnbWVkaXVtJzogJ21kJyxcbiAgICAnc21hbGwnOiAnc20nLFxuICAgICd4c21hbGwnOiAneHMnXG4gIH0sXG4gIEdMWVBIUzogW1xuICAgICdhc3RlcmlzaycsXG4gICAgJ3BsdXMnLFxuICAgICdldXJvJyxcbiAgICAnbWludXMnLFxuICAgICdjbG91ZCcsXG4gICAgJ2VudmVsb3BlJyxcbiAgICAncGVuY2lsJyxcbiAgICAnZ2xhc3MnLFxuICAgICdtdXNpYycsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ2hlYXJ0JyxcbiAgICAnc3RhcicsXG4gICAgJ3N0YXItZW1wdHknLFxuICAgICd1c2VyJyxcbiAgICAnZmlsbScsXG4gICAgJ3RoLWxhcmdlJyxcbiAgICAndGgnLFxuICAgICd0aC1saXN0JyxcbiAgICAnb2snLFxuICAgICdyZW1vdmUnLFxuICAgICd6b29tLWluJyxcbiAgICAnem9vbS1vdXQnLFxuICAgICdvZmYnLFxuICAgICdzaWduYWwnLFxuICAgICdjb2cnLFxuICAgICd0cmFzaCcsXG4gICAgJ2hvbWUnLFxuICAgICdmaWxlJyxcbiAgICAndGltZScsXG4gICAgJ3JvYWQnLFxuICAgICdkb3dubG9hZC1hbHQnLFxuICAgICdkb3dubG9hZCcsXG4gICAgJ3VwbG9hZCcsXG4gICAgJ2luYm94JyxcbiAgICAncGxheS1jaXJjbGUnLFxuICAgICdyZXBlYXQnLFxuICAgICdyZWZyZXNoJyxcbiAgICAnbGlzdC1hbHQnLFxuICAgICdsb2NrJyxcbiAgICAnZmxhZycsXG4gICAgJ2hlYWRwaG9uZXMnLFxuICAgICd2b2x1bWUtb2ZmJyxcbiAgICAndm9sdW1lLWRvd24nLFxuICAgICd2b2x1bWUtdXAnLFxuICAgICdxcmNvZGUnLFxuICAgICdiYXJjb2RlJyxcbiAgICAndGFnJyxcbiAgICAndGFncycsXG4gICAgJ2Jvb2snLFxuICAgICdib29rbWFyaycsXG4gICAgJ3ByaW50JyxcbiAgICAnY2FtZXJhJyxcbiAgICAnZm9udCcsXG4gICAgJ2JvbGQnLFxuICAgICdpdGFsaWMnLFxuICAgICd0ZXh0LWhlaWdodCcsXG4gICAgJ3RleHQtd2lkdGgnLFxuICAgICdhbGlnbi1sZWZ0JyxcbiAgICAnYWxpZ24tY2VudGVyJyxcbiAgICAnYWxpZ24tcmlnaHQnLFxuICAgICdhbGlnbi1qdXN0aWZ5JyxcbiAgICAnbGlzdCcsXG4gICAgJ2luZGVudC1sZWZ0JyxcbiAgICAnaW5kZW50LXJpZ2h0JyxcbiAgICAnZmFjZXRpbWUtdmlkZW8nLFxuICAgICdwaWN0dXJlJyxcbiAgICAnbWFwLW1hcmtlcicsXG4gICAgJ2FkanVzdCcsXG4gICAgJ3RpbnQnLFxuICAgICdlZGl0JyxcbiAgICAnc2hhcmUnLFxuICAgICdjaGVjaycsXG4gICAgJ21vdmUnLFxuICAgICdzdGVwLWJhY2t3YXJkJyxcbiAgICAnZmFzdC1iYWNrd2FyZCcsXG4gICAgJ2JhY2t3YXJkJyxcbiAgICAncGxheScsXG4gICAgJ3BhdXNlJyxcbiAgICAnc3RvcCcsXG4gICAgJ2ZvcndhcmQnLFxuICAgICdmYXN0LWZvcndhcmQnLFxuICAgICdzdGVwLWZvcndhcmQnLFxuICAgICdlamVjdCcsXG4gICAgJ2NoZXZyb24tbGVmdCcsXG4gICAgJ2NoZXZyb24tcmlnaHQnLFxuICAgICdwbHVzLXNpZ24nLFxuICAgICdtaW51cy1zaWduJyxcbiAgICAncmVtb3ZlLXNpZ24nLFxuICAgICdvay1zaWduJyxcbiAgICAncXVlc3Rpb24tc2lnbicsXG4gICAgJ2luZm8tc2lnbicsXG4gICAgJ3NjcmVlbnNob3QnLFxuICAgICdyZW1vdmUtY2lyY2xlJyxcbiAgICAnb2stY2lyY2xlJyxcbiAgICAnYmFuLWNpcmNsZScsXG4gICAgJ2Fycm93LWxlZnQnLFxuICAgICdhcnJvdy1yaWdodCcsXG4gICAgJ2Fycm93LXVwJyxcbiAgICAnYXJyb3ctZG93bicsXG4gICAgJ3NoYXJlLWFsdCcsXG4gICAgJ3Jlc2l6ZS1mdWxsJyxcbiAgICAncmVzaXplLXNtYWxsJyxcbiAgICAnZXhjbGFtYXRpb24tc2lnbicsXG4gICAgJ2dpZnQnLFxuICAgICdsZWFmJyxcbiAgICAnZmlyZScsXG4gICAgJ2V5ZS1vcGVuJyxcbiAgICAnZXllLWNsb3NlJyxcbiAgICAnd2FybmluZy1zaWduJyxcbiAgICAncGxhbmUnLFxuICAgICdjYWxlbmRhcicsXG4gICAgJ3JhbmRvbScsXG4gICAgJ2NvbW1lbnQnLFxuICAgICdtYWduZXQnLFxuICAgICdjaGV2cm9uLXVwJyxcbiAgICAnY2hldnJvbi1kb3duJyxcbiAgICAncmV0d2VldCcsXG4gICAgJ3Nob3BwaW5nLWNhcnQnLFxuICAgICdmb2xkZXItY2xvc2UnLFxuICAgICdmb2xkZXItb3BlbicsXG4gICAgJ3Jlc2l6ZS12ZXJ0aWNhbCcsXG4gICAgJ3Jlc2l6ZS1ob3Jpem9udGFsJyxcbiAgICAnaGRkJyxcbiAgICAnYnVsbGhvcm4nLFxuICAgICdiZWxsJyxcbiAgICAnY2VydGlmaWNhdGUnLFxuICAgICd0aHVtYnMtdXAnLFxuICAgICd0aHVtYnMtZG93bicsXG4gICAgJ2hhbmQtcmlnaHQnLFxuICAgICdoYW5kLWxlZnQnLFxuICAgICdoYW5kLXVwJyxcbiAgICAnaGFuZC1kb3duJyxcbiAgICAnY2lyY2xlLWFycm93LXJpZ2h0JyxcbiAgICAnY2lyY2xlLWFycm93LWxlZnQnLFxuICAgICdjaXJjbGUtYXJyb3ctdXAnLFxuICAgICdjaXJjbGUtYXJyb3ctZG93bicsXG4gICAgJ2dsb2JlJyxcbiAgICAnd3JlbmNoJyxcbiAgICAndGFza3MnLFxuICAgICdmaWx0ZXInLFxuICAgICdicmllZmNhc2UnLFxuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnZGFzaGJvYXJkJyxcbiAgICAncGFwZXJjbGlwJyxcbiAgICAnaGVhcnQtZW1wdHknLFxuICAgICdsaW5rJyxcbiAgICAncGhvbmUnLFxuICAgICdwdXNocGluJyxcbiAgICAndXNkJyxcbiAgICAnZ2JwJyxcbiAgICAnc29ydCcsXG4gICAgJ3NvcnQtYnktYWxwaGFiZXQnLFxuICAgICdzb3J0LWJ5LWFscGhhYmV0LWFsdCcsXG4gICAgJ3NvcnQtYnktb3JkZXInLFxuICAgICdzb3J0LWJ5LW9yZGVyLWFsdCcsXG4gICAgJ3NvcnQtYnktYXR0cmlidXRlcycsXG4gICAgJ3NvcnQtYnktYXR0cmlidXRlcy1hbHQnLFxuICAgICd1bmNoZWNrZWQnLFxuICAgICdleHBhbmQnLFxuICAgICdjb2xsYXBzZS1kb3duJyxcbiAgICAnY29sbGFwc2UtdXAnLFxuICAgICdsb2ctaW4nLFxuICAgICdmbGFzaCcsXG4gICAgJ2xvZy1vdXQnLFxuICAgICduZXctd2luZG93JyxcbiAgICAncmVjb3JkJyxcbiAgICAnc2F2ZScsXG4gICAgJ29wZW4nLFxuICAgICdzYXZlZCcsXG4gICAgJ2ltcG9ydCcsXG4gICAgJ2V4cG9ydCcsXG4gICAgJ3NlbmQnLFxuICAgICdmbG9wcHktZGlzaycsXG4gICAgJ2Zsb3BweS1zYXZlZCcsXG4gICAgJ2Zsb3BweS1yZW1vdmUnLFxuICAgICdmbG9wcHktc2F2ZScsXG4gICAgJ2Zsb3BweS1vcGVuJyxcbiAgICAnY3JlZGl0LWNhcmQnLFxuICAgICd0cmFuc2ZlcicsXG4gICAgJ2N1dGxlcnknLFxuICAgICdoZWFkZXInLFxuICAgICdjb21wcmVzc2VkJyxcbiAgICAnZWFycGhvbmUnLFxuICAgICdwaG9uZS1hbHQnLFxuICAgICd0b3dlcicsXG4gICAgJ3N0YXRzJyxcbiAgICAnc2QtdmlkZW8nLFxuICAgICdoZC12aWRlbycsXG4gICAgJ3N1YnRpdGxlcycsXG4gICAgJ3NvdW5kLXN0ZXJlbycsXG4gICAgJ3NvdW5kLWRvbGJ5JyxcbiAgICAnc291bmQtNS0xJyxcbiAgICAnc291bmQtNi0xJyxcbiAgICAnc291bmQtNy0xJyxcbiAgICAnY29weXJpZ2h0LW1hcmsnLFxuICAgICdyZWdpc3RyYXRpb24tbWFyaycsXG4gICAgJ2Nsb3VkLWRvd25sb2FkJyxcbiAgICAnY2xvdWQtdXBsb2FkJyxcbiAgICAndHJlZS1jb25pZmVyJyxcbiAgICAndHJlZS1kZWNpZHVvdXMnXG4gIF1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvY29uc3RhbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InRvb2x0aXAvdG9vbHRpcC5qcyJ9