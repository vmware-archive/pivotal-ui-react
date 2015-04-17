var React = require('react');
var classnames = require('classnames');

var DividerMixin = {
  propTypes: {
    className: React.PropTypes.string,
    inverse: React.PropTypes.bool,
    size: React.PropTypes.oneOf(['large'])
  }
};

var Divider = React.createClass({
  mixins: [DividerMixin],

  render() {
    var {inverse, size, className, ...others} = this.props;

    var typeName = "divider";
    if (!inverse) {
      typeName += "-alternate";
    }
    if (size === "large") {
      typeName += "-2";
    } else {
      typeName += "-1";
    }

    return (
      <hr {...others} className={classnames(className, typeName)} />
    );
  }
});


var InverseDivider = React.createClass({
  mixins: [DividerMixin],
  render() {
    return <Divider {...this.props} inverse={true} />;
  }
});

module.exports = {
  Divider,
  InverseDivider
};
