var classnames = require('classnames');
var React = require('react');

var BootstrapRow = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var Row = React.createClass({
  propTypes: {
    gutter: React.PropTypes.oneOf(['sm', 'md', 'lg'])
  },

  render: function () {
    var {gutter, className, children, ...other} = this.props;
    var classes = classnames(
      className,
      {
        'row-gutter-md': gutter === 'md',
        'row-gutter-sm': gutter === 'sm'
      }
    );
    return (<BootstrapRow {...other} className={classes}>{children}</BootstrapRow>);
  }
});

module.exports = {Row: Row, Col: Col};
