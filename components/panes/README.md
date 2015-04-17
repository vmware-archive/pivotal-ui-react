# Pui-react-panes

The Pane component is a straightforward implementation of the [Pane](http://styleguide.pivotal.io/all.html#pane) styling. Any className values passed through are passed to the underlying .pane.

```html
<Pane className="bg-neutral-10">
  <DefaultH1>This is a pane</DefaultH1>
</Pane>

<BasePane outerClass="bg-dark-1" innerClass="bg-glow">
  <DefaultH1 color="type-neutral-9">This is a pane (configurable)</DefaultH1>
</BasePane>
```