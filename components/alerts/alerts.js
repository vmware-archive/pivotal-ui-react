var React = require('react');
var BsAlert = require('react-bootstrap/Alert');
var {Media} = require('pui-react-media');

var AlertMixin = {
  propTypes: {
    dismissable: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.func
    ]),
    withIcon: React.PropTypes.bool
  }
};


var Alert = React.createClass({
  mixins: [AlertMixin],

  getInitialState() {
    return {
      alertVisible: true
    };
  },

  render() {
    var {dismissable, withIcon, alertIcon, children, ...others} = this.props;

    if (this.state.alertVisible) {
      var onDismiss = dismissable ? this.handleAlertDismiss : null;

      if (withIcon) {
        var icon = <i className={`fa ${alertIcon}`}></i>;
        children = <Media leftImage={icon}>{children}</Media>;
      }
      return <BsAlert {...others} onDismiss={onDismiss}>{children}</BsAlert>;
    }

    return <span/>;
  },

  handleAlertDismiss: function() {
    var {dismissable} = this.props;
    if (typeof dismissable === 'function') dismissable();
    this.setState({alertVisible: false});
  }
});

var SuccessAlert = React.createClass({
  mixins: [AlertMixin],

  render() {
    return (
      <Alert bsStyle="success" alertIcon="fa-check-circle" {...this.props} />
    );
  }
});

var InfoAlert = React.createClass({
  mixins: [AlertMixin],

  render() {
    return (
      <Alert bsStyle="info" alertIcon="fa-info-circle" {...this.props } />
    );
  }
});

var WarningAlert = React.createClass({
  mixins: [AlertMixin],

  render() {
    return (
      <Alert bsStyle="warning" alertIcon="fa-exclamation-triangle" {...this.props } />
    );
  }
});

var ErrorAlert = React.createClass({
  mixins: [AlertMixin],

  render() {
    return (
      <Alert bsStyle="danger" alertIcon="fa-exclamation-triangle" {...this.props } />
    );
  }
});

module.exports = {
  SuccessAlert,
  InfoAlert,
  WarningAlert,
  ErrorAlert
};
