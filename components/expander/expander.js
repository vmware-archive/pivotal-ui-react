var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ExpanderContent = React.createClass({
  propTypes: {
    expanded: React.PropTypes.bool
  },

  getInitialState() {
    return {
      expanded: this.props.expanded
    };
  },

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  },

  render() {
    var content;

    if (this.state.expanded) {
      content = (
        <div key="expandedContent" style={{overflow: 'hidden'}}>
          {this.props.children}
        </div>
      );
    }

    return (
      <ReactCSSTransitionGroup transitionName="expander">
        {content}
      </ReactCSSTransitionGroup>
    );
  }
});

var ExpanderTrigger = React.createClass({
  getInitialState() {
    return {};
  },

  setTarget(target) {
    this.setState({
      target: target
    });
  },

  toggleExpander () {
    if (this.state.target) {
      this.state.target.toggle();
    } else {
      console.warn('No ExpanderContent provided to ExpanderTrigger.');
    }
  },

  render() {
    return (
      <div onClick={this.toggleExpander}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = {ExpanderContent, ExpanderTrigger};