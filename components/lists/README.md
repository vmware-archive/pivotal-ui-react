#pivotal-ui-react.lists

Lists to display data in various ways.

Sample Usage
```js
var lists = require('pivotal-ui-react.lists');
var UnorderedList = lists.UnorderedList;
var ListItem = lists.ListItem;

var MyComponent = React.createClass({
  render: function() {
    return (
      <UnorderedList>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </UnorderedList>
    );
  }
});
```

## Types of Lists

Type                | Description
------------------- | ----------------------------------------------
`UnorderedList`     | "An unordered list of items."
`OrderedList`       | "An ordered list of items."
`InlineList`        | "A list which displays in a single line."
`GroupList`         | "A list which displays data in divided vertical segments."
`GroupListInverse`  | "A list which displays data in divided vertical segments with darker lines."
`StepList`          | "A list which displays data like a step based set of instructions."
`BreadcrumbList`    | "A list which displays data by placing a '>' in between list items to indicate procession."

For more detailed usage information, see the [style guide](http://styleguide.cfapps.io/react_beta.html#list_react).
