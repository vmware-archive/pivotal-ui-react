/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
"use strict";

var React = require("react");

var FilterableSelect = React.createClass({
  displayName: "FilterableSelect",

  render: function render() {
    return (
      //use this search input in some kind of drop down menu, then drop the results into the
      //following fields.
      React.createElement(UI.SearchInput, { placeholder: "Search..." })
    );
  }
});

module.exports = { FilterableSelect: FilterableSelect };