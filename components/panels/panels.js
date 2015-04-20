var React = require('react');
var types = React.PropTypes;
var classnames = require('classnames');

var paddingTypes = [
  for (type of ['p', 'm'])
  for (location of ['l', 'r', 't', 'b', 'h', 'v', 'a'])
  for (size of ['s', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl'])
  `${type}${location}${size}`
  ];
var PanelTypes = {
  propTypes: {
    type: types.string,
    padding: function(props, propName, componentName) {
      if (props.padding && !props.padding.split(' ').every(pad => paddingTypes.includes(pad))) {
        return new Error(`Invalid padding type used in ${componentName}`);
      }
    },
    scrollable: types.oneOfType([
      types.bool,
      types.number
    ])
  }
};

var Panel = React.createClass({
  mixins: [PanelTypes],

  propTypes: {
    kind: types.string,
    title: types.string
  },

  render() {
    var {kind, className, padding, scrollable, children, ...other} = this.props;

    var classes = classnames('panel', kind, className, {'panel-scrollable': scrollable});
    var bodyClasses = classnames('panel-body', padding);

    var title = this.props.title ? (
      <div className="panel-header">
        <h5 className="panel-title-alt">{this.props.title}</h5>
      </div>
    ) : null;

    return (
      <div {...other} className={classes} style={scrollable && {maxHeight: scrollable}}>
        {title}
        <div className={bodyClasses}>{children}</div>
      </div>
    );
  }
});

var ShadowPanel = React.createClass({
  mixins: [PanelTypes],

  propTypes: {
    shadowLevel: types.oneOf([1, 2, 3, 4])
  },

  getDefaultProps() {
    return {shadowLevel: 3};
  },

  render() {
    var {shadowLevel, ...other} = this.props;
    return <Panel {...other} kind={`panel-shadow-${shadowLevel}`}/>;
  }
});

function defPanel(props) {
  return React.createClass({
    mixins: [PanelTypes],
    render() {
      return <Panel {...props} {...this.props}/>;
    }
  });
}

module.exports = {
  Panel,
  SimplePanel: defPanel({kind: 'panel-simple'}),
  BasicPanel: defPanel({kind: 'panel-basic'}),
  BasicPanelAlt: defPanel({kind: 'panel-basic-alt'}),
  ClickablePanel: defPanel({kind: 'panel-clickable'}),
  ClickableAltPanel: defPanel({kind: 'panel-clickable-alt'}),
  HighlightPanel: defPanel({kind: 'panel-highlight'}),
  ShadowPanel
};
