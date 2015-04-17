# Pui-react-sortable-table

The SortableTable component is a robust component that offers a styled table with fully functioning sort.

```js
var sortTableCols = [
  {
    name: 'name',
    title: 'Name',
    sortable: true
  },
  {
    name: 'instances',
    title: 'Instances',
    sortable: true,
    align: 'center'
  },
  {
    name: 'cpu',
    title: 'CPU',
    sortable: true,
    align: 'right'
  },
  {
    name: 'synergy',
    title: 'Synergy',
    align: 'left'
  }
]

var sortTableData = [
  {
    instances: '1',
    name: 'foo',
    cpu: 'po',
    synergy: 'qum',
    ram: 'bee',
  },
  {
    name: 'yee',
    instances: 'di',
    cpu: 'no',
    synergy: 'aum'
  },
  {
    name: 'zee',
    instances: 'si',
    cpu: 'mo',
    synergy: 'wum'
  },
  {
    name: 'jee',
    instances: 'ui',
    cpu: 'no',
    synergy: 'mum'
  }
];
```

```html
<SortableTable
  data={sortTableData}
  columns={sortTableCols}
  classes={['table-data', 'table-light']} />
```