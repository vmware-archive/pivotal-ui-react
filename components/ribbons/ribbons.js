var React = require('react');

var Ribbon = React.createClass({
  render() {
    return <div className="inline-ribbon">{this.props.children}</div>;
  }
});

var PrimaryRibbon = React.createClass({
  render() {
    return <div className="inline-ribbon ribbon-primary">{this.props.children}</div>;
  }
});

var Banner = React.createClass({
  render() {
    return <div className="ribbon-banner">{this.props.children}</div>;
  }
});

module.exports = {Ribbon, PrimaryRibbon, Banner};
