var React = require('react');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');

var SimpleAltTabs = React.createClass({
  render() {
    return <div className="tab-simple-alt"><TabbedArea {...this.props}/></div>;
  }
});

var SimpleTabs = React.createClass({
  render() {
    return <div className="tab-simple"><TabbedArea {...this.props}/></div>;
  }
});

module.exports = {
  SimpleAltTabs,
  SimpleTabs,
  Tab: TabPane
};
