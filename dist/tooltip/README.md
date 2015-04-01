# pivotal-ui-react.tooltip

Tooltips are used to display extra information on hover. 
They are designed to be used with `OverlayTrigger`.

To make an element show a tooltip, wrap it in an `OverlayTrigger`.
If the `overlay` property passed into the `OverlayTrigger` will be displayed on hover,
this is where the `Tooltip` can be used. The is currently a thin wrapper around
React Bootstrap.

Tooltips are placed using the `placement` property on `OverlayTrigger`, "left", "right", "bottom", "top".

Sample Usage
```js
var OverlayTrigger = require('pivotal-ui-react.overlay-trigger').OverlayTrigger;
var Tooltip = require('pivotal-ui-react.tooltip').Tooltip;

var MyComponent = React.createClass({
  render: function() {
    var overlay = (<Tooltip>I should be on the left</Tooltip>);
    return (
      <OverlayTrigger placement="left" overlay={overlay}>
        <a href="#"> tooltip on the left</a>
      </OverlayTrigger>
    );
  }
});
```

For more detailed usage information, see the [style guide](http://styleguide.cfapps.io/react_beta.html#tooltips_react).

*****************************************

This is a component of Pivotal UI React.

[Styleguide](http://styleguide.pivotal.io/react_beta.html)
[Github](https://github.com/pivotal-cf/pivotal-ui-react)

All Pivotal UI Components require ReactJS (0.12.x)

(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.
