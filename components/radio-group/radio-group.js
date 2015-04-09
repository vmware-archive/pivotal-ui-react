var React = require('react/addons');
var cloneWithProps = React.addons.cloneWithProps;

var RadioGroup = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {onChange: () => null};
  },

  onChange: function(e) {
    this.props.onChange(e.target.value);
  },

  render: function() {
    var {id, name} = this.props;
    var children = React.Children.map(this.props.children, (child) => cloneWithProps(child, {name, onChange: this.onChange}));

    return (
      <div className="radio-group" id={id}>{children}</div>
    );
  }
});

module.exports = {RadioGroup};
