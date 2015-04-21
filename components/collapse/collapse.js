var React = require('react');
var types = React.PropTypes;
var BsPanel = require('react-bootstrap/lib/Panel');
var classnames = require('classnames');

var CollapseProps = {
  propTypes: {
    divider: types.bool,
    header: types.node.isRequired
  }
};

var BaseCollapse = React.createClass({
  mixins: [CollapseProps],

  getInitialState() {
    return {expanded: false};
  },

  handleSelect(e) {
    e && e.preventDefault();
    this.setState({expanded: !this.state.expanded});
  },

  render() {
    var {divider, header, children, ...others} = this.props;
    var classes = classnames({'panel-divider': divider});
    return (
      <BsPanel {...others} className={classes} collapsable expanded={this.state.expanded} onSelect={this.handleSelect} header={header}>
        {children}
      </BsPanel>
    );
  }
});

var Collapse = React.createClass({
  mixins: [CollapseProps],

  render() {
    var {header, ...others} = this.props;

    header = (
      <div className="collapse-trigger">
        <div className="when-collapsed-inline">
          <i className="fa fa-caret-right collapse-icon"></i>
        </div>
        <div className="when-expanded-inline">
          <i className="fa fa-caret-down collapse-icon"></i>
        </div>
        {header}
      </div>
    );

    return <BaseCollapse {...others} header={header} />;
  }
});

var AltCollapse = React.createClass({
  mixins: [CollapseProps],

  render() {
    var {header, ...others} = this.props;

    header = (
      <div className="collapse-trigger">
        <div className="when-collapsed-inline">
          <i className="fa fa-plus-square collapse-icon"></i>
        </div>
        <div className="when-expanded-inline">
          <i className="fa fa-minus-square collapse-icon"></i>
        </div>
        {header}
      </div>
    );

    return <BaseCollapse {...others} header={header}/>;
  }
});

module.exports = {BaseCollapse, Collapse, AltCollapse};
