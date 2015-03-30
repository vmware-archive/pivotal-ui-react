/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
"use strict";

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require("react");

var SearchInput = React.createClass({
  displayName: "SearchInput",

  propTypes: {
    placeholder: React.PropTypes.string
  },

  render: function render() {
    var _props = this.props;
    var placeholder = _props.placeholder;
    var className = _props.className;

    var other = _objectWithoutProperties(_props, ["placeholder", "className"]);

    var inputClasses = ["form-control", className].filter(Boolean).join(" ");

    return React.createElement(
      "div",
      { className: "form-group form-group-search" },
      React.createElement("input", _extends({}, other, { type: "text", className: inputClasses, placeholder: placeholder })),
      React.createElement("i", { className: "fa fa-search" })
    );
  }
});

module.exports = { SearchInput: SearchInput };