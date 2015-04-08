# Pivotal UI Buttons

A set of Reactjs components for displaying Pivotal UI buttons. 

## Button Styles

There are seven buttons types. You can see them rendered in the 
[React buttons section of the styleguide](http://styleguide.pivotal.io/react_beta.html#button_react).

```js
<UI.DefaultButton>
  Default
</UI.DefaultButton>

<UI.DefaultAltButton>
  Default alternate
</UI.DefaultAltButton>

<UI.PrimaryButton>
  Primary
</UI.PrimaryButton>

<UI.LowlightButton>
  Lowlight
</UI.LowlightButton>

<UI.DangerButton>
  Danger
</UI.DangerButton>

<UI.HighlightButton>
  Highlight
</UI.HighlightButton>

<UI.HighlightAltButton>
  Highlight alternate
</UI.HighlightAltButton>
```

## Properties

Buttons have several optional modifiers that you can apply to achieve different layouts.

Property            | Values                      | Description
------------------- | --------------------------- | --------------------------------------------------------------------------
`href`              | URL                         | Makes a button styled link pointing to that URL
`block`             | true, false (default)       | Full width button fills its container
`large`             | true, false (default)       | Large button size 

For more detailed usage information, see the [style guide](http://styleguide.cfapps.io/react_beta.html#button_react).
