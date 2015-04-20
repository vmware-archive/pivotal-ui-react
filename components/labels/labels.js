var React = require('react');

var Label = React.createClass({
  render() {
    return <span className="label label-primary">{this.props.children}</span>;
  }
});

module.exports = {Label};
