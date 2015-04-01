'use strict';

var React = require('react/addons');
var classnames = require('classnames');

var ListMixin = {
  propTypes: {
    spacing: React.PropTypes.oneOf(['n', 's', 'm', 'l', 'xl'])
  }
};

var ListItem = React.createClass({
  mixins: [ListMixin],

  render: function() {
    return (
      <li {...this.props}>{this.props.children}</li>
    );
  }
});

var UnorderedList = React.createClass({
  mixins: [ListMixin],

  render: function() {
    var { spacing, children } = this.props;
    var classes = classnames({
      'list-unordered': !this.props.unstyled && !this.props.checked,
      'list-unstyled': this.props.unstyled,
      'list-checked': this.props.checked
    });
    if (spacing) { classes += ' lv' + spacing; }

    return (
      <ul className={classes}>{children}</ul>
    );
  }

});

var OrderedList = React.createClass({
  mixins: [ListMixin],

  render: function() {
    var { spacing, children } = this.props;
    var classes = classnames({
      'list-unstyled': this.props.unstyled
    });
    if (spacing) { classes += ' lv' + spacing; }

    return (
      <ol className={classes}>{children}</ol>
    );
  }
});

var InlineList = React.createClass({
  mixins: [ListMixin],

  render: function() {
    var { spacing, children } = this.props;
    var classes = classnames({
      'list-inline': true,
      'list-inline-divider': this.props.divider,
    });
    if (spacing) { classes += ' lh' + spacing; }

    if (this.props.className) {
      classes += ' ' + this.props.className;
    }

    return (
      <ul className={classes}>{children}</ul>
    );
  }
});

var GroupList = React.createClass({
  mixins: [ListMixin],

  renderChildren: function() {
    return React.Children.map(this.props.children, c => React.addons.cloneWithProps(c, {className: 'list-group-item'}));
  },

  render: function() {
    var { spacing } = this.props;
    var classes = classnames({
      'list-group': true
    });
    if (spacing) { classes += ' lv' + spacing; }

    return (
      <ul className={classes}>{this.renderChildren()}</ul>
    );
  }
});

var StepList = React.createClass({
  mixins: [ListMixin],

  render: function() {
    var { spacing, children } = this.props;
    var classes = classnames({
      'list-steps': true
    });
    if (spacing) { classes += ' lh' + spacing; }

    return (
      <ol className={classes}>{children}</ol>
    );
  }
});

var BreadcrumbList = React.createClass({
  mixins: [ListMixin],

  render: function() {
    var { spacing, children } = this.props;
    var classes = classnames({
      'list-breadcrumb': true
    });
    if (spacing) { classes += ' lh' + spacing; }

    return (
      <ul className={classes}>{children}</ul>
    );
  }
});

module.exports = {
  ListItem,
  UnorderedList,
  OrderedList,
  InlineList,
  GroupList,
  StepList,
  BreadcrumbList
};
