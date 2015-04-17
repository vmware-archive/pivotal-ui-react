var React = require('react');
var classnames = require('classnames');

var BasePane = React.createClass({
  propTypes: {
    outerClass: React.PropTypes.string,
    innerClass: React.PropTypes.string
  },

  render() {
    var {outerClass, innerClass, children, ...other} = this.props;
    return (
      <div {...other} className={classnames('pane', outerClass)}>
        <div className={classnames('container', innerClass)}>{children}</div>
      </div>
    );
  }
});

var Pane = React.createClass({
  render: function () {
    var {className, ...other} = this.props;
    return <BasePane {...other} outerClass={className} />;
  }
});

module.exports = {
  BasePane,
  Pane
};
