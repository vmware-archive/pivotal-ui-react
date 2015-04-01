var React = require('react');

var FilterableSelect = React.createClass({
  render() {
    return (
      //use this search input in some kind of drop down menu, then drop the results into the
      //following fields.
      <UI.SearchInput placeholder="Search..."/>
    )
  }
});

module.exports = {FilterableSelect};