var React = require('react');
var types = React.PropTypes;
var classnames = require('classnames');

var BasePane = React.createClass({
  propTypes: {
    outerClass: types.string,
    innerClass: types.string
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
  render() {
    var {className, ...other} = this.props;
    return <BasePane {...other} outerClass={className}/>;
  }
});

module.exports = {BasePane, Pane};
