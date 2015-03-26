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
/*!*******************************************!*\
  !*** ./src/components/overlay-trigger.js ***!
  \*******************************************/
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
	var OverlayMixin = __webpack_require__(/*! ./OverlayMixin */ 4);
	var domUtils = __webpack_require__(/*! ./utils/domUtils */ 5);
	var cloneWithProps = __webpack_require__(/*! ./utils/cloneWithProps */ 6);
	
	var createChainedFunction = __webpack_require__(/*! ./utils/createChainedFunction */ 7);
	var assign = __webpack_require__(/*! ./utils/Object.assign */ 8);
	
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
/* 5 */
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
/* 6 */
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
	var joinClasses = __webpack_require__(/*! ./joinClasses */ 9);
	var assign = __webpack_require__(/*! ./Object.assign */ 8);
	
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
/* 7 */
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
/* 8 */
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
/* 10 */,
/* 11 */,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZTg5OTQzOTRkYTgxMDEyODRhOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdmVybGF5LXRyaWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvT3ZlcmxheVRyaWdnZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9PdmVybGF5TWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvdXRpbHMvZG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvdXRpbHMvY2xvbmVXaXRoUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL09iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvdXRpbHMvam9pbkNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvdXRpbHMvQ3VzdG9tUHJvcFR5cGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7Ozs7Ozs7O0FDdENBLEtBQUksdUJBQXVCLEdBQUcsbUJBQU8sQ0FBQyx1Q0FBZ0MsQ0FBQyxDQUFDO0FBQ3hFLEtBQUksY0FBYyxHQUFHLHVCQUF1QixDQUFDO0FBQzdDLE9BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBQyxjQUFjLEVBQWQsY0FBYyxFQUFDLEM7Ozs7Ozs7OztBQ0ZqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLGFBQWE7QUFDeEIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLEVBQUM7O0FBRUQsaUM7Ozs7Ozs7Ozs7QUNsT0EsZ0Q7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxZQUFZO0FBQ3ZCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxZQUFZO0FBQ3ZCLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsWUFBWTtBQUN2QixZQUFXLGFBQWE7QUFDeEIsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBc0I7O0FBRXRCLDZEQUE0RCxlQUFlO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxhQUFhO0FBQ3hCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEIsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixhQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBLGdDQUErQjtBQUMvQjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQjtBQUNBLGFBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCLFlBQVcsU0FBUztBQUNwQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCLGFBQWE7QUFDeEMsaUJBQWdCLFlBQVk7QUFDNUIsaUJBQWdCLFlBQVk7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBeUIsOEJBQThCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsV0FBVztBQUN0QixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDdkNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0MiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwaXZvdGFsLXVpLXJlYWN0Lm92ZXJsYXktdHJpZ2dlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwaXZvdGFsLXVpLXJlYWN0Lm92ZXJsYXktdHJpZ2dlclwiXSA9IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZmU4OTk0Mzk0ZGE4MTAxMjg0YTlcbiAqKi8iLCJ2YXIgQm9vdHN0cmFwT3ZlcmxheVRyaWdnZXIgPSByZXF1aXJlKCdyZWFjdC1ib290c3RyYXAvT3ZlcmxheVRyaWdnZXInKTtcbnZhciBPdmVybGF5VHJpZ2dlciA9IEJvb3RzdHJhcE92ZXJsYXlUcmlnZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSB7T3ZlcmxheVRyaWdnZXJ9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvb3ZlcmxheS10cmlnZ2VyLmpzXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBPdmVybGF5TWl4aW4gPSByZXF1aXJlKCcuL092ZXJsYXlNaXhpbicpO1xudmFyIGRvbVV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9kb21VdGlscycpO1xudmFyIGNsb25lV2l0aFByb3BzID0gcmVxdWlyZSgnLi91dGlscy9jbG9uZVdpdGhQcm9wcycpO1xuXG52YXIgY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL3V0aWxzL09iamVjdC5hc3NpZ24nKTtcblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBvbmUgaXMgaW5zaWRlIG9yIGVxdWFsIHRvIHRoZSBvZiB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBvbmVcbiAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBvZlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzT25lT2Yob25lLCBvZikge1xuICBpZiAoQXJyYXkuaXNBcnJheShvZikpIHtcbiAgICByZXR1cm4gb2YuaW5kZXhPZihvbmUpID49IDA7XG4gIH1cbiAgcmV0dXJuIG9uZSA9PT0gb2Y7XG59XG5cbnZhciBPdmVybGF5VHJpZ2dlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJPdmVybGF5VHJpZ2dlclwiLFxuICBtaXhpbnM6IFtPdmVybGF5TWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHRyaWdnZXI6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnbWFudWFsJywgJ2NsaWNrJywgJ2hvdmVyJywgJ2ZvY3VzJ10pLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnY2xpY2snLCAnaG92ZXInLCAnZm9jdXMnXSkpXG4gICAgXSksXG4gICAgcGxhY2VtZW50OiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWyd0b3AnLCdyaWdodCcsICdib3R0b20nLCAnbGVmdCddKSxcbiAgICBkZWxheTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBkZWxheVNob3c6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgZGVsYXlIaWRlOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGRlZmF1bHRPdmVybGF5U2hvd246IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG92ZXJsYXk6IFJlYWN0LlByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgdHJpZ2dlcjogWydob3ZlcicsICdmb2N1cyddXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNPdmVybGF5U2hvd246IHRoaXMucHJvcHMuZGVmYXVsdE92ZXJsYXlTaG93biA9PSBudWxsID9cbiAgICAgICAgZmFsc2UgOiB0aGlzLnByb3BzLmRlZmF1bHRPdmVybGF5U2hvd24sXG4gICAgICBvdmVybGF5TGVmdDogbnVsbCxcbiAgICAgIG92ZXJsYXlUb3A6IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiB0cnVlXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlQb3NpdGlvbigpO1xuICAgIH0pO1xuICB9LFxuXG4gIGhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3ZlcmxheVNob3duOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuXG4gIHRvZ2dsZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3RhdGUuaXNPdmVybGF5U2hvd24gP1xuICAgICAgdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKTtcbiAgfSxcblxuICByZW5kZXJPdmVybGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzT3ZlcmxheVNob3duKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lV2l0aFByb3BzKFxuICAgICAgdGhpcy5wcm9wcy5vdmVybGF5LFxuICAgICAge1xuICAgICAgICBvblJlcXVlc3RIaWRlOiB0aGlzLmhpZGUsXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgIHBvc2l0aW9uTGVmdDogdGhpcy5zdGF0ZS5vdmVybGF5TGVmdCxcbiAgICAgICAgcG9zaXRpb25Ub3A6IHRoaXMuc3RhdGUub3ZlcmxheVRvcFxuICAgICAgfVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJpZ2dlciA9PT0gJ21hbnVhbCcpIHtcbiAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHZhciBwcm9wcyA9IHt9O1xuXG4gICAgaWYgKGlzT25lT2YoJ2NsaWNrJywgdGhpcy5wcm9wcy50cmlnZ2VyKSkge1xuICAgICAgcHJvcHMub25DbGljayA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbih0aGlzLnRvZ2dsZSwgdGhpcy5wcm9wcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICBpZiAoaXNPbmVPZignaG92ZXInLCB0aGlzLnByb3BzLnRyaWdnZXIpKSB7XG4gICAgICBwcm9wcy5vbk1vdXNlT3ZlciA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbih0aGlzLmhhbmRsZURlbGF5ZWRTaG93LCB0aGlzLnByb3BzLm9uTW91c2VPdmVyKTtcbiAgICAgIHByb3BzLm9uTW91c2VPdXQgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24odGhpcy5oYW5kbGVEZWxheWVkSGlkZSwgdGhpcy5wcm9wcy5vbk1vdXNlT3V0KTtcbiAgICB9XG5cbiAgICBpZiAoaXNPbmVPZignZm9jdXMnLCB0aGlzLnByb3BzLnRyaWdnZXIpKSB7XG4gICAgICBwcm9wcy5vbkZvY3VzID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKHRoaXMuaGFuZGxlRGVsYXllZFNob3csIHRoaXMucHJvcHMub25Gb2N1cyk7XG4gICAgICBwcm9wcy5vbkJsdXIgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24odGhpcy5oYW5kbGVEZWxheWVkSGlkZSwgdGhpcy5wcm9wcy5vbkJsdXIpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZVdpdGhQcm9wcyhcbiAgICAgIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksXG4gICAgICBwcm9wc1xuICAgICk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9ob3ZlckRlbGF5KTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy51cGRhdGVPdmVybGF5UG9zaXRpb24oKTtcbiAgfSxcblxuICBoYW5kbGVEZWxheWVkU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9ob3ZlckRlbGF5ICE9IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9ob3ZlckRlbGF5KTtcbiAgICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZWxheSA9IHRoaXMucHJvcHMuZGVsYXlTaG93ICE9IG51bGwgP1xuICAgICAgdGhpcy5wcm9wcy5kZWxheVNob3cgOiB0aGlzLnByb3BzLmRlbGF5O1xuXG4gICAgaWYgKCFkZWxheSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJEZWxheSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9ob3ZlckRlbGF5ID0gbnVsbDtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0uYmluZCh0aGlzKSwgZGVsYXkpO1xuICB9LFxuXG4gIGhhbmRsZURlbGF5ZWRIaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2hvdmVyRGVsYXkgIT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hvdmVyRGVsYXkpO1xuICAgICAgdGhpcy5faG92ZXJEZWxheSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRlbGF5ID0gdGhpcy5wcm9wcy5kZWxheUhpZGUgIT0gbnVsbCA/XG4gICAgICB0aGlzLnByb3BzLmRlbGF5SGlkZSA6IHRoaXMucHJvcHMuZGVsYXk7XG5cbiAgICBpZiAoIWRlbGF5KSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ob3ZlckRlbGF5ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2hvdmVyRGVsYXkgPSBudWxsO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfS5iaW5kKHRoaXMpLCBkZWxheSk7XG4gIH0sXG5cbiAgdXBkYXRlT3ZlcmxheVBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvcyA9IHRoaXMuY2FsY092ZXJsYXlQb3NpdGlvbigpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvdmVybGF5TGVmdDogcG9zLmxlZnQsXG4gICAgICBvdmVybGF5VG9wOiBwb3MudG9wXG4gICAgfSk7XG4gIH0sXG5cbiAgY2FsY092ZXJsYXlQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaGlsZE9mZnNldCA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcblxuICAgIHZhciBvdmVybGF5Tm9kZSA9IHRoaXMuZ2V0T3ZlcmxheURPTU5vZGUoKTtcbiAgICB2YXIgb3ZlcmxheUhlaWdodCA9IG92ZXJsYXlOb2RlLm9mZnNldEhlaWdodDtcbiAgICB2YXIgb3ZlcmxheVdpZHRoID0gb3ZlcmxheU5vZGUub2Zmc2V0V2lkdGg7XG5cbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMucGxhY2VtZW50KSB7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiBjaGlsZE9mZnNldC50b3AgKyBjaGlsZE9mZnNldC5oZWlnaHQgLyAyIC0gb3ZlcmxheUhlaWdodCAvIDIsXG4gICAgICAgICAgbGVmdDogY2hpbGRPZmZzZXQubGVmdCArIGNoaWxkT2Zmc2V0LndpZHRoXG4gICAgICAgIH07XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IGNoaWxkT2Zmc2V0LnRvcCArIGNoaWxkT2Zmc2V0LmhlaWdodCAvIDIgLSBvdmVybGF5SGVpZ2h0IC8gMixcbiAgICAgICAgICBsZWZ0OiBjaGlsZE9mZnNldC5sZWZ0IC0gb3ZlcmxheVdpZHRoXG4gICAgICAgIH07XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvcDogY2hpbGRPZmZzZXQudG9wIC0gb3ZlcmxheUhlaWdodCxcbiAgICAgICAgICBsZWZ0OiBjaGlsZE9mZnNldC5sZWZ0ICsgY2hpbGRPZmZzZXQud2lkdGggLyAyIC0gb3ZlcmxheVdpZHRoIC8gMlxuICAgICAgICB9O1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IGNoaWxkT2Zmc2V0LnRvcCArIGNoaWxkT2Zmc2V0LmhlaWdodCxcbiAgICAgICAgICBsZWZ0OiBjaGlsZE9mZnNldC5sZWZ0ICsgY2hpbGRPZmZzZXQud2lkdGggLyAyIC0gb3ZlcmxheVdpZHRoIC8gMlxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxjT3ZlcmxheVBvc2l0aW9uKCk6IE5vIHN1Y2ggcGxhY2VtZW50IG9mIFwiJyArIHRoaXMucHJvcHMucGxhY2VtZW50ICsgJ1wiIGZvdW5kLicpO1xuICAgIH1cbiAgfSxcblxuICBnZXRQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBub2RlID0gdGhpcy5nZXRET01Ob2RlKCk7XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q29udGFpbmVyRE9NTm9kZSgpO1xuXG4gICAgdmFyIG9mZnNldCA9IGNvbnRhaW5lci50YWdOYW1lID09ICdCT0RZJyA/XG4gICAgICBkb21VdGlscy5nZXRPZmZzZXQobm9kZSkgOiBkb21VdGlscy5nZXRQb3NpdGlvbihub2RlLCBjb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGFzc2lnbih7fSwgb2Zmc2V0LCB7XG4gICAgICBoZWlnaHQ6IG5vZGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgd2lkdGg6IG5vZGUub2Zmc2V0V2lkdGhcbiAgICB9KTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gT3ZlcmxheVRyaWdnZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL092ZXJsYXlUcmlnZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDdXN0b21Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL0N1c3RvbVByb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgY29udGFpbmVyOiBDdXN0b21Qcm9wVHlwZXMubW91bnRhYmxlXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAvLyBQcm92aWRlIGBnZXRET01Ob2RlYCBmbiBtb2NraW5nIGEgUmVhY3QgY29tcG9uZW50IEFQSS4gVGhlIGBkb2N1bWVudC5ib2R5YFxuICAgICAgICAvLyByZWZlcmVuY2UgbmVlZHMgdG8gYmUgY29udGFpbmVkIHdpdGhpbiB0aGlzIGZ1bmN0aW9uIHNvIHRoYXQgaXQgaXMgbm90IGFjY2Vzc2VkXG4gICAgICAgIC8vIGluIGVudmlyb25tZW50cyB3aGVyZSBpdCB3b3VsZCBub3QgYmUgZGVmaW5lZCwgZS5nLiBub2RlanMuIEVxdWFsbHkgdGhpcyBpcyBuZWVkZWRcbiAgICAgICAgLy8gYmVmb3JlIHRoZSBib2R5IGlzIGRlZmluZWQgd2hlcmUgYGRvY3VtZW50LmJvZHkgPT09IG51bGxgLCB0aGlzIGVuc3VyZXNcbiAgICAgICAgLy8gYGRvY3VtZW50LmJvZHlgIGlzIG9ubHkgYWNjZXNzZWQgYWZ0ZXIgY29tcG9uZW50RGlkTW91bnQuXG4gICAgICAgIGdldERPTU5vZGU6IGZ1bmN0aW9uIGdldERPTU5vZGUoKSB7XG4gICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fdW5yZW5kZXJPdmVybGF5KCk7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlUYXJnZXQpIHtcbiAgICAgIHRoaXMuZ2V0Q29udGFpbmVyRE9NTm9kZSgpXG4gICAgICAgIC5yZW1vdmVDaGlsZCh0aGlzLl9vdmVybGF5VGFyZ2V0KTtcbiAgICAgIHRoaXMuX292ZXJsYXlUYXJnZXQgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9yZW5kZXJPdmVybGF5KCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9yZW5kZXJPdmVybGF5KCk7XG4gIH0sXG5cbiAgX21vdW50T3ZlcmxheVRhcmdldDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX292ZXJsYXlUYXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmdldENvbnRhaW5lckRPTU5vZGUoKVxuICAgICAgLmFwcGVuZENoaWxkKHRoaXMuX292ZXJsYXlUYXJnZXQpO1xuICB9LFxuXG4gIF9yZW5kZXJPdmVybGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9vdmVybGF5VGFyZ2V0KSB7XG4gICAgICB0aGlzLl9tb3VudE92ZXJsYXlUYXJnZXQoKTtcbiAgICB9XG5cbiAgICB2YXIgb3ZlcmxheSA9IHRoaXMucmVuZGVyT3ZlcmxheSgpO1xuXG4gICAgLy8gU2F2ZSByZWZlcmVuY2UgdG8gaGVscCB0ZXN0aW5nXG4gICAgaWYgKG92ZXJsYXkgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlJbnN0YW5jZSA9IFJlYWN0LnJlbmRlcihvdmVybGF5LCB0aGlzLl9vdmVybGF5VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVW5yZW5kZXIgaWYgdGhlIGNvbXBvbmVudCBpcyBudWxsIGZvciB0cmFuc2l0aW9ucyB0byBudWxsXG4gICAgICB0aGlzLl91bnJlbmRlck92ZXJsYXkoKTtcbiAgICB9XG4gIH0sXG5cbiAgX3VucmVuZGVyT3ZlcmxheTogZnVuY3Rpb24gKCkge1xuICAgIFJlYWN0LnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fb3ZlcmxheVRhcmdldCk7XG4gICAgdGhpcy5fb3ZlcmxheUluc3RhbmNlID0gbnVsbDtcbiAgfSxcblxuICBnZXRPdmVybGF5RE9NTm9kZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRPdmVybGF5RE9NTm9kZSgpOiBBIGNvbXBvbmVudCBtdXN0IGJlIG1vdW50ZWQgdG8gaGF2ZSBhIERPTSBub2RlLicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vdmVybGF5SW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vdmVybGF5SW5zdGFuY2UuZ2V0RE9NTm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIGdldENvbnRhaW5lckRPTU5vZGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jb250YWluZXIuZ2V0RE9NTm9kZSA/XG4gICAgICB0aGlzLnByb3BzLmNvbnRhaW5lci5nZXRET01Ob2RlKCkgOiB0aGlzLnByb3BzLmNvbnRhaW5lcjtcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC9PdmVybGF5TWl4aW4uanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogU2hvcnRjdXQgdG8gY29tcHV0ZSBlbGVtZW50IHN0eWxlXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICogQHJldHVybnMge0Nzc1N0eWxlfVxuICovXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlcyhlbGVtKSB7XG4gIHJldHVybiBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKTtcbn1cblxuLyoqXG4gKiBHZXQgZWxlbWVudHMgb2Zmc2V0XG4gKlxuICogVE9ETzogUkVNT1ZFIEpRVUVSWSFcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBET01Ob2RlXG4gKiBAcmV0dXJucyB7e3RvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXRPZmZzZXQoRE9NTm9kZSkge1xuICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgIHJldHVybiB3aW5kb3cualF1ZXJ5KERPTU5vZGUpLm9mZnNldCgpO1xuICB9XG5cbiAgdmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBib3ggPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG4gIC8vIElmIHdlIGRvbid0IGhhdmUgZ0JDUiwganVzdCB1c2UgMCwwIHJhdGhlciB0aGFuIGVycm9yXG4gIC8vIEJsYWNrQmVycnkgNSwgaU9TIDMgKG9yaWdpbmFsIGlQaG9uZSlcbiAgaWYgKCB0eXBlb2YgRE9NTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICd1bmRlZmluZWQnICkge1xuICAgIGJveCA9IERPTU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogYm94LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XG4gIH07XG59XG5cbi8qKlxuICogR2V0IGVsZW1lbnRzIHBvc2l0aW9uXG4gKlxuICogVE9ETzogUkVNT1ZFIEpRVUVSWSFcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50P30gb2Zmc2V0UGFyZW50XG4gKiBAcmV0dXJucyB7e3RvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXRQb3NpdGlvbihlbGVtLCBvZmZzZXRQYXJlbnQpIHtcbiAgaWYgKHdpbmRvdy5qUXVlcnkpIHtcbiAgICByZXR1cm4gd2luZG93LmpRdWVyeShlbGVtKS5wb3NpdGlvbigpO1xuICB9XG5cbiAgdmFyIG9mZnNldCxcbiAgICAgIHBhcmVudE9mZnNldCA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xuXG4gIC8vIEZpeGVkIGVsZW1lbnRzIGFyZSBvZmZzZXQgZnJvbSB3aW5kb3cgKHBhcmVudE9mZnNldCA9IHt0b3A6MCwgbGVmdDogMH0sIGJlY2F1c2UgaXQgaXMgaXRzIG9ubHkgb2Zmc2V0IHBhcmVudFxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbSkucG9zaXRpb24gPT09ICdmaXhlZCcgKSB7XG4gICAgLy8gV2UgYXNzdW1lIHRoYXQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlzIGF2YWlsYWJsZSB3aGVuIGNvbXB1dGVkIHBvc2l0aW9uIGlzIGZpeGVkXG4gICAgb2Zmc2V0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICB9IGVsc2Uge1xuICAgIGlmICghb2Zmc2V0UGFyZW50KSB7XG4gICAgICAvLyBHZXQgKnJlYWwqIG9mZnNldFBhcmVudFxuICAgICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50KGVsZW0pO1xuICAgIH1cblxuICAgIC8vIEdldCBjb3JyZWN0IG9mZnNldHNcbiAgICBvZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gICAgaWYgKCBvZmZzZXRQYXJlbnQubm9kZU5hbWUgIT09ICdIVE1MJykge1xuICAgICAgcGFyZW50T2Zmc2V0ID0gZ2V0T2Zmc2V0KG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIG9mZnNldFBhcmVudCBib3JkZXJzXG4gICAgcGFyZW50T2Zmc2V0LnRvcCArPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlcyhvZmZzZXRQYXJlbnQpLmJvcmRlclRvcFdpZHRoLCAxMCk7XG4gICAgcGFyZW50T2Zmc2V0LmxlZnQgKz0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZXMob2Zmc2V0UGFyZW50KS5ib3JkZXJMZWZ0V2lkdGgsIDEwKTtcbiAgfVxuXG4gIC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcbiAgcmV0dXJuIHtcbiAgICB0b3A6IG9mZnNldC50b3AgLSBwYXJlbnRPZmZzZXQudG9wIC0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZXMoZWxlbSkubWFyZ2luVG9wLCAxMCksXG4gICAgbGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdCAtIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGVzKGVsZW0pLm1hcmdpbkxlZnQsIDEwKVxuICB9O1xufVxuXG4vKipcbiAqIEdldCBwYXJlbnQgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnQ/fSBlbGVtXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIG9mZnNldFBhcmVudChlbGVtKSB7XG4gIHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZWxlbS5vZmZzZXRQYXJlbnQgfHwgZG9jRWxlbTtcblxuICB3aGlsZSAoIG9mZnNldFBhcmVudCAmJiAoIG9mZnNldFBhcmVudC5ub2RlTmFtZSAhPT0gJ0hUTUwnICYmXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZXMob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycgKSApIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBkb2NFbGVtO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29tcHV0ZWRTdHlsZXM6IGdldENvbXB1dGVkU3R5bGVzLFxuICBnZXRPZmZzZXQ6IGdldE9mZnNldCxcbiAgZ2V0UG9zaXRpb246IGdldFBvc2l0aW9uLFxuICBvZmZzZXRQYXJlbnQ6IG9mZnNldFBhcmVudFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvdXRpbHMvZG9tVXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgZmlsZSBjb250YWlucyBtb2RpZmllZCB2ZXJzaW9ucyBvZjpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvc3JjL3V0aWxzL2Nsb25lV2l0aFByb3BzLmpzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL3NyYy9jb3JlL1JlYWN0UHJvcFRyYW5zZmVyZXIuanNcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9MSUNFTlNFXG4gKiBBbiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL1BBVEVOVFNcbiAqXG4gKiBUT0RPOiBUaGlzIHNob3VsZCBiZSByZXBsYWNlZCBhcyBzb29uIGFzIGNsb25lV2l0aFByb3BzIGlzIGF2YWlsYWJsZSB2aWFcbiAqICB0aGUgY29yZSBSZWFjdCBwYWNrYWdlIG9yIGEgc2VwYXJhdGUgcGFja2FnZS5cbiAqICBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwNlxuICovXG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgam9pbkNsYXNzZXMgPSByZXF1aXJlKCcuL2pvaW5DbGFzc2VzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZShcIi4vT2JqZWN0LmFzc2lnblwiKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgdHJhbnNmZXIgc3RyYXRlZ3kgdGhhdCB3aWxsIG1lcmdlIHByb3AgdmFsdWVzIHVzaW5nIHRoZSBzdXBwbGllZFxuICogYG1lcmdlU3RyYXRlZ3lgLiBJZiBhIHByb3Agd2FzIHByZXZpb3VzbHkgdW5zZXQsIHRoaXMganVzdCBzZXRzIGl0LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG1lcmdlU3RyYXRlZ3lcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2ZlclN0cmF0ZWd5KG1lcmdlU3RyYXRlZ3kpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3BzLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBwcm9wc1trZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzW2tleV0gPSBtZXJnZVN0cmF0ZWd5KHByb3BzW2tleV0sIHZhbHVlKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciB0cmFuc2ZlclN0cmF0ZWd5TWVyZ2UgPSBjcmVhdGVUcmFuc2ZlclN0cmF0ZWd5KGZ1bmN0aW9uKGEsIGIpIHtcbiAgLy8gYG1lcmdlYCBvdmVycmlkZXMgdGhlIGZpcnN0IG9iamVjdCdzIChgcHJvcHNba2V5XWAgYWJvdmUpIGtleXMgdXNpbmcgdGhlXG4gIC8vIHNlY29uZCBvYmplY3QncyAoYHZhbHVlYCkga2V5cy4gQW4gb2JqZWN0J3Mgc3R5bGUncyBleGlzdGluZyBgcHJvcEFgIHdvdWxkXG4gIC8vIGdldCBvdmVycmlkZGVuLiBGbGlwIHRoZSBvcmRlciBoZXJlLlxuICByZXR1cm4gYXNzaWduKHt9LCBiLCBhKTtcbn0pO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cblxuLyoqXG4gKiBUcmFuc2ZlciBzdHJhdGVnaWVzIGRpY3RhdGUgaG93IHByb3BzIGFyZSB0cmFuc2ZlcnJlZCBieSBgdHJhbnNmZXJQcm9wc1RvYC5cbiAqIE5PVEU6IGlmIHlvdSBhZGQgYW55IG1vcmUgZXhjZXB0aW9ucyB0byB0aGlzIGxpc3QgeW91IHNob3VsZCBiZSBzdXJlIHRvXG4gKiB1cGRhdGUgYGNsb25lV2l0aFByb3BzKClgIGFjY29yZGluZ2x5LlxuICovXG52YXIgVHJhbnNmZXJTdHJhdGVnaWVzID0ge1xuICAvKipcbiAgICogTmV2ZXIgdHJhbnNmZXIgYGNoaWxkcmVuYC5cbiAgICovXG4gIGNoaWxkcmVuOiBlbXB0eUZ1bmN0aW9uLFxuICAvKipcbiAgICogVHJhbnNmZXIgdGhlIGBjbGFzc05hbWVgIHByb3AgYnkgbWVyZ2luZyB0aGVtLlxuICAgKi9cbiAgY2xhc3NOYW1lOiBjcmVhdGVUcmFuc2ZlclN0cmF0ZWd5KGpvaW5DbGFzc2VzKSxcbiAgLyoqXG4gICAqIFRyYW5zZmVyIHRoZSBgc3R5bGVgIHByb3AgKHdoaWNoIGlzIGFuIG9iamVjdCkgYnkgbWVyZ2luZyB0aGVtLlxuICAgKi9cbiAgc3R5bGU6IHRyYW5zZmVyU3RyYXRlZ3lNZXJnZVxufTtcblxuLyoqXG4gKiBNdXRhdGVzIHRoZSBmaXJzdCBhcmd1bWVudCBieSB0cmFuc2ZlcnJpbmcgdGhlIHByb3BlcnRpZXMgZnJvbSB0aGUgc2Vjb25kXG4gKiBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXdQcm9wc1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiB0cmFuc2ZlckludG8ocHJvcHMsIG5ld1Byb3BzKSB7XG4gIGZvciAodmFyIHRoaXNLZXkgaW4gbmV3UHJvcHMpIHtcbiAgICBpZiAoIW5ld1Byb3BzLmhhc093blByb3BlcnR5KHRoaXNLZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNmZXJTdHJhdGVneSA9IFRyYW5zZmVyU3RyYXRlZ2llc1t0aGlzS2V5XTtcblxuICAgIGlmICh0cmFuc2ZlclN0cmF0ZWd5ICYmIFRyYW5zZmVyU3RyYXRlZ2llcy5oYXNPd25Qcm9wZXJ0eSh0aGlzS2V5KSkge1xuICAgICAgdHJhbnNmZXJTdHJhdGVneShwcm9wcywgdGhpc0tleSwgbmV3UHJvcHNbdGhpc0tleV0pO1xuICAgIH0gZWxzZSBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KHRoaXNLZXkpKSB7XG4gICAgICBwcm9wc1t0aGlzS2V5XSA9IG5ld1Byb3BzW3RoaXNLZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcHJvcHM7XG59XG5cbi8qKlxuICogTWVyZ2UgdHdvIHByb3BzIG9iamVjdHMgdXNpbmcgVHJhbnNmZXJTdHJhdGVnaWVzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvbGRQcm9wcyBvcmlnaW5hbCBwcm9wcyAodGhleSB0YWtlIHByZWNlZGVuY2UpXG4gKiBAcGFyYW0ge29iamVjdH0gbmV3UHJvcHMgbmV3IHByb3BzIHRvIG1lcmdlIGluXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEgbmV3IG9iamVjdCBjb250YWluaW5nIGJvdGggc2V0cyBvZiBwcm9wcyBtZXJnZWQuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlUHJvcHMob2xkUHJvcHMsIG5ld1Byb3BzKSB7XG4gIHJldHVybiB0cmFuc2ZlckludG8oYXNzaWduKHt9LCBvbGRQcm9wcyksIG5ld1Byb3BzKTtcbn1cblxuXG52YXIgUmVhY3RQcm9wVHJhbnNmZXJlciA9IHtcbiAgbWVyZ2VQcm9wczogbWVyZ2VQcm9wc1xufTtcblxudmFyIENISUxEUkVOX1BST1AgPSAnY2hpbGRyZW4nO1xuXG4vKipcbiAqIFNvbWV0aW1lcyB5b3Ugd2FudCB0byBjaGFuZ2UgdGhlIHByb3BzIG9mIGEgY2hpbGQgcGFzc2VkIHRvIHlvdS4gVXN1YWxseVxuICogdGhpcyBpcyB0byBhZGQgYSBDU1MgY2xhc3MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNoaWxkIGNoaWxkIGNvbXBvbmVudCB5b3UnZCBsaWtlIHRvIGNsb25lXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgcHJvcHMgeW91J2QgbGlrZSB0byBtb2RpZnkuIFRoZXkgd2lsbCBiZSBtZXJnZWRcbiAqIGFzIGlmIHlvdSB1c2VkIGB0cmFuc2ZlclByb3BzVG8oKWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEgY2xvbmUgb2YgY2hpbGQgd2l0aCBwcm9wcyBtZXJnZWQgaW4uXG4gKi9cbmZ1bmN0aW9uIGNsb25lV2l0aFByb3BzKGNoaWxkLCBwcm9wcykge1xuICB2YXIgbmV3UHJvcHMgPSBSZWFjdFByb3BUcmFuc2ZlcmVyLm1lcmdlUHJvcHMocHJvcHMsIGNoaWxkLnByb3BzKTtcblxuICAvLyBVc2UgYGNoaWxkLnByb3BzLmNoaWxkcmVuYCBpZiBpdCBpcyBwcm92aWRlZC5cbiAgaWYgKCFuZXdQcm9wcy5oYXNPd25Qcm9wZXJ0eShDSElMRFJFTl9QUk9QKSAmJlxuICAgIGNoaWxkLnByb3BzLmhhc093blByb3BlcnR5KENISUxEUkVOX1BST1ApKSB7XG4gICAgbmV3UHJvcHMuY2hpbGRyZW4gPSBjaGlsZC5wcm9wcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGlmIChSZWFjdC52ZXJzaW9uLnN1YnN0cigwLCA0KSA9PT0gJzAuMTInKXtcbiAgICB2YXIgbW9ja0xlZ2FjeUZhY3RvcnkgPSBmdW5jdGlvbigpe307XG4gICAgbW9ja0xlZ2FjeUZhY3RvcnkuaXNSZWFjdExlZ2FjeUZhY3RvcnkgPSB0cnVlO1xuICAgIG1vY2tMZWdhY3lGYWN0b3J5LnR5cGUgPSBjaGlsZC50eXBlO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobW9ja0xlZ2FjeUZhY3RvcnksIG5ld1Byb3BzKTtcbiAgfVxuXG4gIC8vIFRoZSBjdXJyZW50IEFQSSBkb2Vzbid0IHJldGFpbiBfb3duZXIgYW5kIF9jb250ZXh0LCB3aGljaCBpcyB3aHkgdGhpc1xuICAvLyBkb2Vzbid0IHVzZSBSZWFjdEVsZW1lbnQuY2xvbmVBbmRSZXBsYWNlUHJvcHMuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNoaWxkLnR5cGUsIG5ld1Byb3BzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVdpdGhQcm9wcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1ib290c3RyYXAvdXRpbHMvY2xvbmVXaXRoUHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFNhZmUgY2hhaW5lZCBmdW5jdGlvblxuICpcbiAqIFdpbGwgb25seSBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gaWYgbmVlZGVkLFxuICogb3RoZXJ3aXNlIHdpbGwgcGFzcyBiYWNrIGV4aXN0aW5nIGZ1bmN0aW9ucyBvciBudWxsLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gdHdvXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb258bnVsbH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKG9uZSwgdHdvKSB7XG4gIHZhciBoYXNPbmUgPSB0eXBlb2Ygb25lID09PSAnZnVuY3Rpb24nO1xuICB2YXIgaGFzVHdvID0gdHlwZW9mIHR3byA9PT0gJ2Z1bmN0aW9uJztcblxuICBpZiAoIWhhc09uZSAmJiAhaGFzVHdvKSB7IHJldHVybiBudWxsOyB9XG4gIGlmICghaGFzT25lKSB7IHJldHVybiB0d287IH1cbiAgaWYgKCFoYXNUd28pIHsgcmV0dXJuIG9uZTsgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdHdvLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYW4gdW5tb2RpZmllZCB2ZXJzaW9uIG9mOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9zcmMvdmVuZG9yL3N0dWJzL09iamVjdC5hc3NpZ24uanNcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjAuMTIuMC9MSUNFTlNFXG4gKiBBbiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL1BBVEVOVFNcbiAqL1xuXG4vLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LmFzc2lnblxuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2VzKSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gdGFyZ2V0IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZm9yICh2YXIgbmV4dEluZGV4ID0gMTsgbmV4dEluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgbmV4dEluZGV4KyspIHtcbiAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgIGlmIChuZXh0U291cmNlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgLy8gV2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQgYWNjZXNzb3JzIG5vciBwcm94aWVzLiBUaGVyZWZvcmUgdGhpc1xuICAgIC8vIGNvcHkgY2Fubm90IHRocm93LiBJZiB3ZSBldmVyIHN1cHBvcnRlZCB0aGlzIHRoZW4gd2UgbXVzdCBoYW5kbGVcbiAgICAvLyBleGNlcHRpb25zIGFuZCBzaWRlLWVmZmVjdHMuIFdlIGRvbid0IHN1cHBvcnQgc3ltYm9scyBzbyB0aGV5IHdvbid0XG4gICAgLy8gYmUgdHJhbnNmZXJyZWQuXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL09iamVjdC5hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgZmlsZSBjb250YWlucyBhbiB1bm1vZGlmaWVkIHZlcnNpb24gb2Y6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL3NyYy91dGlscy9qb2luQ2xhc3Nlcy5qc1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MC4xMi4wL0xJQ0VOU0VcbiAqIEFuIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YwLjEyLjAvUEFURU5UU1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvbWJpbmVzIG11bHRpcGxlIGNsYXNzTmFtZSBzdHJpbmdzIGludG8gb25lLlxuICogaHR0cDovL2pzcGVyZi5jb20vam9pbmNsYXNzZXMtYXJncy12cy1hcnJheVxuICpcbiAqIEBwYXJhbSB7Li4uP3N0cmluZ30gY2xhc3Nlc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqb2luQ2xhc3NlcyhjbGFzc05hbWUvKiwgLi4uICovKSB7XG4gIGlmICghY2xhc3NOYW1lKSB7XG4gICAgY2xhc3NOYW1lID0gJyc7XG4gIH1cbiAgdmFyIG5leHRDbGFzcztcbiAgdmFyIGFyZ0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGlmIChhcmdMZW5ndGggPiAxKSB7XG4gICAgZm9yICh2YXIgaWkgPSAxOyBpaSA8IGFyZ0xlbmd0aDsgaWkrKykge1xuICAgICAgbmV4dENsYXNzID0gYXJndW1lbnRzW2lpXTtcbiAgICAgIGlmIChuZXh0Q2xhc3MpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gKGNsYXNzTmFtZSA/IGNsYXNzTmFtZSArICcgJyA6ICcnKSArIG5leHRDbGFzcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBqb2luQ2xhc3NlcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWJvb3RzdHJhcC91dGlscy9qb2luQ2xhc3Nlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxudmFyIEN1c3RvbVByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIGEgcHJvcCBwcm92aWRlcyBhIERPTSBlbGVtZW50XG4gICAqXG4gICAqIFRoZSBlbGVtZW50IGNhbiBiZSBwcm92aWRlZCBpbiB0d28gZm9ybXM6XG4gICAqIC0gRGlyZWN0bHkgcGFzc2VkXG4gICAqIC0gT3IgcGFzc2VkIGFuIG9iamVjdCB3aGljaCBoYXMgYSBgZ2V0RE9NTm9kZWAgbWV0aG9kIHdoaWNoIHdpbGwgcmV0dXJuIHRoZSByZXF1aXJlZCBET00gZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0gcHJvcHNcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqIEBwYXJhbSBjb21wb25lbnROYW1lXG4gICAqIEByZXR1cm5zIHtFcnJvcnx1bmRlZmluZWR9XG4gICAqL1xuICBtb3VudGFibGU6IGNyZWF0ZU1vdW50YWJsZUNoZWNrZXIoKVxufTtcblxuLyoqXG4gKiBDcmVhdGUgY2hhaW4tYWJsZSBpc1JlcXVpcmVkIHZhbGlkYXRvclxuICpcbiAqIExhcmdlbHkgY29waWVkIGRpcmVjdGx5IGZyb206XG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMC4xMS1zdGFibGUvc3JjL2NvcmUvUmVhY3RQcm9wVHlwZXMuanMjTDk0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgICdSZXF1aXJlZCBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCB3YXMgbm90IHNwZWNpZmllZCBpbiAnICtcbiAgICAgICAgICAgICdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW91bnRhYmxlQ2hlY2tlcigpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wc1twcm9wTmFtZV0gIT09ICdvYmplY3QnIHx8XG4gICAgICB0eXBlb2YgcHJvcHNbcHJvcE5hbWVdLmdldERPTU5vZGUgIT09ICdmdW5jdGlvbicgJiYgcHJvcHNbcHJvcE5hbWVdLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAnSW52YWxpZCBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICtcbiAgICAgICAgICAnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgRE9NIGVsZW1lbnQgb3IgYW4gb2JqZWN0IHRoYXQgaGFzIGEgYGdldERPTU5vZGVgIG1ldGhvZCdcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21Qcm9wVHlwZXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtYm9vdHN0cmFwL3V0aWxzL0N1c3RvbVByb3BUeXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJvdmVybGF5LXRyaWdnZXIvb3ZlcmxheS10cmlnZ2VyLmpzIn0=