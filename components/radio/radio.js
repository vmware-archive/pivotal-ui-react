var React = require('react/addons');

var Radio = React.createClass({
  propTypes: {
    checked: React.PropTypes.bool,
    defaultChecked: React.PropTypes.bool,
    name: React.PropTypes.string,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    id: React.PropTypes.string
  },

  render: function() {
    return (
      <div className='radio'>
        <label>
          <input type='radio' {...this.props}/>
        </label>
      </div>
    );
  }
});

module.exports = {Radio};
