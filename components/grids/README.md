#Pivotal-ui-react.grids

A tool used for displaying content in a grid system.

Sample Usage
```js
var grids = require('pivotal-ui-react.grids');
var Row = grids.Row;
var Col = grids.Col;

var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
        <UI.Row className="grid-show">
          <UI.Col md={2}></UI.Col>
          <UI.Col md={2}></UI.Col>
          <UI.Col md={2}></UI.Col>
          <UI.Col md={2}></UI.Col>
          <UI.Col md={2}></UI.Col>
          <UI.Col md={2}></UI.Col>
          <UI.Col md={2}></UI.Col>
          <UI.Col md={2}></UI.Col>
          <UI.Col md={2}></UI.Col>
          <UI.Col md={2}></UI.Col>
          <UI.Col md={2}></UI.Col>
          <UI.Col md={2}></UI.Col>
        </UI.Row>

        <UI.Row className="grid-show">
          <UI.Col md={16}></UI.Col>
          <UI.Col md={8}></UI.Col>
        </UI.Row>

        <UI.Row className="grid-show">
          <UI.Col md={8}></UI.Col>
          <UI.Col md={8}></UI.Col>
          <UI.Col md={8}></UI.Col>
        </UI.Row>

        <UI.Row className="grid-show">
          <UI.Col md={12}></UI.Col>
          <UI.Col md={12}></UI.Col>
        </UI.Row>
      </div>
    )
  }
});

```
For more detailed usage information, see the [style guide](http://styleguide.cfapps.io/react_beta.html#grid_react).
