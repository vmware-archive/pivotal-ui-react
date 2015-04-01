/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
"use strict";

var React = require("react/addons");
var classnames = require("classnames");

var ListMixin = {
  propTypes: {
    spacing: React.PropTypes.oneOf(["n", "s", "m", "l", "xl"])
  }
};

var ListItem = React.createClass({
  displayName: "ListItem",

  mixins: [ListMixin],

  render: function render() {
    return React.createElement(
      "li",
      this.props,
      this.props.children
    );
  }
});

var UnorderedList = React.createClass({
  displayName: "UnorderedList",

  mixins: [ListMixin],

  render: function render() {
    var _props = this.props;
    var spacing = _props.spacing;
    var children = _props.children;

    var classes = classnames({
      "list-unordered": !this.props.unstyled && !this.props.checked,
      "list-unstyled": this.props.unstyled,
      "list-checked": this.props.checked
    });
    if (spacing) {
      classes += " lv" + spacing;
    }

    return React.createElement(
      "ul",
      { className: classes },
      children
    );
  }

});

var OrderedList = React.createClass({
  displayName: "OrderedList",

  mixins: [ListMixin],

  render: function render() {
    var _props = this.props;
    var spacing = _props.spacing;
    var children = _props.children;

    var classes = classnames({
      "list-unstyled": this.props.unstyled
    });
    if (spacing) {
      classes += " lv" + spacing;
    }

    return React.createElement(
      "ol",
      { className: classes },
      children
    );
  }
});

var InlineList = React.createClass({
  displayName: "InlineList",

  mixins: [ListMixin],

  render: function render() {
    var _props = this.props;
    var spacing = _props.spacing;
    var children = _props.children;

    var classes = classnames({
      "list-inline": true,
      "list-inline-divider": this.props.divider });
    if (spacing) {
      classes += " lh" + spacing;
    }

    if (this.props.className) {
      classes += " " + this.props.className;
    }

    return React.createElement(
      "ul",
      { className: classes },
      children
    );
  }
});

var GroupList = React.createClass({
  displayName: "GroupList",

  mixins: [ListMixin],

  renderChildren: function renderChildren() {
    return React.Children.map(this.props.children, function (c) {
      return React.addons.cloneWithProps(c, { className: "list-group-item" });
    });
  },

  render: function render() {
    var spacing = this.props.spacing;

    var classes = classnames({
      "list-group": true
    });
    if (spacing) {
      classes += " lv" + spacing;
    }

    return React.createElement(
      "ul",
      { className: classes },
      this.renderChildren()
    );
  }
});

var StepList = React.createClass({
  displayName: "StepList",

  mixins: [ListMixin],

  render: function render() {
    var _props = this.props;
    var spacing = _props.spacing;
    var children = _props.children;

    var classes = classnames({
      "list-steps": true
    });
    if (spacing) {
      classes += " lh" + spacing;
    }

    return React.createElement(
      "ol",
      { className: classes },
      children
    );
  }
});

var BreadcrumbList = React.createClass({
  displayName: "BreadcrumbList",

  mixins: [ListMixin],

  render: function render() {
    var _props = this.props;
    var spacing = _props.spacing;
    var children = _props.children;

    var classes = classnames({
      "list-breadcrumb": true
    });
    if (spacing) {
      classes += " lh" + spacing;
    }

    return React.createElement(
      "ul",
      { className: classes },
      children
    );
  }
});

module.exports = {
  ListItem: ListItem,
  UnorderedList: UnorderedList,
  OrderedList: OrderedList,
  InlineList: InlineList,
  GroupList: GroupList,
  StepList: StepList,
  BreadcrumbList: BreadcrumbList
};