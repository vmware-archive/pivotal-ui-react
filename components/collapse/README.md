# Pui-react-collapse

Collapse components are implementations of the [Accordion](http://styleguide.pivotal.io/objects.html#accordion) style. In all Collapse component variations, the header prop describes the text of the clickable region to toggle the expand/collapse states.

```html
<BaseCollapse header="Panel 1">
  <p>Panel 1 content</p>
  <p>Panel 1 content</p>
</BaseCollapse>

<Collapse header="With Arrows">
  <p>Content!</p>
  <p>Content!</p>
</Collapse>

<AltCollapse header="Without Arrows">
  <p>Content!</p>
  <p>Content!</p>
</AltCollapse>

<Collapse header="With Divider" divider>
  <p>Content!</p>
  <p>Content!</p>
</Collapse>
```