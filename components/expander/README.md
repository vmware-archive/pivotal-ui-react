# Pui-react-expander

Expanders are collapsable content areas which are unlike their accordion counterparts in that they do not require a parent collapse and child content structure. This means you can trigger the expanding and collapsing content from somewhere else within the DOM.

The expander pattern requires two components -- the ExpanderContent and the ExpanderTrigger. You will need to implement a component which handles the communication between these two components so the Trigger knows which Content to toggle. This is done through the setTarget method exposed on the ExpanderTrigger.

```html
<ExpanderContent ref="infoContent">
  <p className="h1 bg-neutral-2 type-neutral-9">Hamburgers</p>
</ExpanderContent>

<ExpanderTrigger ref="infoTrigger">
  <button className="btn btn-highlight">Toggle Content</button>
</ExpanderTrigger>
```