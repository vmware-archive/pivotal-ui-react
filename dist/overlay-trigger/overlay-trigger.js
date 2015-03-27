/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["pivotal-ui-react.overlay-trigger"] = factory(require("react"));
	else
		root["pivotal-ui-react.overlay-trigger"] = factory(root["react"]);
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
/*!************************************************!*\
  !*** ./src/overlay-trigger/overlay-trigger.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var BootstrapOverlayTrigger = __webpack_require__(/*! react-bootstrap/OverlayTrigger */ 1);
	
	var OverlayTrigger = BootstrapOverlayTrigger;
	
	module.exports = { OverlayTrigger: OverlayTrigger };

/***/ },
/* 1 */
/*!*********************************************!*\
  !*** ./~/react-bootstrap/OverlayTrigger.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 3);
	var OverlayMixin = __webpack_require__(/*! ./OverlayMixin */ 7);
	var domUtils = __webpack_require__(/*! ./utils/domUtils */ 8);
	var cloneWithProps = __webpack_require__(/*! ./utils/cloneWithProps */ 9);
	
	var createChainedFunction = __webpack_require__(/*! ./utils/createChainedFunction */ 10);
	var assign = __webpack_require__(/*! ./utils/Object.assign */ 11);
	
	/**
	 * Check if value one is inside or equal to the of value
	 *
	 * @param {string} one
	 * @param {string|array} of
	 * @returns {boolean}
	 */
	function isOneOf(one, of) {
	  if (Array.isArray(of)) {
	    return of.indexOf(one) >= 0;
	  }
	  return one === of;
	}
	
	var OverlayTrigger = React.createClass({displayName: "OverlayTrigger",
	  mixins: [OverlayMixin],
	
	  propTypes: {
	    trigger: React.PropTypes.oneOfType([
	      React.PropTypes.oneOf(['manual', 'click', 'hover', 'focus']),
	      React.PropTypes.arrayOf(React.PropTypes.oneOf(['click', 'hover', 'focus']))
	    ]),
	    placement: React.PropTypes.oneOf(['top','right', 'bottom', 'left']),
	    delay: React.PropTypes.number,
	    delayShow: React.PropTypes.number,
	    delayHide: React.PropTypes.number,
	    defaultOverlayShown: React.PropTypes.bool,
	    overlay: React.PropTypes.node.isRequired
	  },
	
	  getDefaultProps: function () {
	    return {
	      placement: 'right',
	      trigger: ['hover', 'focus']
	    };
	  },
	
	  getInitialState: function () {
	    return {
	      isOverlayShown: this.props.defaultOverlayShown == null ?
	        false : this.props.defaultOverlayShown,
	      overlayLeft: null,
	      overlayTop: null
	    };
	  },
	
	  show: function () {
	    this.setState({
	      isOverlayShown: true
	    }, function() {
	      this.updateOverlayPosition();
	    });
	  },
	
	  hide: function () {
	    this.setState({
	      isOverlayShown: false
	    });
	  },
	
	  toggle: function () {
	    this.state.isOverlayShown ?
	      this.hide() : this.show();
	  },
	
	  renderOverlay: function () {
	    if (!this.state.isOverlayShown) {
	      return React.createElement("span", null);
	    }
	
	    return cloneWithProps(
	      this.props.overlay,
	      {
	        onRequestHide: this.hide,
	        placement: this.props.placement,
	        positionLeft: this.state.overlayLeft,
	        positionTop: this.state.overlayTop
	      }
	    );
	  },
	
	  render: function () {
	    if (this.props.trigger === 'manual') {
	      return React.Children.only(this.props.children);
	    }
	
	    var props = {};
	
	    if (isOneOf('click', this.props.trigger)) {
	      props.onClick = createChainedFunction(this.toggle, this.props.onClick);
	    }
	
	    if (isOneOf('hover', this.props.trigger)) {
	      props.onMouseOver = createChainedFunction(this.handleDelayedShow, this.props.onMouseOver);
	      props.onMouseOut = createChainedFunction(this.handleDelayedHide, this.props.onMouseOut);
	    }
	
	    if (isOneOf('focus', this.props.trigger)) {
	      props.onFocus = createChainedFunction(this.handleDelayedShow, this.props.onFocus);
	      props.onBlur = createChainedFunction(this.handleDelayedHide, this.props.onBlur);
	    }
	
	    return cloneWithProps(
	      React.Children.only(this.props.children),
	      props
	    );
	  },
	
	  componentWillUnmount: function() {
	    clearTimeout(this._hoverDelay);
	  },
	
	  componentDidMount: function() {
	    this.updateOverlayPosition();
	  },
	
	  handleDelayedShow: function () {
	    if (this._hoverDelay != null) {
	      clearTimeout(this._hoverDelay);
	      this._hoverDelay = null;
	      return;
	    }
	
	    var delay = this.props.delayShow != null ?
	      this.props.delayShow : this.props.delay;
	
	    if (!delay) {
	      this.show();
	      return;
	    }
	
	    this._hoverDelay = setTimeout(function() {
	      this._hoverDelay = null;
	      this.show();
	    }.bind(this), delay);
	  },
	
	  handleDelayedHide: function () {
	    if (this._hoverDelay != null) {
	      clearTimeout(this._hoverDelay);
	      this._hoverDelay = null;
	      return;
	    }
	
	    var delay = this.props.delayHide != null ?
	      this.props.delayHide : this.props.delay;
	
	    if (!delay) {
	      this.hide();
	      return;
	    }
	
	    this._hoverDelay = setTimeout(function() {
	      this._hoverDelay = null;
	      this.hide();
	    }.bind(this), delay);
	  },
	
	  updateOverlayPosition: function () {
	    if (!this.isMounted()) {
	      return;
	    }
	
	    var pos = this.calcOverlayPosition();
	
	    this.setState({
	      overlayLeft: pos.left,
	      overlayTop: pos.top
	    });
	  },
	
	  calcOverlayPosition: function () {
	    var childOffset = this.getPosition();
	
	    var overlayNode = this.getOverlayDOMNode();
	    var overlayHeight = overlayNode.offsetHeight;
	    var overlayWidth = overlayNode.offsetWidth;
	
	    switch (this.props.placement) {
	      case 'right':
	        return {
	          top: childOffset.top + childOffset.height / 2 - overlayHeight / 2,
	          left: childOffset.left + childOffset.width
	        };
	      case 'left':
	        return {
	          top: childOffset.top + childOffset.height / 2 - overlayHeight / 2,
	          left: childOffset.left - overlayWidth
	        };
	      case 'top':
	        return {
	          top: childOffset.top - overlayHeight,
	          left: childOffset.left + childOffset.width / 2 - overlayWidth / 2
	        };
	      case 'bottom':
	        return {
	          top: childOffset.top + childOffset.height,
	          left: childOffset.left + childOffset.width / 2 - overlayWidth / 2
	        };
	      default:
	        throw new Error('calcOverlayPosition(): No such placement of "' + this.props.placement + '" found.');
	    }
	  },
	
	  getPosition: function () {
	    var node = this.getDOMNode();
	    var container = this.getContainerDOMNode();
	
	    var offset = container.tagName == 'BODY' ?
	      domUtils.getOffset(node) : domUtils.getPosition(node, container);
	
	    return assign({}, offset, {
	      height: node.offsetHeight,
	      width: node.offsetWidth
	    });
	  }
	});
	
	module.exports = OverlayTrigger;

/***/ },
/* 2 */,
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
/* 5 */,
/* 6 */,
/* 7 */
/*!*******************************************!*\
  !*** ./~/react-bootstrap/OverlayMixin.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 3);
	var CustomPropTypes = __webpack_require__(/*! ./utils/CustomPropTypes */ 12);
	
	module.exports = {
	  propTypes: {
	    container: CustomPropTypes.mountable
	  },
	
	  getDefaultProps: function () {
	    return {
	      container: {
	        // Provide `getDOMNode` fn mocking a React component API. The `document.body`
	        // reference needs to be contained within this function so that it is not accessed
	        // in environments where it would not be defined, e.g. nodejs. Equally this is needed
	        // before the body is defined where `document.body === null`, this ensures
	        // `document.body` is only accessed after componentDidMount.
	        getDOMNode: function getDOMNode() {
	          return document.body;
	        }
	      }
	    };
	  },
	
	  componentWillUnmount: function () {
	    this._unrenderOverlay();
	    if (this._overlayTarget) {
	      this.getContainerDOMNode()
	        .removeChild(this._overlayTarget);
	      this._overlayTarget = null;
	    }
	  },
	
	  componentDidUpdate: function () {
	    this._renderOverlay();
	  },
	
	  componentDidMount: function () {
	    this._renderOverlay();
	  },
	
	  _mountOverlayTarget: function () {
	    this._overlayTarget = document.createElement('div');
	    this.getContainerDOMNode()
	      .appendChild(this._overlayTarget);
	  },
	
	  _renderOverlay: function () {
	    if (!this._overlayTarget) {
	      this._mountOverlayTarget();
	    }
	
	    var overlay = this.renderOverlay();
	
	    // Save reference to help testing
	    if (overlay !== null) {
	      this._overlayInstance = React.render(overlay, this._overlayTarget);
	    } else {
	      // Unrender if the component is null for transitions to null
	      this._unrenderOverlay();
	    }
	  },
	
	  _unrenderOverlay: function () {
	    React.unmountComponentAtNode(this._overlayTarget);
	    this._overlayInstance = null;
	  },
	
	  getOverlayDOMNode: function () {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
	    }
	
	    if (this._overlayInstance) {
	      return this._overlayInstance.getDOMNode();
	    }
	
	    return null;
	  },
	
	  getContainerDOMNode: function () {
	    return this.props.container.getDOMNode ?
	      this.props.container.getDOMNode() : this.props.container;
	  }
	};


/***/ },
/* 8 */
/*!*********************************************!*\
  !*** ./~/react-bootstrap/utils/domUtils.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Shortcut to compute element style
	 *
	 * @param {HTMLElement} elem
	 * @returns {CssStyle}
	 */
	function getComputedStyles(elem) {
	  return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
	}
	
	/**
	 * Get elements offset
	 *
	 * TODO: REMOVE JQUERY!
	 *
	 * @param {HTMLElement} DOMNode
	 * @returns {{top: number, left: number}}
	 */
	function getOffset(DOMNode) {
	  if (window.jQuery) {
	    return window.jQuery(DOMNode).offset();
	  }
	
	  var docElem = document.documentElement;
	  var box = { top: 0, left: 0 };
	
	  // If we don't have gBCR, just use 0,0 rather than error
	  // BlackBerry 5, iOS 3 (original iPhone)
	  if ( typeof DOMNode.getBoundingClientRect !== 'undefined' ) {
	    box = DOMNode.getBoundingClientRect();
	  }
	
	  return {
	    top: box.top + window.pageYOffset - docElem.clientTop,
	    left: box.left + window.pageXOffset - docElem.clientLeft
	  };
	}
	
	/**
	 * Get elements position
	 *
	 * TODO: REMOVE JQUERY!
	 *
	 * @param {HTMLElement} elem
	 * @param {HTMLElement?} offsetParent
	 * @returns {{top: number, left: number}}
	 */
	function getPosition(elem, offsetParent) {
	  if (window.jQuery) {
	    return window.jQuery(elem).position();
	  }
	
	  var offset,
	      parentOffset = {top: 0, left: 0};
	
	  // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
	  if (getComputedStyles(elem).position === 'fixed' ) {
	    // We assume that getBoundingClientRect is available when computed position is fixed
	    offset = elem.getBoundingClientRect();
	
	  } else {
	    if (!offsetParent) {
	      // Get *real* offsetParent
	      offsetParent = offsetParent(elem);
	    }
	
	    // Get correct offsets
	    offset = getOffset(elem);
	    if ( offsetParent.nodeName !== 'HTML') {
	      parentOffset = getOffset(offsetParent);
	    }
	
	    // Add offsetParent borders
	    parentOffset.top += parseInt(getComputedStyles(offsetParent).borderTopWidth, 10);
	    parentOffset.left += parseInt(getComputedStyles(offsetParent).borderLeftWidth, 10);
	  }
	
	  // Subtract parent offsets and element margins
	  return {
	    top: offset.top - parentOffset.top - parseInt(getComputedStyles(elem).marginTop, 10),
	    left: offset.left - parentOffset.left - parseInt(getComputedStyles(elem).marginLeft, 10)
	  };
	}
	
	/**
	 * Get parent element
	 *
	 * @param {HTMLElement?} elem
	 * @returns {HTMLElement}
	 */
	function offsetParent(elem) {
	  var docElem = document.documentElement;
	  var offsetParent = elem.offsetParent || docElem;
	
	  while ( offsetParent && ( offsetParent.nodeName !== 'HTML' &&
	    getComputedStyles(offsetParent).position === 'static' ) ) {
	    offsetParent = offsetParent.offsetParent;
	  }
	
	  return offsetParent || docElem;
	}
	
	module.exports = {
	  getComputedStyles: getComputedStyles,
	  getOffset: getOffset,
	  getPosition: getPosition,
	  offsetParent: offsetParent
	};

/***/ },
/* 9 */
/*!***************************************************!*\
  !*** ./~/react-bootstrap/utils/cloneWithProps.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains modified versions of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/utils/cloneWithProps.js
	 * https://github.com/facebook/react/blob/v0.12.0/src/core/ReactPropTransferer.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 *
	 * TODO: This should be replaced as soon as cloneWithProps is available via
	 *  the core React package or a separate package.
	 *  @see https://github.com/facebook/react/issues/1906
	 */
	
	var React = __webpack_require__(/*! react */ 3);
	var joinClasses = __webpack_require__(/*! ./joinClasses */ 4);
	var assign = __webpack_require__(/*! ./Object.assign */ 11);
	
	/**
	 * Creates a transfer strategy that will merge prop values using the supplied
	 * `mergeStrategy`. If a prop was previously unset, this just sets it.
	 *
	 * @param {function} mergeStrategy
	 * @return {function}
	 */
	function createTransferStrategy(mergeStrategy) {
	  return function(props, key, value) {
	    if (!props.hasOwnProperty(key)) {
	      props[key] = value;
	    } else {
	      props[key] = mergeStrategy(props[key], value);
	    }
	  };
	}
	
	var transferStrategyMerge = createTransferStrategy(function(a, b) {
	  // `merge` overrides the first object's (`props[key]` above) keys using the
	  // second object's (`value`) keys. An object's style's existing `propA` would
	  // get overridden. Flip the order here.
	  return assign({}, b, a);
	});
	
	function emptyFunction() {}
	
	/**
	 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
	 * NOTE: if you add any more exceptions to this list you should be sure to
	 * update `cloneWithProps()` accordingly.
	 */
	var TransferStrategies = {
	  /**
	   * Never transfer `children`.
	   */
	  children: emptyFunction,
	  /**
	   * Transfer the `className` prop by merging them.
	   */
	  className: createTransferStrategy(joinClasses),
	  /**
	   * Transfer the `style` prop (which is an object) by merging them.
	   */
	  style: transferStrategyMerge
	};
	
	/**
	 * Mutates the first argument by transferring the properties from the second
	 * argument.
	 *
	 * @param {object} props
	 * @param {object} newProps
	 * @return {object}
	 */
	function transferInto(props, newProps) {
	  for (var thisKey in newProps) {
	    if (!newProps.hasOwnProperty(thisKey)) {
	      continue;
	    }
	
	    var transferStrategy = TransferStrategies[thisKey];
	
	    if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
	      transferStrategy(props, thisKey, newProps[thisKey]);
	    } else if (!props.hasOwnProperty(thisKey)) {
	      props[thisKey] = newProps[thisKey];
	    }
	  }
	  return props;
	}
	
	/**
	 * Merge two props objects using TransferStrategies.
	 *
	 * @param {object} oldProps original props (they take precedence)
	 * @param {object} newProps new props to merge in
	 * @return {object} a new object containing both sets of props merged.
	 */
	function mergeProps(oldProps, newProps) {
	  return transferInto(assign({}, oldProps), newProps);
	}
	
	
	var ReactPropTransferer = {
	  mergeProps: mergeProps
	};
	
	var CHILDREN_PROP = 'children';
	
	/**
	 * Sometimes you want to change the props of a child passed to you. Usually
	 * this is to add a CSS class.
	 *
	 * @param {object} child child component you'd like to clone
	 * @param {object} props props you'd like to modify. They will be merged
	 * as if you used `transferPropsTo()`.
	 * @return {object} a clone of child with props merged in.
	 */
	function cloneWithProps(child, props) {
	  var newProps = ReactPropTransferer.mergeProps(props, child.props);
	
	  // Use `child.props.children` if it is provided.
	  if (!newProps.hasOwnProperty(CHILDREN_PROP) &&
	    child.props.hasOwnProperty(CHILDREN_PROP)) {
	    newProps.children = child.props.children;
	  }
	
	  if (React.version.substr(0, 4) === '0.12'){
	    var mockLegacyFactory = function(){};
	    mockLegacyFactory.isReactLegacyFactory = true;
	    mockLegacyFactory.type = child.type;
	
	    return React.createElement(mockLegacyFactory, newProps);
	  }
	
	  // The current API doesn't retain _owner and _context, which is why this
	  // doesn't use ReactElement.cloneAndReplaceProps.
	  return React.createElement(child.type, newProps);
	}
	
	module.exports = cloneWithProps;

/***/ },
/* 10 */
/*!**********************************************************!*\
  !*** ./~/react-bootstrap/utils/createChainedFunction.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} one
	 * @param {function} two
	 * @returns {function|null}
	 */
	function createChainedFunction(one, two) {
	  var hasOne = typeof one === 'function';
	  var hasTwo = typeof two === 'function';
	
	  if (!hasOne && !hasTwo) { return null; }
	  if (!hasOne) { return two; }
	  if (!hasTwo) { return one; }
	
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}
	
	module.exports = createChainedFunction;

/***/ },
/* 11 */
/*!**************************************************!*\
  !*** ./~/react-bootstrap/utils/Object.assign.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/Object.assign.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
	
	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }
	
	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }
	
	    var from = Object(nextSource);
	
	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.
	
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }
	
	  return to;
	};
	
	module.exports = assign;


/***/ },
/* 12 */
/*!****************************************************!*\
  !*** ./~/react-bootstrap/utils/CustomPropTypes.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 3);
	
	var ANONYMOUS = '<<anonymous>>';
	
	var CustomPropTypes = {
	  /**
	   * Checks whether a prop provides a DOM element
	   *
	   * The element can be provided in two forms:
	   * - Directly passed
	   * - Or passed an object which has a `getDOMNode` method which will return the required DOM element
	   *
	   * @param props
	   * @param propName
	   * @param componentName
	   * @returns {Error|undefined}
	   */
	  mountable: createMountableChecker()
	};
	
	/**
	 * Create chain-able isRequired validator
	 *
	 * Largely copied directly from:
	 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
	 */
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName) {
	    componentName = componentName || ANONYMOUS;
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error(
	          'Required prop `' + propName + '` was not specified in ' +
	            '`' + componentName + '`.'
	        );
	      }
	    } else {
	      return validate(props, propName, componentName);
	    }
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}
	
	function createMountableChecker() {
	  function validate(props, propName, componentName) {
	    if (typeof props[propName] !== 'object' ||
	      typeof props[propName].getDOMNode !== 'function' && props[propName].nodeType !== 1) {
	      return new Error(
	        'Invalid prop `' + propName + '` supplied to ' +
	          '`' + componentName + '`, expected a DOM element or an object that has a `getDOMNode` method'
	      );
	    }
	  }
	
	  return createChainableTypeChecker(validate);
	}
	
	module.exports = CustomPropTypes;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3N2I4M2VjYTJhYTdkY2M0ZDNkYSIsIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcmxheS10cmlnZ2VyL292ZXJsYXktdHJpZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9PdmVybGF5VHJpZ2dlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL2pvaW5DbGFzc2VzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL092ZXJsYXlNaXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC91dGlscy9kb21VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC91dGlscy9jbG9uZVdpdGhQcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvdXRpbHMvT2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC91dGlscy9DdXN0b21Qcm9wVHlwZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBSSx1QkFBdUIsR0FBRyxtQkFBTyxDQUFDLHVDQUFnQyxDQUFDLENBQUM7O0FBRXhFLEtBQUksY0FBYyxHQUFHLHVCQUF1QixDQUFDOztBQUU3QyxPQUFNLENBQUMsT0FBTyxHQUFHLEVBQUMsY0FBYyxFQUFkLGNBQWMsRUFBQyxDOzs7Ozs7Ozs7QUNKakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxhQUFhO0FBQ3hCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDOztBQUVELGlDOzs7Ozs7Ozs7O0FDbE9BLGdEOzs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFdBQVc7QUFDdEIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsWUFBWTtBQUN2QixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsWUFBWTtBQUN2QixlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFlBQVk7QUFDdkIsWUFBVyxhQUFhO0FBQ3hCLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXNCOztBQUV0Qiw2REFBNEQsZUFBZTtBQUMzRTtBQUNBO0FBQ0E7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsYUFBYTtBQUN4QixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsYUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEI7QUFDQSxhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQixZQUFXLFNBQVM7QUFDcEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUEyQixhQUFhO0FBQ3hDLGlCQUFnQixZQUFZO0FBQzVCLGlCQUFnQixZQUFZOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQXlCLDhCQUE4QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQzlDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtDIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGl2b3RhbC11aS1yZWFjdC5vdmVybGF5LXRyaWdnZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicGl2b3RhbC11aS1yZWFjdC5vdmVybGF5LXRyaWdnZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDc3YjgzZWNhMmFhN2RjYzRkM2RhXG4gKiovIiwidmFyIEJvb3RzdHJhcE92ZXJsYXlUcmlnZ2VyID0gcmVxdWlyZSgncmVhY3QtYm9vdHN0cmFwL092ZXJsYXlUcmlnZ2VyJyk7XG5cbnZhciBPdmVybGF5VHJpZ2dlciA9IEJvb3RzdHJhcE92ZXJsYXlUcmlnZ2VyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtPdmVybGF5VHJpZ2dlcn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvb3ZlcmxheS10cmlnZ2VyL292ZXJsYXktdHJpZ2dlci5qc1xuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgT3ZlcmxheU1peGluID0gcmVxdWlyZSgnLi9PdmVybGF5TWl4aW4nKTtcbnZhciBkb21VdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvZG9tVXRpbHMnKTtcbnZhciBjbG9uZVdpdGhQcm9wcyA9IHJlcXVpcmUoJy4vdXRpbHMvY2xvbmVXaXRoUHJvcHMnKTtcblxudmFyIGNyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi91dGlscy9PYmplY3QuYXNzaWduJyk7XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgb25lIGlzIGluc2lkZSBvciBlcXVhbCB0byB0aGUgb2YgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gb25lXG4gKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gb2ZcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc09uZU9mKG9uZSwgb2YpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2YpKSB7XG4gICAgcmV0dXJuIG9mLmluZGV4T2Yob25lKSA+PSAwO1xuICB9XG4gIHJldHVybiBvbmUgPT09IG9mO1xufVxuXG52YXIgT3ZlcmxheVRyaWdnZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiT3ZlcmxheVRyaWdnZXJcIixcbiAgbWl4aW5zOiBbT3ZlcmxheU1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB0cmlnZ2VyOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ21hbnVhbCcsICdjbGljaycsICdob3ZlcicsICdmb2N1cyddKSxcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10pKVxuICAgIF0pLFxuICAgIHBsYWNlbWVudDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsndG9wJywncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSksXG4gICAgZGVsYXk6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVsYXlTaG93OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGRlbGF5SGlkZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBkZWZhdWx0T3ZlcmxheVNob3duOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvdmVybGF5OiBSZWFjdC5Qcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgIHRyaWdnZXI6IFsnaG92ZXInLCAnZm9jdXMnXVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiB0aGlzLnByb3BzLmRlZmF1bHRPdmVybGF5U2hvd24gPT0gbnVsbCA/XG4gICAgICAgIGZhbHNlIDogdGhpcy5wcm9wcy5kZWZhdWx0T3ZlcmxheVNob3duLFxuICAgICAgb3ZlcmxheUxlZnQ6IG51bGwsXG4gICAgICBvdmVybGF5VG9wOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc092ZXJsYXlTaG93bjogdHJ1ZVxuICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy51cGRhdGVPdmVybGF5UG9zaXRpb24oKTtcbiAgICB9KTtcbiAgfSxcblxuICBoaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc092ZXJsYXlTaG93bjogZmFsc2VcbiAgICB9KTtcbiAgfSxcblxuICB0b2dnbGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0YXRlLmlzT3ZlcmxheVNob3duID9cbiAgICAgIHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XG4gIH0sXG5cbiAgcmVuZGVyT3ZlcmxheTogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc092ZXJsYXlTaG93bikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZVdpdGhQcm9wcyhcbiAgICAgIHRoaXMucHJvcHMub3ZlcmxheSxcbiAgICAgIHtcbiAgICAgICAgb25SZXF1ZXN0SGlkZTogdGhpcy5oaWRlLFxuICAgICAgICBwbGFjZW1lbnQ6IHRoaXMucHJvcHMucGxhY2VtZW50LFxuICAgICAgICBwb3NpdGlvbkxlZnQ6IHRoaXMuc3RhdGUub3ZlcmxheUxlZnQsXG4gICAgICAgIHBvc2l0aW9uVG9wOiB0aGlzLnN0YXRlLm92ZXJsYXlUb3BcbiAgICAgIH1cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIgPT09ICdtYW51YWwnKSB7XG4gICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcblxuICAgIGlmIChpc09uZU9mKCdjbGljaycsIHRoaXMucHJvcHMudHJpZ2dlcikpIHtcbiAgICAgIHByb3BzLm9uQ2xpY2sgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24odGhpcy50b2dnbGUsIHRoaXMucHJvcHMub25DbGljayk7XG4gICAgfVxuXG4gICAgaWYgKGlzT25lT2YoJ2hvdmVyJywgdGhpcy5wcm9wcy50cmlnZ2VyKSkge1xuICAgICAgcHJvcHMub25Nb3VzZU92ZXIgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24odGhpcy5oYW5kbGVEZWxheWVkU2hvdywgdGhpcy5wcm9wcy5vbk1vdXNlT3Zlcik7XG4gICAgICBwcm9wcy5vbk1vdXNlT3V0ID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKHRoaXMuaGFuZGxlRGVsYXllZEhpZGUsIHRoaXMucHJvcHMub25Nb3VzZU91dCk7XG4gICAgfVxuXG4gICAgaWYgKGlzT25lT2YoJ2ZvY3VzJywgdGhpcy5wcm9wcy50cmlnZ2VyKSkge1xuICAgICAgcHJvcHMub25Gb2N1cyA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbih0aGlzLmhhbmRsZURlbGF5ZWRTaG93LCB0aGlzLnByb3BzLm9uRm9jdXMpO1xuICAgICAgcHJvcHMub25CbHVyID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKHRoaXMuaGFuZGxlRGVsYXllZEhpZGUsIHRoaXMucHJvcHMub25CbHVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVXaXRoUHJvcHMoXG4gICAgICBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLFxuICAgICAgcHJvcHNcbiAgICApO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5faG92ZXJEZWxheSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudXBkYXRlT3ZlcmxheVBvc2l0aW9uKCk7XG4gIH0sXG5cbiAgaGFuZGxlRGVsYXllZFNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5faG92ZXJEZWxheSAhPSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faG92ZXJEZWxheSk7XG4gICAgICB0aGlzLl9ob3ZlckRlbGF5ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGVsYXkgPSB0aGlzLnByb3BzLmRlbGF5U2hvdyAhPSBudWxsID9cbiAgICAgIHRoaXMucHJvcHMuZGVsYXlTaG93IDogdGhpcy5wcm9wcy5kZWxheTtcblxuICAgIGlmICghZGVsYXkpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5faG92ZXJEZWxheSA9IG51bGw7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9LmJpbmQodGhpcyksIGRlbGF5KTtcbiAgfSxcblxuICBoYW5kbGVEZWxheWVkSGlkZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9ob3ZlckRlbGF5ICE9IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9ob3ZlckRlbGF5KTtcbiAgICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZWxheSA9IHRoaXMucHJvcHMuZGVsYXlIaWRlICE9IG51bGwgP1xuICAgICAgdGhpcy5wcm9wcy5kZWxheUhpZGUgOiB0aGlzLnByb3BzLmRlbGF5O1xuXG4gICAgaWYgKCFkZWxheSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJEZWxheSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9ob3ZlckRlbGF5ID0gbnVsbDtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0uYmluZCh0aGlzKSwgZGVsYXkpO1xuICB9LFxuXG4gIHVwZGF0ZU92ZXJsYXlQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwb3MgPSB0aGlzLmNhbGNPdmVybGF5UG9zaXRpb24oKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3ZlcmxheUxlZnQ6IHBvcy5sZWZ0LFxuICAgICAgb3ZlcmxheVRvcDogcG9zLnRvcFxuICAgIH0pO1xuICB9LFxuXG4gIGNhbGNPdmVybGF5UG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2hpbGRPZmZzZXQgPSB0aGlzLmdldFBvc2l0aW9uKCk7XG5cbiAgICB2YXIgb3ZlcmxheU5vZGUgPSB0aGlzLmdldE92ZXJsYXlET01Ob2RlKCk7XG4gICAgdmFyIG92ZXJsYXlIZWlnaHQgPSBvdmVybGF5Tm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIG92ZXJsYXlXaWR0aCA9IG92ZXJsYXlOb2RlLm9mZnNldFdpZHRoO1xuXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnBsYWNlbWVudCkge1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvcDogY2hpbGRPZmZzZXQudG9wICsgY2hpbGRPZmZzZXQuaGVpZ2h0IC8gMiAtIG92ZXJsYXlIZWlnaHQgLyAyLFxuICAgICAgICAgIGxlZnQ6IGNoaWxkT2Zmc2V0LmxlZnQgKyBjaGlsZE9mZnNldC53aWR0aFxuICAgICAgICB9O1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiBjaGlsZE9mZnNldC50b3AgKyBjaGlsZE9mZnNldC5oZWlnaHQgLyAyIC0gb3ZlcmxheUhlaWdodCAvIDIsXG4gICAgICAgICAgbGVmdDogY2hpbGRPZmZzZXQubGVmdCAtIG92ZXJsYXlXaWR0aFxuICAgICAgICB9O1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IGNoaWxkT2Zmc2V0LnRvcCAtIG92ZXJsYXlIZWlnaHQsXG4gICAgICAgICAgbGVmdDogY2hpbGRPZmZzZXQubGVmdCArIGNoaWxkT2Zmc2V0LndpZHRoIC8gMiAtIG92ZXJsYXlXaWR0aCAvIDJcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiBjaGlsZE9mZnNldC50b3AgKyBjaGlsZE9mZnNldC5oZWlnaHQsXG4gICAgICAgICAgbGVmdDogY2hpbGRPZmZzZXQubGVmdCArIGNoaWxkT2Zmc2V0LndpZHRoIC8gMiAtIG92ZXJsYXlXaWR0aCAvIDJcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2FsY092ZXJsYXlQb3NpdGlvbigpOiBObyBzdWNoIHBsYWNlbWVudCBvZiBcIicgKyB0aGlzLnByb3BzLnBsYWNlbWVudCArICdcIiBmb3VuZC4nKTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0RE9NTm9kZSgpO1xuICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldENvbnRhaW5lckRPTU5vZGUoKTtcblxuICAgIHZhciBvZmZzZXQgPSBjb250YWluZXIudGFnTmFtZSA9PSAnQk9EWScgP1xuICAgICAgZG9tVXRpbHMuZ2V0T2Zmc2V0KG5vZGUpIDogZG9tVXRpbHMuZ2V0UG9zaXRpb24obm9kZSwgY29udGFpbmVyKTtcblxuICAgIHJldHVybiBhc3NpZ24oe30sIG9mZnNldCwge1xuICAgICAgaGVpZ2h0OiBub2RlLm9mZnNldEhlaWdodCxcbiAgICAgIHdpZHRoOiBub2RlLm9mZnNldFdpZHRoXG4gICAgfSk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE92ZXJsYXlUcmlnZ2VyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9PdmVybGF5VHJpZ2dlci5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGFuIHVubW9kaWZpZWQgdmVyc2lvbiBvZjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvc3JjL3V0aWxzL2pvaW5DbGFzc2VzLmpzXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvTElDRU5TRVxuICogQW4gYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9QQVRFTlRTXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29tYmluZXMgbXVsdGlwbGUgY2xhc3NOYW1lIHN0cmluZ3MgaW50byBvbmUuXG4gKiBodHRwOi8vanNwZXJmLmNvbS9qb2luY2xhc3Nlcy1hcmdzLXZzLWFycmF5XG4gKlxuICogQHBhcmFtIHsuLi4/c3RyaW5nfSBjbGFzc2VzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpvaW5DbGFzc2VzKGNsYXNzTmFtZS8qLCAuLi4gKi8pIHtcbiAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICBjbGFzc05hbWUgPSAnJztcbiAgfVxuICB2YXIgbmV4dENsYXNzO1xuICB2YXIgYXJnTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgaWYgKGFyZ0xlbmd0aCA+IDEpIHtcbiAgICBmb3IgKHZhciBpaSA9IDE7IGlpIDwgYXJnTGVuZ3RoOyBpaSsrKSB7XG4gICAgICBuZXh0Q2xhc3MgPSBhcmd1bWVudHNbaWldO1xuICAgICAgaWYgKG5leHRDbGFzcykge1xuICAgICAgICBjbGFzc05hbWUgPSAoY2xhc3NOYW1lID8gY2xhc3NOYW1lICsgJyAnIDogJycpICsgbmV4dENsYXNzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGpvaW5DbGFzc2VzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL2pvaW5DbGFzc2VzLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEN1c3RvbVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vdXRpbHMvQ3VzdG9tUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm9wVHlwZXM6IHtcbiAgICBjb250YWluZXI6IEN1c3RvbVByb3BUeXBlcy5tb3VudGFibGVcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIC8vIFByb3ZpZGUgYGdldERPTU5vZGVgIGZuIG1vY2tpbmcgYSBSZWFjdCBjb21wb25lbnQgQVBJLiBUaGUgYGRvY3VtZW50LmJvZHlgXG4gICAgICAgIC8vIHJlZmVyZW5jZSBuZWVkcyB0byBiZSBjb250YWluZWQgd2l0aGluIHRoaXMgZnVuY3Rpb24gc28gdGhhdCBpdCBpcyBub3QgYWNjZXNzZWRcbiAgICAgICAgLy8gaW4gZW52aXJvbm1lbnRzIHdoZXJlIGl0IHdvdWxkIG5vdCBiZSBkZWZpbmVkLCBlLmcuIG5vZGVqcy4gRXF1YWxseSB0aGlzIGlzIG5lZWRlZFxuICAgICAgICAvLyBiZWZvcmUgdGhlIGJvZHkgaXMgZGVmaW5lZCB3aGVyZSBgZG9jdW1lbnQuYm9keSA9PT0gbnVsbGAsIHRoaXMgZW5zdXJlc1xuICAgICAgICAvLyBgZG9jdW1lbnQuYm9keWAgaXMgb25seSBhY2Nlc3NlZCBhZnRlciBjb21wb25lbnREaWRNb3VudC5cbiAgICAgICAgZ2V0RE9NTm9kZTogZnVuY3Rpb24gZ2V0RE9NTm9kZSgpIHtcbiAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl91bnJlbmRlck92ZXJsYXkoKTtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVRhcmdldCkge1xuICAgICAgdGhpcy5nZXRDb250YWluZXJET01Ob2RlKClcbiAgICAgICAgLnJlbW92ZUNoaWxkKHRoaXMuX292ZXJsYXlUYXJnZXQpO1xuICAgICAgdGhpcy5fb3ZlcmxheVRhcmdldCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3JlbmRlck92ZXJsYXkoKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3JlbmRlck92ZXJsYXkoKTtcbiAgfSxcblxuICBfbW91bnRPdmVybGF5VGFyZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fb3ZlcmxheVRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyRE9NTm9kZSgpXG4gICAgICAuYXBwZW5kQ2hpbGQodGhpcy5fb3ZlcmxheVRhcmdldCk7XG4gIH0sXG5cbiAgX3JlbmRlck92ZXJsYXk6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX292ZXJsYXlUYXJnZXQpIHtcbiAgICAgIHRoaXMuX21vdW50T3ZlcmxheVRhcmdldCgpO1xuICAgIH1cblxuICAgIHZhciBvdmVybGF5ID0gdGhpcy5yZW5kZXJPdmVybGF5KCk7XG5cbiAgICAvLyBTYXZlIHJlZmVyZW5jZSB0byBoZWxwIHRlc3RpbmdcbiAgICBpZiAob3ZlcmxheSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fb3ZlcmxheUluc3RhbmNlID0gUmVhY3QucmVuZGVyKG92ZXJsYXksIHRoaXMuX292ZXJsYXlUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVbnJlbmRlciBpZiB0aGUgY29tcG9uZW50IGlzIG51bGwgZm9yIHRyYW5zaXRpb25zIHRvIG51bGxcbiAgICAgIHRoaXMuX3VucmVuZGVyT3ZlcmxheSgpO1xuICAgIH1cbiAgfSxcblxuICBfdW5yZW5kZXJPdmVybGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgUmVhY3QudW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLl9vdmVybGF5VGFyZ2V0KTtcbiAgICB0aGlzLl9vdmVybGF5SW5zdGFuY2UgPSBudWxsO1xuICB9LFxuXG4gIGdldE92ZXJsYXlET01Ob2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldE92ZXJsYXlET01Ob2RlKCk6IEEgY29tcG9uZW50IG11c3QgYmUgbW91bnRlZCB0byBoYXZlIGEgRE9NIG5vZGUuJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX292ZXJsYXlJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX292ZXJsYXlJbnN0YW5jZS5nZXRET01Ob2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgZ2V0Q29udGFpbmVyRE9NTm9kZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNvbnRhaW5lci5nZXRET01Ob2RlID9cbiAgICAgIHRoaXMucHJvcHMuY29udGFpbmVyLmdldERPTU5vZGUoKSA6IHRoaXMucHJvcHMuY29udGFpbmVyO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL092ZXJsYXlNaXhpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLyoqXG4gKiBTaG9ydGN1dCB0byBjb21wdXRlIGVsZW1lbnQgc3R5bGVcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7Q3NzU3R5bGV9XG4gKi9cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGVzKGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpO1xufVxuXG4vKipcbiAqIEdldCBlbGVtZW50cyBvZmZzZXRcbiAqXG4gKiBUT0RPOiBSRU1PVkUgSlFVRVJZIVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IERPTU5vZGVcbiAqIEByZXR1cm5zIHt7dG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldChET01Ob2RlKSB7XG4gIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5qUXVlcnkoRE9NTm9kZSkub2Zmc2V0KCk7XG4gIH1cblxuICB2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIGJveCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cbiAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBnQkNSLCBqdXN0IHVzZSAwLDAgcmF0aGVyIHRoYW4gZXJyb3JcbiAgLy8gQmxhY2tCZXJyeSA1LCBpT1MgMyAob3JpZ2luYWwgaVBob25lKVxuICBpZiAoIHR5cGVvZiBET01Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgYm94ID0gRE9NTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBib3gudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXG4gICAgbGVmdDogYm94LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgZWxlbWVudHMgcG9zaXRpb25cbiAqXG4gKiBUT0RPOiBSRU1PVkUgSlFVRVJZIVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnQ/fSBvZmZzZXRQYXJlbnRcbiAqIEByZXR1cm5zIHt7dG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldFBvc2l0aW9uKGVsZW0sIG9mZnNldFBhcmVudCkge1xuICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgIHJldHVybiB3aW5kb3cualF1ZXJ5KGVsZW0pLnBvc2l0aW9uKCk7XG4gIH1cblxuICB2YXIgb2Zmc2V0LFxuICAgICAgcGFyZW50T2Zmc2V0ID0ge3RvcDogMCwgbGVmdDogMH07XG5cbiAgLy8gRml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHdpbmRvdyAocGFyZW50T2Zmc2V0ID0ge3RvcDowLCBsZWZ0OiAwfSwgYmVjYXVzZSBpdCBpcyBpdHMgb25seSBvZmZzZXQgcGFyZW50XG4gIGlmIChnZXRDb21wdXRlZFN0eWxlcyhlbGVtKS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyApIHtcbiAgICAvLyBXZSBhc3N1bWUgdGhhdCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaXMgYXZhaWxhYmxlIHdoZW4gY29tcHV0ZWQgcG9zaXRpb24gaXMgZml4ZWRcbiAgICBvZmZzZXQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIH0gZWxzZSB7XG4gICAgaWYgKCFvZmZzZXRQYXJlbnQpIHtcbiAgICAgIC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50XG4gICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQoZWxlbSk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGNvcnJlY3Qgb2Zmc2V0c1xuICAgIG9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgICBpZiAoIG9mZnNldFBhcmVudC5ub2RlTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICBwYXJlbnRPZmZzZXQgPSBnZXRPZmZzZXQob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgb2Zmc2V0UGFyZW50IGJvcmRlcnNcbiAgICBwYXJlbnRPZmZzZXQudG9wICs9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGVzKG9mZnNldFBhcmVudCkuYm9yZGVyVG9wV2lkdGgsIDEwKTtcbiAgICBwYXJlbnRPZmZzZXQubGVmdCArPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlcyhvZmZzZXRQYXJlbnQpLmJvcmRlckxlZnRXaWR0aCwgMTApO1xuICB9XG5cbiAgLy8gU3VidHJhY3QgcGFyZW50IG9mZnNldHMgYW5kIGVsZW1lbnQgbWFyZ2luc1xuICByZXR1cm4ge1xuICAgIHRvcDogb2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlcyhlbGVtKS5tYXJnaW5Ub3AsIDEwKSxcbiAgICBsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0IC0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbSkubWFyZ2luTGVmdCwgMTApXG4gIH07XG59XG5cbi8qKlxuICogR2V0IHBhcmVudCBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudD99IGVsZW1cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gb2Zmc2V0UGFyZW50KGVsZW0pIHtcbiAgdmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtLm9mZnNldFBhcmVudCB8fCBkb2NFbGVtO1xuXG4gIHdoaWxlICggb2Zmc2V0UGFyZW50ICYmICggb2Zmc2V0UGFyZW50Lm5vZGVOYW1lICE9PSAnSFRNTCcgJiZcbiAgICBnZXRDb21wdXRlZFN0eWxlcyhvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJyApICkge1xuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY0VsZW07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb21wdXRlZFN0eWxlczogZ2V0Q29tcHV0ZWRTdHlsZXMsXG4gIGdldE9mZnNldDogZ2V0T2Zmc2V0LFxuICBnZXRQb3NpdGlvbjogZ2V0UG9zaXRpb24sXG4gIG9mZnNldFBhcmVudDogb2Zmc2V0UGFyZW50XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC91dGlscy9kb21VdGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIG1vZGlmaWVkIHZlcnNpb25zIG9mOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9zcmMvdXRpbHMvY2xvbmVXaXRoUHJvcHMuanNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvc3JjL2NvcmUvUmVhY3RQcm9wVHJhbnNmZXJlci5qc1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL0xJQ0VOU0VcbiAqIEFuIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvUEFURU5UU1xuICpcbiAqIFRPRE86IFRoaXMgc2hvdWxkIGJlIHJlcGxhY2VkIGFzIHNvb24gYXMgY2xvbmVXaXRoUHJvcHMgaXMgYXZhaWxhYmxlIHZpYVxuICogIHRoZSBjb3JlIFJlYWN0IHBhY2thZ2Ugb3IgYSBzZXBhcmF0ZSBwYWNrYWdlLlxuICogIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA2XG4gKi9cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBqb2luQ2xhc3NlcyA9IHJlcXVpcmUoJy4vam9pbkNsYXNzZXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKFwiLi9PYmplY3QuYXNzaWduXCIpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0cmFuc2ZlciBzdHJhdGVneSB0aGF0IHdpbGwgbWVyZ2UgcHJvcCB2YWx1ZXMgdXNpbmcgdGhlIHN1cHBsaWVkXG4gKiBgbWVyZ2VTdHJhdGVneWAuIElmIGEgcHJvcCB3YXMgcHJldmlvdXNseSB1bnNldCwgdGhpcyBqdXN0IHNldHMgaXQuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gbWVyZ2VTdHJhdGVneVxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zZmVyU3RyYXRlZ3kobWVyZ2VTdHJhdGVneSkge1xuICByZXR1cm4gZnVuY3Rpb24ocHJvcHMsIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHByb3BzW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHNba2V5XSA9IG1lcmdlU3RyYXRlZ3kocHJvcHNba2V5XSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHRyYW5zZmVyU3RyYXRlZ3lNZXJnZSA9IGNyZWF0ZVRyYW5zZmVyU3RyYXRlZ3koZnVuY3Rpb24oYSwgYikge1xuICAvLyBgbWVyZ2VgIG92ZXJyaWRlcyB0aGUgZmlyc3Qgb2JqZWN0J3MgKGBwcm9wc1trZXldYCBhYm92ZSkga2V5cyB1c2luZyB0aGVcbiAgLy8gc2Vjb25kIG9iamVjdCdzIChgdmFsdWVgKSBrZXlzLiBBbiBvYmplY3QncyBzdHlsZSdzIGV4aXN0aW5nIGBwcm9wQWAgd291bGRcbiAgLy8gZ2V0IG92ZXJyaWRkZW4uIEZsaXAgdGhlIG9yZGVyIGhlcmUuXG4gIHJldHVybiBhc3NpZ24oe30sIGIsIGEpO1xufSk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuXG4vKipcbiAqIFRyYW5zZmVyIHN0cmF0ZWdpZXMgZGljdGF0ZSBob3cgcHJvcHMgYXJlIHRyYW5zZmVycmVkIGJ5IGB0cmFuc2ZlclByb3BzVG9gLlxuICogTk9URTogaWYgeW91IGFkZCBhbnkgbW9yZSBleGNlcHRpb25zIHRvIHRoaXMgbGlzdCB5b3Ugc2hvdWxkIGJlIHN1cmUgdG9cbiAqIHVwZGF0ZSBgY2xvbmVXaXRoUHJvcHMoKWAgYWNjb3JkaW5nbHkuXG4gKi9cbnZhciBUcmFuc2ZlclN0cmF0ZWdpZXMgPSB7XG4gIC8qKlxuICAgKiBOZXZlciB0cmFuc2ZlciBgY2hpbGRyZW5gLlxuICAgKi9cbiAgY2hpbGRyZW46IGVtcHR5RnVuY3Rpb24sXG4gIC8qKlxuICAgKiBUcmFuc2ZlciB0aGUgYGNsYXNzTmFtZWAgcHJvcCBieSBtZXJnaW5nIHRoZW0uXG4gICAqL1xuICBjbGFzc05hbWU6IGNyZWF0ZVRyYW5zZmVyU3RyYXRlZ3koam9pbkNsYXNzZXMpLFxuICAvKipcbiAgICogVHJhbnNmZXIgdGhlIGBzdHlsZWAgcHJvcCAod2hpY2ggaXMgYW4gb2JqZWN0KSBieSBtZXJnaW5nIHRoZW0uXG4gICAqL1xuICBzdHlsZTogdHJhbnNmZXJTdHJhdGVneU1lcmdlXG59O1xuXG4vKipcbiAqIE11dGF0ZXMgdGhlIGZpcnN0IGFyZ3VtZW50IGJ5IHRyYW5zZmVycmluZyB0aGUgcHJvcGVydGllcyBmcm9tIHRoZSBzZWNvbmRcbiAqIGFyZ3VtZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IG5ld1Byb3BzXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZmVySW50byhwcm9wcywgbmV3UHJvcHMpIHtcbiAgZm9yICh2YXIgdGhpc0tleSBpbiBuZXdQcm9wcykge1xuICAgIGlmICghbmV3UHJvcHMuaGFzT3duUHJvcGVydHkodGhpc0tleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2ZlclN0cmF0ZWd5ID0gVHJhbnNmZXJTdHJhdGVnaWVzW3RoaXNLZXldO1xuXG4gICAgaWYgKHRyYW5zZmVyU3RyYXRlZ3kgJiYgVHJhbnNmZXJTdHJhdGVnaWVzLmhhc093blByb3BlcnR5KHRoaXNLZXkpKSB7XG4gICAgICB0cmFuc2ZlclN0cmF0ZWd5KHByb3BzLCB0aGlzS2V5LCBuZXdQcm9wc1t0aGlzS2V5XSk7XG4gICAgfSBlbHNlIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkodGhpc0tleSkpIHtcbiAgICAgIHByb3BzW3RoaXNLZXldID0gbmV3UHJvcHNbdGhpc0tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBwcm9wcztcbn1cblxuLyoqXG4gKiBNZXJnZSB0d28gcHJvcHMgb2JqZWN0cyB1c2luZyBUcmFuc2ZlclN0cmF0ZWdpZXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9sZFByb3BzIG9yaWdpbmFsIHByb3BzICh0aGV5IHRha2UgcHJlY2VkZW5jZSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXdQcm9wcyBuZXcgcHJvcHMgdG8gbWVyZ2UgaW5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBuZXcgb2JqZWN0IGNvbnRhaW5pbmcgYm90aCBzZXRzIG9mIHByb3BzIG1lcmdlZC5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VQcm9wcyhvbGRQcm9wcywgbmV3UHJvcHMpIHtcbiAgcmV0dXJuIHRyYW5zZmVySW50byhhc3NpZ24oe30sIG9sZFByb3BzKSwgbmV3UHJvcHMpO1xufVxuXG5cbnZhciBSZWFjdFByb3BUcmFuc2ZlcmVyID0ge1xuICBtZXJnZVByb3BzOiBtZXJnZVByb3BzXG59O1xuXG52YXIgQ0hJTERSRU5fUFJPUCA9ICdjaGlsZHJlbic7XG5cbi8qKlxuICogU29tZXRpbWVzIHlvdSB3YW50IHRvIGNoYW5nZSB0aGUgcHJvcHMgb2YgYSBjaGlsZCBwYXNzZWQgdG8geW91LiBVc3VhbGx5XG4gKiB0aGlzIGlzIHRvIGFkZCBhIENTUyBjbGFzcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY2hpbGQgY2hpbGQgY29tcG9uZW50IHlvdSdkIGxpa2UgdG8gY2xvbmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBwcm9wcyB5b3UnZCBsaWtlIHRvIG1vZGlmeS4gVGhleSB3aWxsIGJlIG1lcmdlZFxuICogYXMgaWYgeW91IHVzZWQgYHRyYW5zZmVyUHJvcHNUbygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBjbG9uZSBvZiBjaGlsZCB3aXRoIHByb3BzIG1lcmdlZCBpbi5cbiAqL1xuZnVuY3Rpb24gY2xvbmVXaXRoUHJvcHMoY2hpbGQsIHByb3BzKSB7XG4gIHZhciBuZXdQcm9wcyA9IFJlYWN0UHJvcFRyYW5zZmVyZXIubWVyZ2VQcm9wcyhwcm9wcywgY2hpbGQucHJvcHMpO1xuXG4gIC8vIFVzZSBgY2hpbGQucHJvcHMuY2hpbGRyZW5gIGlmIGl0IGlzIHByb3ZpZGVkLlxuICBpZiAoIW5ld1Byb3BzLmhhc093blByb3BlcnR5KENISUxEUkVOX1BST1ApICYmXG4gICAgY2hpbGQucHJvcHMuaGFzT3duUHJvcGVydHkoQ0hJTERSRU5fUFJPUCkpIHtcbiAgICBuZXdQcm9wcy5jaGlsZHJlbiA9IGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuICB9XG5cbiAgaWYgKFJlYWN0LnZlcnNpb24uc3Vic3RyKDAsIDQpID09PSAnMC4xMicpe1xuICAgIHZhciBtb2NrTGVnYWN5RmFjdG9yeSA9IGZ1bmN0aW9uKCl7fTtcbiAgICBtb2NrTGVnYWN5RmFjdG9yeS5pc1JlYWN0TGVnYWN5RmFjdG9yeSA9IHRydWU7XG4gICAgbW9ja0xlZ2FjeUZhY3RvcnkudHlwZSA9IGNoaWxkLnR5cGU7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChtb2NrTGVnYWN5RmFjdG9yeSwgbmV3UHJvcHMpO1xuICB9XG5cbiAgLy8gVGhlIGN1cnJlbnQgQVBJIGRvZXNuJ3QgcmV0YWluIF9vd25lciBhbmQgX2NvbnRleHQsIHdoaWNoIGlzIHdoeSB0aGlzXG4gIC8vIGRvZXNuJ3QgdXNlIFJlYWN0RWxlbWVudC5jbG9uZUFuZFJlcGxhY2VQcm9wcy5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY2hpbGQudHlwZSwgbmV3UHJvcHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lV2l0aFByb3BzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC91dGlscy9jbG9uZVdpdGhQcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogU2FmZSBjaGFpbmVkIGZ1bmN0aW9uXG4gKlxuICogV2lsbCBvbmx5IGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBpZiBuZWVkZWQsXG4gKiBvdGhlcndpc2Ugd2lsbCBwYXNzIGJhY2sgZXhpc3RpbmcgZnVuY3Rpb25zIG9yIG51bGwuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25lXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0d29cbiAqIEByZXR1cm5zIHtmdW5jdGlvbnxudWxsfVxuICovXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24ob25lLCB0d28pIHtcbiAgdmFyIGhhc09uZSA9IHR5cGVvZiBvbmUgPT09ICdmdW5jdGlvbic7XG4gIHZhciBoYXNUd28gPSB0eXBlb2YgdHdvID09PSAnZnVuY3Rpb24nO1xuXG4gIGlmICghaGFzT25lICYmICFoYXNUd28pIHsgcmV0dXJuIG51bGw7IH1cbiAgaWYgKCFoYXNPbmUpIHsgcmV0dXJuIHR3bzsgfVxuICBpZiAoIWhhc1R3bykgeyByZXR1cm4gb25lOyB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICBvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0d28uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYW4gdW5tb2RpZmllZCB2ZXJzaW9uIG9mOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9zcmMvdmVuZG9yL3N0dWJzL09iamVjdC5hc3NpZ24uanNcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9MSUNFTlNFXG4gKiBBbiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL1BBVEVOVFNcbiAqL1xuXG4vLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LmFzc2lnblxuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2VzKSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gdGFyZ2V0IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZm9yICh2YXIgbmV4dEluZGV4ID0gMTsgbmV4dEluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgbmV4dEluZGV4KyspIHtcbiAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgIGlmIChuZXh0U291cmNlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgLy8gV2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQgYWNjZXNzb3JzIG5vciBwcm94aWVzLiBUaGVyZWZvcmUgdGhpc1xuICAgIC8vIGNvcHkgY2Fubm90IHRocm93LiBJZiB3ZSBldmVyIHN1cHBvcnRlZCB0aGlzIHRoZW4gd2UgbXVzdCBoYW5kbGVcbiAgICAvLyBleGNlcHRpb25zIGFuZCBzaWRlLWVmZmVjdHMuIFdlIGRvbid0IHN1cHBvcnQgc3ltYm9scyBzbyB0aGV5IHdvbid0XG4gICAgLy8gYmUgdHJhbnNmZXJyZWQuXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL09iamVjdC5hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxudmFyIEN1c3RvbVByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIGEgcHJvcCBwcm92aWRlcyBhIERPTSBlbGVtZW50XG4gICAqXG4gICAqIFRoZSBlbGVtZW50IGNhbiBiZSBwcm92aWRlZCBpbiB0d28gZm9ybXM6XG4gICAqIC0gRGlyZWN0bHkgcGFzc2VkXG4gICAqIC0gT3IgcGFzc2VkIGFuIG9iamVjdCB3aGljaCBoYXMgYSBgZ2V0RE9NTm9kZWAgbWV0aG9kIHdoaWNoIHdpbGwgcmV0dXJuIHRoZSByZXF1aXJlZCBET00gZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcnx1bmRlZmluZWR9XG4gICAqL1xuICBtb3VudGFibGU6IGNyZWF0ZU1vdW50YWJsZUNoZWNrZXIoKVxufTtcblxuLyoqXG4gKiBDcmVhdGUgY2hhaW4tYWJsZSBpc1JlcXVpcmVkIHZhbGlkYXRvclxuICpcbiAqIExhcmdlbHkgY29waWVkIGRpcmVjdGx5IGZyb206XG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMC4xMS1zdGFibGUvc3JjL2NvcmUvUmVhY3RQcm9wVHlwZXMuanMjTDk0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgICdSZXF1aXJlZCBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCB3YXMgbm90IHNwZWNpZmllZCBpbiAnICtcbiAgICAgICAgICAgICdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW91bnRhYmxlQ2hlY2tlcigpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wc1twcm9wTmFtZV0gIT09ICdvYmplY3QnIHx8XG4gICAgICB0eXBlb2YgcHJvcHNbcHJvcE5hbWVdLmdldERPTU5vZGUgIT09ICdmdW5jdGlvbicgJiYgcHJvcHNbcHJvcE5hbWVdLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAnSW52YWxpZCBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICtcbiAgICAgICAgICAnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgRE9NIGVsZW1lbnQgb3IgYW4gb2JqZWN0IHRoYXQgaGFzIGEgYGdldERPTU5vZGVgIG1ldGhvZCdcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21Qcm9wVHlwZXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL0N1c3RvbVByb3BUeXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJvdmVybGF5LXRyaWdnZXIvb3ZlcmxheS10cmlnZ2VyLmpzIn0=