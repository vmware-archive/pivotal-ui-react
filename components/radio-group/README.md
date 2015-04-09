# Pui-react-radio-group

Radio Groups are for groups of radio inputs.

Sample Usage
```js
var MyComponent = React.createClass({
  render: function() {
    var RadioGroup = require('pui-react-radio-group').RadioGroup;
    var Radio = require('pui-react-radio').Radio;

    return (
      <RadioGroup name="field_name">
        <Radio value="firstValue">You could click this radio button</Radio>
        <Radio value="SecondValue" defaultChecked>This is also a radio button</Radio>
      </RadioGroup>
    );
  }
});
```

## Properties

Property      | Values          | Description
------------- | --------------- | --------------------------------------------------------------------------
`name`        | String          | name property will be given to each radio input
`onChange`    | Function        | onChange callback will be given to each radio input

For more detailed usage information, see the [style guide](http://styleguide.pivotal.io/react_beta.html#form_radio_input_react).
