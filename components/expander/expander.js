var React = require('react/addons');
var types = React.PropTypes;
var {CSSTransitionGroup} = React.addons;

var ExpanderContent = React.createClass({
  propTypes: {
    expanded: types.bool
  },

  getInitialState() {
    return {expanded: this.props.expanded};
  },

  toggle() {
    this.setState({expanded: !this.state.expanded});
  },

  render() {
    var content = this.state.expanded ?
      <div key="expandedContent" style={{overflow: 'hidden'}}>{this.props.children}</div> :
      null;
    return <CSSTransitionGroup transitionName="expander">{content}</CSSTransitionGroup>;
  }
});

var ExpanderTrigger = React.createClass({
  getInitialState() {
    return {};
  },

  setTarget(target) {
    this.setState({target});
  },

  toggleExpander () {
    if (this.state.target) {
      this.state.target.toggle();
    } else {
      console.warn('No ExpanderContent provided to ExpanderTrigger.');
    }
  },

  render() {
    return <div onClick={this.toggleExpander}>{this.props.children}</div>;
  }
});

module.exports = {ExpanderContent, ExpanderTrigger};