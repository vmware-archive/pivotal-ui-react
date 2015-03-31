/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
"use strict";

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require("react");
var classnames = require("classnames");

var MediaObject = React.createClass({
  displayName: "MediaObject",

  render: function render() {
    var className = classnames({
      "media-left": this.props.horizontalAlignment === "left",
      "media-right": this.props.horizontalAlignment === "right",
      "media-middle": this.props.vAlign === "middle",
      "media-bottom": this.props.vAlign === "bottom",

      prs: this.props.leftMediaSpacing === "small",
      prm: this.props.leftMediaSpacing === "medium",
      prl: this.props.leftMediaSpacing === "large",
      prxl: this.props.leftMediaSpacing === "xlarge",
      pls: this.props.rightMediaSpacing === "small",
      plm: this.props.rightMediaSpacing === "medium",
      pll: this.props.rightMediaSpacing === "large",
      plxl: this.props.rightMediaSpacing === "xlarge"
    });

    return React.createElement(
      "div",
      { className: className },
      this.props.children
    );
  }
});

var Media = React.createClass({
  displayName: "Media",

  propTypes: {
    hasImages: function hasImages(props) {
      if (!props.leftImage && !props.rightImage) {
        return new Error("The media component must have at least one image");
      }
    },
    leftMediaSpacing: React.PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
    rightMediaSpacing: React.PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
    stackSize: React.PropTypes.oneOf(["xsmall", "small", "medium", "large"]),
    vAlign: React.PropTypes.oneOf(["middle", "bottom"])
  },

  render: function render() {
    var _props = this.props;
    var leftImage = _props.leftImage;
    var leftMediaSpacing = _props.leftMediaSpacing;
    var rightImage = _props.rightImage;
    var rightMediaSpacing = _props.rightMediaSpacing;
    var stackSize = _props.stackSize;
    var vAlign = _props.vAlign;
    var children = _props.children;

    var other = _objectWithoutProperties(_props, ["leftImage", "leftMediaSpacing", "rightImage", "rightMediaSpacing", "stackSize", "vAlign", "children"]);

    var leftMedia, rightMedia;

    var classes = classnames("media", {
      "media-stackable-xs": stackSize === "xsmall",
      "media-stackable-sm": stackSize === "small",
      "media-stackable-md": stackSize === "medium",
      "media-stackable-lg": stackSize === "large"
    }, this.props.className);

    var bodyClasses = classnames("media-body", {
      "media-middle": vAlign === "middle",
      "media-bottom": vAlign === "bottom"
    });

    if (leftImage) {
      leftMedia = React.createElement(
        MediaObject,
        {
          horizontalAlignment: "left",
          vAlign: vAlign,
          leftMediaSpacing: leftMediaSpacing },
        leftImage
      );
    }

    if (rightImage) {
      rightMedia = React.createElement(
        MediaObject,
        {
          horizontalAlignment: "right",
          vAlign: vAlign,
          rightMediaSpacing: rightMediaSpacing },
        rightImage
      );
    }

    return React.createElement(
      "div",
      _extends({}, other, { className: classes }),
      leftMedia,
      React.createElement(
        "div",
        { className: bodyClasses },
        children
      ),
      rightMedia
    );
  }
});

var Flag = React.createClass({
  displayName: "Flag",

  render: function render() {
    return React.createElement(Media, _extends({}, this.props, { vAlign: "middle" }));
  }
});

module.exports = { Media: Media, Flag: Flag };