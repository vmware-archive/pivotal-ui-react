var React = require('react');
var types = React.PropTypes;
var classnames = require('classnames');

var DividerProps = {
  propTypes: {
    inverse: types.bool,
    size: types.oneOf(['large'])
  }
};

var Divider = React.createClass({
  mixins: [DividerProps],

  render() {
    var {inverse, size, className, ...others} = this.props;
    var classes = classnames(
      className,
      {
        'divider-1': inverse && size !== 'large',
        'divider-2': inverse && size === 'large',
        'divider-alternate-1': !inverse && size !== 'large',
        'divider-alternate-2': !inverse && size === 'large'
      }
    );

    return <hr {...others} className={classes}/>;
  }
});

function defDivider(props) {
  return React.createClass({
    mixins: [DividerProps],
    render() {
      return <Divider {...props} {...this.props} />;
    }
  });
}

module.exports = {
  Divider,
  InverseDivider: defDivider({inverse: true})
};
