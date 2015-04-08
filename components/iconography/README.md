We use Font Awesome. Specify the icon by changing the name.
The name is the font-awesome class sans the fa-. To spin the icon, add spin to the Icon.

Sample Usage:
```js
var Icon = require('pui-react-iconography').Icon;

var MyComponent = React.createClass({
  render: function() {
    return (
      <UI.Icon name="plus" />
      <UI.Icon spin name="user" />
    );
  }
});

```

For more examples, go to the [style guide](http://styleguide.cfapps.io/elements.html#iconography)