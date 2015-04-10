# Pui-react-radio

Radio components are thin wrappers around radio inputs with some styling. `Radio`
will almost always be used with `RadioGroup.`

Sample Usage

First, require the component.

```js
var Radio = require('pui-react-radio').Radio;
```
Then, in a react context, you can use it. Most likely, you would have several
radio components wrapped in a `RadioGroup`.

```html
<Radio value="firstValue">You could click this radio button</Radio>
```

## Properties

Properties given to `Radio` are passed into the underlying `input` component.
Common properties include `value`, `checked`, `defaultChecked`, `name`, `onChange`

For more detailed usage information, see the [style guide](http://styleguide.pivotal.io/react_beta.html#form_radio_input_react).
