var React = require('react');
var {OverlayTrigger} = require('pivotal-ui-react.overlay-trigger');
var {Tooltip} = require('pivotal-ui-react.tooltip');

var FilterableSelect = React.createClass({
  propTypes: {
    placeholder: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  getInitialState: function() {
    return {selected: null};
  },

  clickOption(option) {
    this.setState({selected: option});
  },

  renderOptions() {
    var {open} = this.state;

    if (open) {
      return (
        <div>
          <div className="option" onClick={this.clickOption.bind(this, 'foo')}>foo</div>
          <div className="option" onClick={this.clickOption.bind(this, 'bar')}>bar</div>
          <div className="option" onClick={this.clickOption.bind(this, 'baz')}>baz</div>
        </div>
      );
    } else {
      return null;
    }
  },

  render() {
    var {placeholder} = this.props;
    var {selected} = this.state;

    return (
      <div className='filterable-select'>
        <OverlayTrigger placement="bottom" trigger="click" overlay={<Tooltip>Hello</Tooltip>}>
          <input placeholder={placeholder} type='text' className="trigger" value={selected} />
        </OverlayTrigger>
        <i className='fa fa-chevron-down'/>
      </div>
    );
  }
});

module.exports = {FilterableSelect};