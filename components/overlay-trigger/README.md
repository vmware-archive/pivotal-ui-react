# Pui-react-overlay-trigger

OverlayTriggers are used to display extra information on hover. 

To make an element show a , wrap it in an `OverlayTrigger`.
If the `overlay` property passed into the `OverlayTrigger` will be displayed on hover.
The is currently a thin wrapper around React Bootstrap.

Overlays are placed using the `placement` property on `OverlayTrigger`, "left", "right", "bottom", "top".

Sample Usage
```js
var OverlayTrigger = require('pui-react-overlay-trigger').OverlayTrigger;

var MyComponent = React.createClass({
  render: function() {
    var overlay = (<div>I should be on the left</div>);
    return (
      <OverlayTrigger placement="left" overlay={overlay}>
        <a href="#"> tooltip on the left</a>
      </OverlayTrigger>
    );
  }
});
```

## Properties

Property            | Values                                         | Description
------------------- | ---------------------------------------------- | --------------------------------------------------------------------------
`placement`         | "left", "right" (default), "top", "bottom"     | Determines placement of the overlay when it is triggered
`trigger`           | "hover" (default), "focus" (default), "click"  | Which events will trigger showing the overlay. Can be an array for multiple triggers
`overlay`           | HTML                                           | The html to show when the trigger happens 

For more detailed usage information, see the [style guide](http://styleguide.cfapps.io/react_beta.html#tooltips_react).
