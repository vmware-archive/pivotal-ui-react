// TODO: Change Type to Kind

var React = require('react');
var classnames = require('classnames');

var paddingTypes = [
  for (type of ['p', 'm'])
  for (loc of ['l', 'r', 't', 'b', 'h', 'v', 'a'])
  for (size of ['s', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl'])
  `${type}${loc}${size}`
  ];

var PanelMixin = {
  propTypes: {
    type: React.PropTypes.string,
    padding: function(props, propName, componentName) {
      if (props.padding) {
        props.padding.split(' ').forEach(function(pad) {
          if (!paddingTypes.includes(pad)) {
            return new Error('Invalid padding type used in ' + componentName);
          }
        });
      }
    },
    scrollable: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.number
    ])
  }
};

var Panel = React.createClass({
  mixins: [PanelMixin],

  propTypes: {
    type: React.PropTypes.string,
    title: React.PropTypes.string
  },

  render() {
    var {type, className, padding, scrollable, children, ...other} = this.props;

    var classes = classnames('panel', type, className, {'panel-scrollable': scrollable}),
      bodyClasses = classnames('panel-body', padding);

    var title;
    if (this.props.title && this.props.title.length > 0) {
      title = (
        <div className="panel-header">
          <h5 className="panel-title-alt">{ this.props.title }</h5>
        </div>
      );
    } else {
      title = '';
    }

    return (
      <div {...other} className={classes} style={scrollable && {maxHeight: scrollable}}>
        {title}
        <div className={bodyClasses}>
          {children}
        </div>
      </div>
    );
  }
});

var SimplePanel = React.createClass({
  mixins: [PanelMixin],
  render() {
    return <Panel {...this.props} type="panel-simple"/>;
  }
});

var BasicPanel = React.createClass({
  mixins: [PanelMixin],
  render() {
    return <Panel {...this.props} type="panel-basic"/>;
  }
});

var BasicPanelAlt = React.createClass({
  mixins: [PanelMixin],
  render() {
    return <Panel {...this.props} type="panel-basic-alt"/>;
  }
});

var ClickablePanel = React.createClass({
  mixins: [PanelMixin],
  render() {
    return <Panel {...this.props} type="panel-clickable"/>;
  }
});

var ClickableAltPanel = React.createClass({
  mixins: [PanelMixin],
  render() {
    return <Panel {...this.props} type="panel-clickable-alt"/>;
  }
});

var ShadowPanel = React.createClass({
  mixins: [PanelMixin],

  propTypes: {
    shadowLevel: React.PropTypes.oneOf([1, 2, 3, 4])
  },

  render() {
    var {shadowLevel, ...other} = this.props;
    shadowLevel = shadowLevel || 3;

    return <Panel {...other} type={`panel-shadow-${shadowLevel}`}/>;
  }
});

var HighlightPanel = React.createClass({
  mixins: [PanelMixin],
  render() {
    return <Panel {...this.props} type="panel-highlight"/>;
  }
});

module.exports = {
  Panel,
  ClickablePanel,
  ClickableAltPanel,
  SimplePanel,
  BasicPanel,
  BasicPanelAlt,
  ShadowPanel,
  HighlightPanel
};
