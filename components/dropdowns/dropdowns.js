var React = require('react');

var Dropdown = require('react-bootstrap/DropdownButton');
var DropdownItem = require('react-bootstrap/MenuItem');

var LinkDropdown = React.createClass({
  render() {
    return (
      <Dropdown {...this.props} bsStyle="link"/>
    );
  }
});

var DefaultAltDropdown = React.createClass({
  render() {
    return (
      <Dropdown {...this.props} className="btn-default-alt"/>
    );
  }
});

var PrimaryDropdown = React.createClass({
  render() {
    return (
      <Dropdown {...this.props} bsStyle="primary"/>
    );
  }
});

var LowlightDropdown = React.createClass({
  render() {
    return (
      <Dropdown {...this.props} className="btn-lowlight"/>
    );
  }
});

var DangerDropdown = React.createClass({
  render() {
    return (
      <Dropdown {...this.props} bsStyle="danger"/>
    );
  }
});

var HighlightDropdown = React.createClass({
  render() {
    return (
      <Dropdown {...this.props} className="btn-highlight"/>
    );
  }
});

var HighlightAltDropdown = React.createClass({
  render() {
    return (
      <Dropdown {...this.props} className="btn-highlight-alt"/>
    );
  }
});


module.exports = {
  Dropdown,
  LinkDropdown,
  DefaultAltDropdown,
  PrimaryDropdown,
  LowlightDropdown,
  DangerDropdown,
  HighlightDropdown,
  HighlightAltDropdown,
  DropdownItem
};
