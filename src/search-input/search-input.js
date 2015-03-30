var React = require('react');

var SearchInput = React.createClass({
  propTypes: {
    placeholder: React.PropTypes.string
  },

  render: function() {
    var {className, ...other} = this.props;
    var className = ['form-control', className].filter(Boolean).join(' ');

    return (
      <div className='form-group form-group-search'>
        <input {...other} type='text' className={className} />
        <i className='fa fa-search' />
      </div>
    );
  }
});

module.exports = {SearchInput};
