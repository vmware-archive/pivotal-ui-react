var React = require('react');

var TypographyMixin = {
  propTypes: {
    allCaps: React.PropTypes.bool,
    bold: React.PropTypes.oneOf(['low', 'default', 'high', 'max']),
    color: React.PropTypes.string,
    element: React.PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
    size: React.PropTypes.oneOf(['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small'])
  }
};

var Heading = React.createClass({
  mixins: [TypographyMixin],

  render() {
    var {className, size, bold, allCaps, color, element: Klass = 'p', children, ...other} = this.props;

    var classes = [
      className,
      size,
      bold && `em-${bold}`,
      allCaps && 'em-alt',
      color
    ]
      .filter(Boolean)
      .join(' ');

    return (<Klass {...other} className={classes}>{children}</Klass>);
  }
});

function createHeader(props) {
  return React.createClass({
    mixins: [TypographyMixin],
    render() {
      return (<Heading {...this.props} {...props}/>);
    }
  });
}

var DefaultH1 = createHeader({element: 'h1'});
var DefaultH2 = createHeader({element: 'h2'});
var DefaultH3 = createHeader({element: 'h3'});
var DefaultH4 = createHeader({element: 'h4'});
var DefaultH5 = createHeader({element: 'h5'});
var DefaultH6 = createHeader({element: 'h6'});

var AlternateH1 = createHeader({element: 'h1', color: 'type-dark-1', bold: 'max'});
var AlternateH2 = createHeader({element: 'h2', size: 'h4', bold: 'high', allCaps: true});
var AlternateH3 = createHeader({element: 'h3', size: 'h4'});
var AlternateH4 = createHeader({element: 'h4', size: 'h6', bold: 'high', allCaps: true});
var AlternateH5 = createHeader({element: 'h5', size: 'h6', bold: 'high'});
var AlternateH6 = createHeader({element: 'h6'});

var MarketingH1 = createHeader({element: 'h1', size: 'title', bold: 'high', color: 'type-dark-1'});
var MarketingH2 = createHeader({element: 'h2', size: 'h1', bold: 'high', color: 'type-dark-1'});
var MarketingH3 = createHeader({element: 'h3', size: 'h2', bold: 'high', color: 'type-dark-1'});
var MarketingH4 = createHeader({element: 'h4', size: 'h3', bold: 'high', color: 'type-dark-1'});
var MarketingH5 = createHeader({element: 'h5', size: 'h4', bold: 'high', color: 'type-dark-1'});
var MarketingH6 = createHeader({element: 'h6', size: 'h5', bold: 'high', color: 'type-dark-1'});

module.exports = {
  DefaultH1,
  DefaultH2,
  DefaultH3,
  DefaultH4,
  DefaultH5,
  DefaultH6,
  AlternateH1,
  AlternateH2,
  AlternateH3,
  AlternateH4,
  AlternateH5,
  AlternateH6,
  MarketingH1,
  MarketingH2,
  MarketingH3,
  MarketingH4,
  MarketingH5,
  MarketingH6,
  Heading
};
