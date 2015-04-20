var React = require('react');
var Dropdown = require('react-bootstrap/DropdownButton');

function defDropdown(props) {
  return React.createClass({
    render() {
      return <Dropdown {...props} {...this.props}/>
    }
  });
}

module.exports = {
  Dropdown,
  DropdownItem: require('react-bootstrap/MenuItem'),
  LinkDropdown: defDropdown({bsStyle: 'link'}),
  DefaultAltDropdown: defDropdown({className: 'btn-default-alt'}),
  PrimaryDropdown: defDropdown({bsStyle: 'primary'}),
  LowlightDropdown: defDropdown({className: 'btn-lowlight'}),
  DangerDropdown: defDropdown({bsStyle: 'danger'}),
  HighlightDropdown: defDropdown({className: 'btn-highlight'}),
  HighlightAltDropdown: defDropdown({className: 'btn-highlight-alt'})
};
