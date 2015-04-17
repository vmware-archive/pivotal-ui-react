# Pui-react-tabs

Using Tab components in React consists of a parent element for the desired Tab type (for example, SimpleTabs or SimpleAltTabs). Each Tab is a child of this and has a tab property for the string value a Tab should display. Additionally, each Tab must define an eventKey property for uniquely identifying this tab to its parent component. When you want to indicate which tab should be selected by default, apply the defaultActiveKey prop to the parent.

```html
<SimpleTabs defaultActiveKey={1}>
  <Tab eventKey={1} tab="Tab 1">Wow!</Tab>
  <Tab eventKey={2} tab="Tab 2">
    <h2>Neat!</h2>
    <span>So much content.</span>
  </Tab>
</SimpleTabs>

<SimpleAltTabs defaultActiveKey={2}>
  <Tab eventKey={1} tab="Tab 1">Wow!</Tab>
  <Tab eventKey={2} tab="Tab 2">
    <h2>Neat!</h2>
    <span>So much content.</span>
  </Tab>
</SimpleAltTabs>
```